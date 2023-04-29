import {
  Comment,
  CourseContent,
  Courses,
  Creator,
  Forum,
  Topic,
  UserNonSensitive,
  Videos,
} from '@/types/firebaseTypes';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase';
import { FirebaseDocs } from '@/constants/firebaseConsts';
import axios from 'axios';

export const fetchAllCourses = async (): Promise<Courses[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, FirebaseDocs.COURSES));
    const docsArray = querySnapshot.docs.map((doc) => {
      return doc.data();
    });
    return docsArray as Courses[];
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const fetchSingleCourse = async (id: string): Promise<Courses | undefined> => {
  try {
    const ref = doc(db, FirebaseDocs.COURSES, id);
    const docSnap = await getDoc(ref);

    if (!docSnap.exists()) {
      return undefined;
    }

    return docSnap.data() as Courses;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

export const fetchCourseContent = async (
  content_id: string,
): Promise<CourseContent | undefined> => {
  try {
    const ref = doc(db, FirebaseDocs.CONTENT, content_id);
    const docSnap = await getDoc(ref);

    if (!docSnap.exists()) {
      return undefined;
    }

    const data = docSnap.data();
    const creators = await fetchAllCreators();

    if (!creators.length) return data as CourseContent;

    const dataWithCreators = data.content.map((item: Videos) => {
      const correctCreator = creators.find((creator) => creator.id === item.creator_id);

      if (!correctCreator) return item;

      return {
        ...item,
        creator_info: correctCreator,
      };
    });

    const creatorsArray = [...new Set(dataWithCreators.map((o: Videos) => o.creator_info))].filter(
      Boolean,
    );

    const courseData = {
      ...data,
      content: dataWithCreators,
      creators: creatorsArray,
    };

    return courseData as CourseContent;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

export const fetchAllCreators = async (): Promise<Creator[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, FirebaseDocs.CREATORS));
    const docsArray = querySnapshot.docs.map((doc) => {
      return doc.data();
    });
    return docsArray as Creator[];
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const fetchAllVideos = async (): Promise<Videos[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, FirebaseDocs.CONTENT));
    const allContent = querySnapshot.docs.map((doc) => {
      return doc.data();
    });

    const allVideos = allContent.flatMap((item) => item.content);

    return allVideos as Videos[];
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const fetchFavorites = async (favorites: string[]): Promise<Videos[]> => {
  try {
    const allVideos = await fetchAllVideos();
    const creators = await fetchAllCreators();

    const favoritesVideos = allVideos.filter((video) => favorites.includes(video.id));

    const withCreators = favoritesVideos.map((item: Videos) => {
      const correctCreator = creators.find((creator) => creator.id === item.creator_id);
      if (!correctCreator) return item;
      return {
        ...item,
        creator_info: correctCreator,
      };
    });

    return withCreators;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const fetchForumContent = async (): Promise<Forum[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, FirebaseDocs.FORUM));
    const docsArray = querySnapshot.docs.map((doc) => {
      return doc.data();
    });
    return docsArray as Forum[];
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const fetchSingleForumContent = async (id: string): Promise<Courses | undefined> => {
  try {
    const ref = doc(db, FirebaseDocs.FORUM, id);
    const docSnap = await getDoc(ref);

    if (!docSnap.exists()) {
      return undefined;
    }

    return docSnap.data() as Courses;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

export const fetchForumTopic = async (id: string): Promise<Topic[]> => {
  const ref = collection(db, FirebaseDocs.TOPICS);
  const q = query(ref, where('forum_id', '==', id));

  try {
    const response = await axios.get(`${process.env.DOMAIN}/api/users`);
    const usersNonSensitive: UserNonSensitive[] = response.data;
    const querySnapshot = await getDocs(q);

    const docsArray = querySnapshot.docs.map((doc) => doc.data());
    const topicWithUser = docsArray.map((doc) => ({
      ...doc,
      user_profile: usersNonSensitive.find((user) => user.id === doc.user_id),
    }));

    return Promise.all(topicWithUser as Topic[]);
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const fetchForumComments = async (id: string): Promise<Comment[]> => {
  const ref = collection(db, FirebaseDocs.COMMENTS);
  const q = query(ref, where('topic_id', '==', id));

  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN}/api/users`);
    const usersNonSensitive: UserNonSensitive[] = response.data;
    const querySnapshot = await getDocs(q);

    const docsArray = querySnapshot.docs.map((doc) => doc.data());
    const commentWithUser = docsArray.map((doc) => ({
      ...doc,
      user_profile: usersNonSensitive.find((user) => user.id === doc.user_id),
    }));

    return Promise.all(commentWithUser as Comment[]);
  } catch (e) {
    console.error(e);
    return [];
  }
};
