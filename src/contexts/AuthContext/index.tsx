import { createContext, useEffect, useState } from 'react';
import { auth } from 'services/firebase';
import { AuthContextType, AuthContextProviderProps, User } from './types';
import { signInWithGoogle } from 'services/auth';

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(() => {
      handleSignInWithGoogle();
    });

    return () => {
      unsubscribe();
    };
  }, []);

  async function handleSignInWithGoogle() {
    const { user } = await signInWithGoogle();
    if (user) {
      const { uid, displayName, photoURL } = user;
      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, signInWithGoogle: handleSignInWithGoogle }}
    >
      {children}
    </AuthContext.Provider>
  );
};
