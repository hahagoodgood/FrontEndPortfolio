import {db, ensureAnonymousLogin} from "../firebase/firebaseConfig"
import { collection, addDoc, getDocs} from "firebase/firestore"


// userData 읽기
export const getUserData = async () => {
    try{

        ensureAnonymousLogin();
        const querySnapshot = await getDocs(collection(db, "user"));
        if (!querySnapshot.empty){
            const firstDoc = querySnapshot.docs[0];
            const userData = firstDoc.data();
            console.log("유저 데이터: ", userData);
            return userData;
        }else{
            console.error("documents가 비어있습니다.");
            return null;
        }
    }
    catch(e){
        console.error("",e);
    }
};