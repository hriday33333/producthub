'use client';

import useFirebaseAuth from '@/Hooks/useFirebaseAuth';
import { createContext } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const auth = useFirebaseAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
