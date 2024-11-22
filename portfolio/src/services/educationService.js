import {db} from "../firebase/firebaseConfig";
import {collection, addDoc, getDocs} from "firebase/firestore";

//파이어베이스에 저장
export const saveEducationData = async(data)=>{
    try{
        const docRef = await addDoc(collection(db, "education"), data);
        console.log("Document written with ID: ", docRef.id);
    } catch (e){
        console.error("Error adding document: ", e);
    }
}

// educationData 읽기
export const getEducationData = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "education"));
        const educationList = [];
        querySnapshot.forEach((doc) => {
            educationList.push({ id: doc.id, ...doc.data() });
            // console.log("id:",doc.id, ...doc.data());
        });
        return educationList;
    } catch (e) {
        console.error("Error fetching documents: ", e);
    }
 };