import { NextApiRequest, NextApiResponse } from 'next';
import * as admin from 'firebase-admin';
import { FirebaseDocs } from '@/constants/firebaseConsts';
import { UserData } from '@/types/firebaseTypes';

// For scaling purpose, we should refactor this so we fetch only releavant users and dont fetch all users from databse

const serviceAccount: admin.ServiceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  privateKey: process.env.FIREBASE_PRIVATE_KEY,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
};

// Initialize
const app = !admin.apps.length
  ? admin.initializeApp({ credential: admin.credential.cert(serviceAccount) })
  : admin.app();

const db = app.firestore();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const usersRef = db.collection(FirebaseDocs.USERS);
      const querySnapshot = await usersRef.get();
      const docsArray = querySnapshot.docs.map((doc) => {
        return doc.data();
      }) as UserData[];

      const userNonSensitiveInfo = docsArray.map((user) => ({
        displayName: user.displayName,
        photoURL: user.photoURL,
        rank: user.rank,
        id: user.id,
      }));

      res.status(200).json(userNonSensitiveInfo);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch user data.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}
