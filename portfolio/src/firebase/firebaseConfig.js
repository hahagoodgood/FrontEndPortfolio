// src/firebase/firebaseConfig.js
// Firebase 프로젝트에서 복사한 구성 객체를 여기에 추가하세요.
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey:process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Firebase 앱 초기화
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const testFirebaseConnection = () => {
    if (firebaseApp) {
      console.log("Firebase initialized successfully:", firebaseApp);
    } else {
      console.error("Firebase initialization failed!");
    }
  };

// export default ;
export { db, firebaseApp, testFirebaseConnection };
