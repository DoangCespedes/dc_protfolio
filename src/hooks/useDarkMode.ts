import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Verificar si hay una preferencia guardada
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return JSON.parse(savedMode);
    }
    // Si no hay preferencia guardada, usar la preferencia del sistema
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Guardar la preferencia en localStorage
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    
    // Aplicar o remover la clase dark del documento
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return { isDarkMode, toggleDarkMode };
};