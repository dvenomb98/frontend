import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { GoogleAuthProvider, User, onAuthStateChanged, signInWithRedirect } from 'firebase/auth';
import { auth, db } from '../../firebase';
import { UserData } from '@/types/firebaseTypes';
import { createUserDocument } from '@/utils/userUtils';
import { doc, onSnapshot } from 'firebase/firestore';

interface UserContextValue {
  user: User | null;
  signInWithGoogle: () => void;
  signOut: () => void;
  userData: UserData | null;
  authLoading: boolean;
  contextLoad: boolean;
}

const UserContext = createContext<UserContextValue>({
  user: null,
  signInWithGoogle: () => {},
  signOut: () => {},
  userData: null,
  authLoading: false,
  contextLoad: false,
});

export const useUser = () => {
  return useContext(UserContext);
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [authLoading, setAuthLoading] = useState<boolean>(false);
  const [contextLoad, setContextLoad] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      setAuthLoading(true);
      const result = await signInWithRedirect(auth, provider);

      const { user } = result;

      await createUserDocument(user);
      setAuthLoading(false);
    } catch (error) {
      console.error('Error during Google sign-in', error);
    }
  };

  const signOut = async () => {
    try {
      setAuthLoading(true);
      await auth.signOut();
      setAuthLoading(false);
    } catch (error) {
      console.error('Error during Google sign-out', error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setContextLoad(true);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (user) {
      const unsub = onSnapshot(doc(db, 'users', user.uid), (doc) => {
        setUserData(doc.data() as UserData);
      });
      return () => {
        unsub();
      };
    }
  }, [user]);

  return (
    <UserContext.Provider
      value={{ user, signInWithGoogle, signOut, userData, authLoading, contextLoad }}
    >
      {contextLoad && children}
    </UserContext.Provider>
  );
};
