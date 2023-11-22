'use client'

import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  console.log(localStorage.getItem('userData'))
  const [userData, setUserData] = useState(() => {
    // Intenta cargar los datos del localStorage al inicio
    const storedData = localStorage.getItem('userData');
    console.log("data almacenada" + storedData)
    return storedData ? JSON.parse(storedData) : { logged: false };
  });

  useEffect(() => {
    // Almacena los datos en el localStorage cada vez que userData cambia
    console.log(localStorage.getItem('userData'))
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

  return (
    <AuthContext.Provider value={{
      userData,
      setUserData
    }}>
      {children}
    </AuthContext.Provider>
  )
}


export default AuthProvider