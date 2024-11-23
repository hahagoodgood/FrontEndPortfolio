// src/firebase/firebaseConfig.js
// Firebase 프로젝트에서 복사한 구성 객체를 여기에 추가하세요.
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";

// .env 파일의 api 키값을 ""으로 감싸면 안 된다.
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Firebase 앱 초기화
const firebaseApp = initializeApp(firebaseConfig);

// Firestore 초기화
const db = getFirestore(firebaseApp);

// 연결확인
const testFirebaseConnection = () => {
  // fierbaseApp이 비여있지 않을 경우
  if (firebaseApp) {
    console.log("Firebase initialized successfully:", firebaseApp);
  } else {
    console.error("Firebase initialization failed!");
  }
};

// 권한 얻기
const auth = getAuth(firebaseApp);

// export default ;
export { db, firebaseApp, auth, testFirebaseConnection };
