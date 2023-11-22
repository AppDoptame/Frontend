'use client'
// you can remove it if it's not needed

import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    // Check if localStorage is available before using it
    if (typeof localStorage !== 'undefined') {
      const storedData = localStorage.getItem('userData');
      return storedData ? JSON.parse(storedData) : { logged: false };
    } else {
      return { logged: false };
    }
  });

  useEffect(() => {
    // Check if localStorage is available before using it
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('userData', JSON.stringify(userData));
    }
  }, [userData]);

  return (
    <AuthContext.Provider value={{
      userData,
      setUserData,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
