import { arrayRemove, arrayUnion, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { UserData } from '@/types/firebaseTypes';
import { User } from 'firebase/auth';
import { FirebaseDocs } from '@/constants/firebaseConsts';

export const isVideoFavorite = (videoId: string, favorites: string[]) =>
  favorites.some((favorite) => favorite === videoId);

export const isMarkedAsCompleted = (videoId: string, completed: string[]) =>
  completed?.some((video) => video === videoId);

// In addToFavorites and addToCompleted we could first fetch userData from database and then look video is completed.
// But we got web socket connected to userData, so there shouldnt be any missmatch.
// Could change it later

export const addToFavorites = async (
  videoId: string,
  userId: string,
  favorites: string[],
): Promise<boolean> => {
  if (!userId || !videoId) return false;

  const userRef = doc(db, FirebaseDocs.USERS, userId);

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

export const addToCompleted = async (
  videoId: string,
  userId: string,
  completed: string[],
): Promise<boolean> => {
  if (!userId || !videoId) return false;

  const userRef = doc(db, FirebaseDocs.USERS, userId);
  const isCompleted = isMarkedAsCompleted(videoId, completed);

  try {
    if (isCompleted) {
      await updateDoc(userRef, {
        completed: arrayRemove(videoId),
      });
      return true;
    } else {
      await updateDoc(userRef, {
        completed: arrayUnion(videoId),
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
          completed: [],
          favorites: [],
        });
      } catch (e) {
        console.error('Error creating user document', e);
      }
    }
  } catch (e) {
    console.error('Error during creaeUserDocument', e);
  }
};
