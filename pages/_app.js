'use client';
import '../styles/global.css';
import AuthContext from '../context/authContext';
import { useState, useEffect } from 'react';
<link rel="icon" href="/favicon.ico" sizes="any" />

function MyApp({ Component, pageProps }) {

  // Compare this snippet from liferay-quizz/pages/_app.js:

  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Verifica si el usuario ya está autenticado (p.ej., verifica un token en localStorage)
    const token = localStorage.getItem('authToken');
    if (token) {
      setAuthenticated(true);
    }
  }, []);

  const login = () => {
    localStorage.setItem('authToken', 'exampleToken');
    setAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}

export default MyApp;
