import { doc, collection, addDoc, getDocs, setDoc } from "firebase/firestore";

const professorRef = doc(db, "Professors");
const instructorsRef = doc(db, "Instructors");
const studentsRef = doc(db, "Students");


const createProfessorDocument = ({ user }) => {
    setDoc(doc(db, `Professors/${user.providorData.uid}`), {});
};

export {createProfessorDocument}