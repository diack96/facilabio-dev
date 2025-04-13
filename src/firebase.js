import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "TON_API_KEY",
  authDomain: "TON_DOMAINE.firebaseapp.com",
  projectId: "TON_PROJECT_ID",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
