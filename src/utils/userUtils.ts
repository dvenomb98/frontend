import { arrayRemove, arrayUnion, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { UserData } from '@/types/firebaseTypes';
import { User } from 'firebase/auth';
import { FirebaseDocs } from '@/constants/firebaseConsts';

export const isVideoFavorite = (videoId: string, favorites: string[]) =>
  favorites.some((favorite) => favorite === videoId);

export const addToFavorites = async (videoId: string, userId: string): Promise<boolean> => {
  if (!userId) return false;

  const userRef = doc(db, 'users', userId);
  const userDoc = await getDoc(userRef);

  if (!userDoc.exists()) return false;

  const userData = userDoc.data() as UserData;
  const favorites = userData.favorites || [];

  const isFavorite = isVideoFavorite(videoId, favorites);

  try {
    if (isFavorite) {
      await updateDoc(userRef, {
        favorites: arrayRemove(videoId),
      });
      return true;
    } else {
      await updateDoc(userRef, {
        favorites: arrayUnion(videoId),
      });

      return true;
    }
  } catch (error) {
    console.error('Error updating favorites', error);
    return false;
  }
};

export const createUserDocument = async (user: User) => {
  try {
    const userRef = doc(db, FirebaseDocs.USERS, user.uid);
    const userDoc = await getDoc(userRef);

    if (!userDoc.exists()) {
      const { displayName, email, photoURL, metadata } = user;

      try {
        await setDoc(userRef, {
          displayName,
          email,
          photoURL,
          createdAt: metadata.creationTime,
        });
      } catch (e) {
        console.error('Error creating user document', e);
      }
    }
  } catch (e) {
    console.error('Error during creaeUserDocument', e);
  }
};
