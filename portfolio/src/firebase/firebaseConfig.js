// src/firebase/firebaseConfig.js
// Firebase 프로젝트에서 복사한 구성 객체를 여기에 추가하세요.
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey:process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
};

// Firebase 앱 초기화
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
