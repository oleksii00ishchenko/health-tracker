import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { createContext, useState } from 'react';
import { auth, db } from 'src/services/firebase';

type AuthProviderProps = {
  children: React.ReactNode;
};

export interface AuthContextType {
  login: () => void;
  signup: (email: string, password: string) => void;
  logout: () => void;
  checkAuth: () => boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const login = () => {};
  const signup = async (email: string, password: string) => {
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      setDoc(doc(db, 'users', cred.user.uid), {});
      setIsAuthenticated(true);
    } catch (e) {
      alert(e);
    }
  };
  const logout = () => {};
  const checkAuth = () => {
    return isAuthenticated;
  };
  return <AuthContext.Provider value={{ login, signup, logout, checkAuth }}>{children}</AuthContext.Provider>;
};
