'use client'

import { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

  const [userData, setUserData] = useState({ logged: false });


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