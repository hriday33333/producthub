'use client';

import { auth, googleProvider } from '@/firebase/config';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';

export default function useFirebaseAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState('');

  // Track logged-in user
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  // Email Login
  async function login(email, password) {
    try {
      setAuthError('');
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch (err) {
      setAuthError(err.message);
      return false;
    }
  }

  // Register
  async function register(email, password) {
    try {
      setAuthError('');
      await createUserWithEmailAndPassword(auth, email, password);
      return true;
    } catch (err) {
      setAuthError(err.message);
      return false;
    }
  }

  // Google Login
  async function googleLogin() {
    try {
      setAuthError('');
      await signInWithPopup(auth, googleProvider);
      return true;
    } catch (err) {
      setAuthError(err.message);
      return false;
    }
  }

  // Logout
  async function logout() {
    await signOut(auth);
  }

  return { user, login, register, googleLogin, logout, loading, authError };
}
