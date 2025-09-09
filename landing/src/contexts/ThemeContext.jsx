import React, { createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Force dark mode exclusively - no light mode support
  useEffect(() => {
    // Function to ensure dark mode is always active
    const enforceDarkMode = () => {
      // Always set dark mode
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      document.documentElement.style.colorScheme = 'dark';
      document.body.style.backgroundColor = '#111827';
      document.body.style.color = '#ffffff';
      localStorage.setItem('theme', 'dark');
      
      // Remove any light mode artifacts
      document.body.classList.add('dark');
      document.body.classList.remove('light');
      
      // Mark as dark-ready
      document.body.classList.add('dark-ready');
      document.body.style.visibility = 'visible';
    };
    
    // Enforce dark mode immediately
    enforceDarkMode();
    
    // Set up interval to continuously enforce dark mode (safety net)
    const intervalId = setInterval(enforceDarkMode, 1000);
    
    // Listen for any attempts to change theme via localStorage
    const handleStorageChange = (e) => {
      if (e.key === 'theme' && e.newValue !== 'dark') {
        enforceDarkMode();
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Cleanup
    return () => {
      clearInterval(intervalId);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Dummy theme object - always dark
  const theme = 'dark';
  const toggleTheme = () => {
    // No-op - dark mode only
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};