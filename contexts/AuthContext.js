"use client";

import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);

  const toggleConnect = () => {
    setIsConnected(!isConnected);
  };

  return (
    <AuthContext.Provider value={{ isConnected, toggleConnect }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
