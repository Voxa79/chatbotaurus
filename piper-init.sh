#!/bin/sh

# Piper TTS Initialization Script
# Downloads and configures voice models for French and English

set -e

VOICES_DIR="/data/voices"
PIPER_VOICE_FR="${PIPER_VOICE_FR:-fr_FR-upmc-medium}"
PIPER_VOICE_EN="${PIPER_VOICE_EN:-en_US-amy-medium}"

echo "🎤 Initializing Piper TTS with voices: FR=$PIPER_VOICE_FR, EN=$PIPER_VOICE_EN"

# Create voices directory
mkdir -p "$VOICES_DIR"
cd "$VOICES_DIR"

# Function to download voice if not exists
download_voice() {
    local voice_name="$1"
    local onnx_file="${voice_name}.onnx"
    local json_file="${voice_name}.onnx.json"
    
    if [ ! -f "$onnx_file" ] || [ ! -f "$json_file" ]; then
        echo "📥 Downloading voice: $voice_name"
        
        # Download from Hugging Face
        local base_url="https://huggingface.co/rhasspy/piper-voices/resolve/main"
        
        # Determine language and voice path
        case "$voice_name" in
            fr_FR-*)
                lang_path="fr/fr_FR"
                ;;
            en_US-*)
                lang_path="en/en_US"
                ;;
            *)
                echo "❌ Unsupported voice: $voice_name"
                return 1
                ;;
        esac
        
        # Download files
        wget -q --show-progress "${base_url}/${lang_path}/${voice_name}/${onnx_file}" -O "$onnx_file" || {
            echo "❌ Failed to download $onnx_file"
            return 1
        }
        
        wget -q --show-progress "${base_url}/${lang_path}/${voice_name}/${json_file}" -O "$json_file" || {
            echo "❌ Failed to download $json_file"
            return 1
        }
        
        echo "✅ Voice $voice_name downloaded successfully"
    else
        echo "✅ Voice $voice_name already exists"
    fi
}

# Download configured voices
download_voice "$PIPER_VOICE_FR"
download_voice "$PIPER_VOICE_EN"

echo "🎵 Piper TTS initialization complete!"
echo "📁 Available voices in $VOICES_DIR:"
ls -la "$VOICES_DIR"

# Start Piper HTTP server
echo "🚀 Starting Piper HTTP server..."

# Create a simple HTTP server wrapper for Piper
cat > /usr/local/bin/piper-server.py << 'EOF'
#!/usr/bin/env python3
import os
import sys
import subprocess
import json
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
import tempfile
import base64

class PiperHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        if self.path == '/v1/audio/speech':
            try:
                content_length = int(self.headers['Content-Length'])
                post_data = self.rfile.read(content_length)
                data = json.loads(post_data.decode('utf-8'))
                
                text = data.get('input', '')
                voice = data.get('voice', os.environ.get('PIPER_VOICE_FR', 'fr_FR-upmc-medium'))
                
                if not text:
                    self.send_error(400, "Missing 'input' field")
                    return
                
                # Generate speech with Piper
                with tempfile.NamedTemporaryFile(suffix='.wav', delete=False) as tmp_file:
                    voice_path = f"/data/voices/{voice}.onnx"
                    if not os.path.exists(voice_path):
                        self.send_error(404, f"Voice model not found: {voice}")
                        return
                    
                    cmd = ['piper', '--model', voice_path, '--output_file', tmp_file.name]
                    process = subprocess.Popen(cmd, stdin=subprocess.PIPE, 
                                               stdout=subprocess.PIPE, stderr=subprocess.PIPE)
                    stdout, stderr = process.communicate(text.encode('utf-8'))
                    
                    if process.returncode != 0:
                        self.send_error(500, f"Piper error: {stderr.decode('utf-8')}")
                        return
                    
                    # Read generated audio file
                    with open(tmp_file.name, 'rb') as audio_file:
                        audio_data = audio_file.read()
                    
                    os.unlink(tmp_file.name)
                    
                    # Return audio file
                    self.send_response(200)
                    self.send_header('Content-Type', 'audio/wav')
                    self.send_header('Content-Length', str(len(audio_data)))
                    self.end_headers()
                    self.wfile.write(audio_data)
                    
            except Exception as e:
                self.send_error(500, str(e))
        else:
            self.send_error(404)
    
    def do_GET(self):
        if self.path == '/health':
            self.send_response(200)
            self.send_header('Content-Type', 'text/plain')
            self.end_headers()
            self.wfile.write(b'OK')
        else:
            self.send_error(404)

if __name__ == '__main__':
    server = HTTPServer(('0.0.0.0', 10200), PiperHandler)
    print("Piper TTS server listening on port 10200")
    server.serve_forever()
EOF

chmod +x /usr/local/bin/piper-server.py
python3 /usr/local/bin/piper-server.py