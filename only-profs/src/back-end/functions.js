import { db, auth } from "./firebase-files/firebase.js";
import { doc, collection, addDoc, getDocs, setDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const proffesorRef = doc(db, "Professors");
const instructorsRef = doc(db, "Instructors");
const studentsRef = doc(db, "Students");

const createProfessorDocument = ({ user }) => {
  setDoc(doc(db, `Professors/${user.providorData.uid}`), {});
};

const signUpProfessor = ({ email, password }) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      createProfessorDocument(user);
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return error;
    });
};

const signInProfessor = ({ email, password }) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return error;
    });
};
