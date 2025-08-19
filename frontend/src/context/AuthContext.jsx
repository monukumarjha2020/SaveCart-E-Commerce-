import React, { createContext } from 'react';

export const authDataContext = createContext();

const AuthContext = ({ children }) => {
  const serverUrl = 'https://savecart-backend.onrender.com'; // your backend URL
 

  return (
    <authDataContext.Provider value={serverUrl}>
      {children}
    </authDataContext.Provider>
  );
};

export default AuthContext;
