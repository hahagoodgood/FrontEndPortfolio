import {db, ensureAnonymousLogin} from "../firebase/firebaseConfig"
import { collection, addDoc, getDocs} from "firebase/firestore"


// userData 읽기
export const getUserData = async () => {
    try{

        ensureAnonymousLogin();
        const querySnapshot = await getDocs(collection(db, "user"));
        const userData = {};
        querySnapshot.forEach((doc) => {
            userData = {...doc.data()}
        });
        return userData;
    }
    catch(e){
        console.error("",e);
    }
};