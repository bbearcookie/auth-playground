import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCOSndPISqejNDHU_5DjBg2Z8T1zTgoRvw',
  authDomain: 'auth-playground-cbbff.firebaseapp.com',
  projectId: 'auth-playground-cbbff',
  storageBucket: 'auth-playground-cbbff.appspot.com',
  messagingSenderId: '519059208519',
  appId: '1:519059208519:web:7e51f2b2637cf6c0f0f462',
  measurementId: 'G-X82STRQ158',
};

export const initializeFirebase = () => {
  const firebase = initializeApp(firebaseConfig);
  getAnalytics(firebase);
};
