import { db, ensureAnonymousLogin } from "../firebase/firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const getIntroduceData = async () => {
    try{
        ensureAnonymousLogin();
        const querySnapshot = await getDocs(collection(db, "introduce"));
        if(!querySnapshot.empty){
            const firstDoc = querySnapshot.docs[0];
            const introduceData = firstDoc.data();
            console.log("intro 데이터:", introduceData);
            return introduceData;
        }else{
            console.error("intro데이터가 비어있습니다.")
            return null
        }
        
        // const introList = [];
        // querySnapshot.forEach((doc) => {
        //     introList.push({ id: doc.id, ...doc.data() });
        // });

        // return introList

    }catch (e) {
        console.error("intro데이터 패치 오류: ", e);
    }
};