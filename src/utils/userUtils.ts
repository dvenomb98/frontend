import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  runTransaction,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../../firebase';
import { User } from 'firebase/auth';
import { FirebaseDocs } from '@/constants/firebaseConsts';
import { UserRank } from '@/constants/user';
import { Maybe } from 'yup';
import { ForumTopicInitialValues } from '@/components/forum/ForumCreateTopic';
import { nanoid } from 'nanoid';
import { CommentInitialValues } from '@/components/forum/topicComponents/CommentAdd';
import { Topic } from '@/types/firebaseTypes';

export const isTopicLiked = (user_id: string, likes: string[]) =>
  likes.some((like) => like === user_id);

export const shouldUserRankUp = (completedVideos: number, currentRank: string): Maybe<UserRank> => {
  if (completedVideos >= 5 && currentRank === UserRank.WHITE) return UserRank.BLUE;
  else if (completedVideos >= 10 && currentRank === UserRank.BLUE) return UserRank.PURPLE;
  else if (completedVideos >= 15 && currentRank === UserRank.PURPLE) return UserRank.BROWN;
  else if (completedVideos >= 20 && currentRank === UserRank.BROWN) return UserRank.BLACK;
  else return undefined;
};

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
  currentRank: UserRank,
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
      const newRank = shouldUserRankUp(completed.length + 1, currentRank);
      await updateDoc(userRef, {
        completed: arrayUnion(videoId),
        rank: newRank || currentRank,
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
          rank: UserRank.WHITE,
        });
      } catch (e) {
        console.error('Error creating user document', e);
      }
    }
  } catch (e) {
    console.error('Error during creaeUserDocument', e);
  }
};

export const createForumTopic = async (values: ForumTopicInitialValues): Promise<boolean> => {
  const uniqueID = `topic_${nanoid()}`;
  const ref = doc(db, FirebaseDocs.TOPICS, uniqueID);
  try {
    await setDoc(ref, {
      ...values,
      id: uniqueID,
    });
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const createForumComment = async (values: CommentInitialValues): Promise<boolean> => {
  const uniqueID = `comment_${nanoid()}`;
  const ref = doc(db, FirebaseDocs.COMMENTS, uniqueID);
  try {
    await setDoc(ref, {
      ...values,
      id: uniqueID,
    });
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const handleTopicLike = async (id: string, user_id: string): Promise<boolean> => {
  try {
    const ref = doc(db, FirebaseDocs.TOPICS, id);
    await runTransaction(db, async (transaction) => {
      const doc = await transaction.get(ref);

      if (!doc.exists()) {
        throw new Error('Order does not exist!');
      }

      const data = doc.data() as Topic;

      const isLiked = isTopicLiked(user_id, data.likes);

      if (isLiked) {
        transaction.update(ref, {
          likes: arrayRemove(user_id),
        });
      } else {
        transaction.update(ref, {
          likes: arrayUnion(user_id),
        });
      }
    });
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};
