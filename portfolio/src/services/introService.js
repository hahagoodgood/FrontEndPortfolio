import { db, ensureAnonymousLogin } from "../firebase/firebaseConfig";
import { collection, getDocs, doc, updateDoc  } from "firebase/firestore";

export const getIntroduceData = async () => {
    try{
        ensureAnonymousLogin();
        const querySnapshot = await getDocs(collection(db, "introduce"));
        if(!querySnapshot.empty){
            const firstDoc = querySnapshot.docs[0];
            const introduceData = firstDoc.data();
            console.log("intro 데이터:", introduceData);
            return { id: firstDoc.id, ...firstDoc.data() };;
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

// 데이터 수정하기
export const updateIntroduceData = async (docId, updatedData) => {
    try {
        ensureAnonymousLogin();
        const docRef = doc(db, "introduce", docId);
        await updateDoc(docRef, updatedData);
        console.log("intro 데이터가 성공적으로 업데이트되었습니다.");
    } catch (e) {
        console.error("intro 데이터 업데이트 오류: ", e);
    }
};