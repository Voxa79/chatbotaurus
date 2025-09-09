import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css'
import './styles/dark-mode-protection.css'
import { ThemeProvider } from './contexts/ThemeContext'
import { initSecurity } from './utils/security'

// Initialiser la sécurité au démarrage
initSecurity();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)