import { db, ensureAnonymousLogin } from "../firebase/firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

//파이어베이스에 저장
export const saveEducationData = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "education"), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// educationData 읽기
export const getEducationData = async () => {
  try {
    // signInAnonymously: 파이어베이스 익명 인증하여 로그인
    // const userCredential = await signInAnonymously(auth);
    // console.log("Signed in anonymously:", userCredential.user.uid);

    ensureAnonymousLogin();


    // collection(db, "education"): Firestore에서 "education" 컬렉션을 참조합니다.
    // getDocs(): 이 함수는 Promise를 반환하며, 성공 시 모든 문서를 담은 querySnapshot 객체를 제공합니다.
    // querySnapshot: Firestore 컬렉션에서 반환된 모든 문서의 스냅샷 객체입니다.
    // await: async함수 내에서 사용되는 작업이며 Promise(프로미스)가 처리될 때까지(fulfilled/rejected) 실행을 일시적으로 멈추는 역할을 합니다.
    // async 함수: 비동기 작업을 처리하기 위해 사용하는 함수
    // promise: 비동기 작업의 완료 또는 실패를 나타내는 객체
    const querySnapshot = await getDocs(collection(db, "education"));

    // 스냅샷 객체를 저장하기 위한 리스트
    const educationList = [];

    // querySnapshot.forEach: Firestore에서 반환된 각 문서(DocumentSnapshot)에 대해 반복적으로 실행합니다.
    // doc.id: Firestore 문서의 고유 ID를 반환
    // ...doc.data(): Firestore 문서에서 저장된 데이터를 객체 형태로 반환
    // ...: 스프레드 연산자 객체 또는 배열의 모든 요소를 개별적으로 분해하여 사용할 수 있도록 합니다.
    querySnapshot.forEach((doc) => {
        educationList.push({ id: doc.id, ...doc.data() });
    });

    console.log("educationList: ", educationList);

    // startDate를 기준으로 정렬 (오름차순)
    // sort()는 내부적으로 두 개의 배열 요소를 비교하는 함수(compareFunction)를 받아 동작
    // 두 요소를 비교하여  음수면 첫 요소를 앞 양수면 뒤 요소를 앞
    const sortedList = educationList.sort((a, b) => {
      const startDateA = a.startDate.toDate(); // Firestore Timestamp를 Date로 변환
      const startDateB = b.startDate.toDate(); // Firestore Timestamp를 Date로 변환
      // return startDateB - startDateA; //내림 차순
      return startDateA - startDateB; // 오름차순 정렬
    });
    return sortedList;
  } 
  // 오류발생
  catch (e) {
    console.error("Error fetching documents: ", e);
  }
};
