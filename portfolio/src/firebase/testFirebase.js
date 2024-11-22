import { firebaseApp } from "./firebaseConfig"

const testFirebaseConnection = () => {
     if (firebaseApp) {
      console.log("Firebase initialized successfully:", firebaseApp);
    } else {
      console.error("Firebase initialization failed!");
    }
  };

export default testFirebaseConnection;