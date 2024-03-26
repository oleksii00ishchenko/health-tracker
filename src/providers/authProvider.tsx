import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { createContext, useState } from 'react';
import { addAdminRole, auth } from 'src/services/firebase';

type AuthProviderProps = {
  children: React.ReactNode;
};

export interface AuthContextType {
  login: (email: string, password: string) => void;
  signup: (email: string, password: string, adminRole: boolean) => void;
  logout: () => void;
  checkAuth: () => boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsAuthenticated(true);
    } catch (e) {
      alert(e);
    }
  };
  const signup = async (email: string, password: string, adminRole: boolean) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      if (adminRole) await addAdminRole({ email });
      setIsAuthenticated(true);
    } catch (e) {
      alert(e);
    }
  };
  const logout = async () => {
    try {
      await signOut(auth);
      setIsAuthenticated(false);
    } catch (e) {
      alert(e);
    }
  };
  const checkAuth = () => {
    return isAuthenticated;
  };
  return <AuthContext.Provider value={{ login, signup, logout, checkAuth }}>{children}</AuthContext.Provider>;
};
