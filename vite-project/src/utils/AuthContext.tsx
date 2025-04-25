import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { AuthContextType } from '../types/authContextType';
import { User } from '../types/userType';
import { fakeAuth } from './fakeAuth';

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: async () => false,
  logout: () => {},
});

export const AuthProvider: React.FC<{children: ReactNode;}> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Vérifier si l'utilisateur est déjà connecté au chargement
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    const authSuccess = await fakeAuth(username, password)
    if (authSuccess) {
        const newUser = { username };
        setUser(newUser);
        setIsAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(newUser));
        return true;
    } else {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('user');
        return false;
    }
    }
  
  
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};