import { createContext, useContext, useState } from 'react';
import { api } from '@/services/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [candidate, setCandidate] = useState(null);
  const [loading, setLoading] = useState(false);

  const signIn = async (payload) => {
    setLoading(true);
    try {
      const result = await api.login(payload);
      setCandidate(result.candidato);
      return result;
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (payload) => {
    setLoading(true);
    try {
      const result = await api.register(payload);
      setCandidate(result.candidato);
      return result;
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => setCandidate(null);

  return (
    <AuthContext.Provider value={{ candidate, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error('useAuth deve ser usado dentro de AuthProvider.');
  return value;
}
