import { AuthContextType } from '../types/authContextType'
import { createContext } from 'react'

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: async () => false,
  logout: () => {}
})
