# Dockerfile ultra-sécurisé pour landing page
FROM node:18-alpine AS build

# Sécurité: utilisateur non-root
RUN addgroup -g 1001 -S nodejs && \
    adduser -S landing -u 1001 -G nodejs

# Copier et installer les dépendances
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production --no-audit --no-fund

# Copier le code source et build
COPY --chown=landing:nodejs . .
RUN npm run build

# Stage de production ultra-minimal
FROM nginx:1.25-alpine AS production

# Sécurité: supprimer les packages inutiles
RUN apk del --purge wget curl && \
    rm -rf /var/cache/apk/* /tmp/* /var/tmp/*

# Utilisateur non-root
RUN addgroup -g 1001 -S landing && \
    adduser -S landing -u 1001 -G landing

# Configuration Nginx sécurisée
COPY <<EOF /etc/nginx/nginx.conf
user landing;
worker_processes auto;
pid /tmp/nginx.pid;

events {
    worker_connections 1024;
    use epoll;
}

http {
    # Sécurité
    server_tokens off;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self';" always;
    
    # Performance
    gzip on;
    gzip_vary on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    
    # Limites de sécurité
    client_max_body_size 1M;
    client_body_timeout 10s;
    client_header_timeout 10s;
    
    server {
        listen 3030;
        root /usr/share/nginx/html;
        index index.html;
        
        # Sécurité: masquer la version nginx
        server_tokens off;
        
        # Gestion des erreurs sécurisée
        error_page 404 /404.html;
        error_page 500 502 503 504 /50x.html;
        
        location / {
            try_files \$uri \$uri/ /index.html;
            
            # Cache statique
            location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
                expires 1y;
                add_header Cache-Control "public, immutable";
            }
        }
        
        # Bloquer les fichiers sensibles
        location ~ /\. {
            deny all;
            return 404;
        }
        
        location ~ \.(env|config|log)$ {
            deny all;
            return 404;
        }
    }
}
EOF

# Copier les fichiers buildés
COPY --from=build --chown=landing:landing /app/dist /usr/share/nginx/html/

# Permissions sécurisées
RUN chown -R landing:landing /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# Utilisateur non-root
USER landing

EXPOSE 3030
CMD ["nginx", "-g", "daemon off;"]