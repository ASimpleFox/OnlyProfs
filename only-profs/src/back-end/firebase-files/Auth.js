import { db, auth } from "./firebase-files/firebase.js";
import { doc, collection, addDoc, getDocs, setDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const signUpProfessor = ({ email, password }) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      createProfessorDocument(user);
      return user;
    })
    .catch((error) => {
      return serverError(error.code, error.message);
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
      return serverError(error.code, error.message);
    });
};

const serverError = (errorCode, errorMessage) => {
    return {"errorCode": errorCode, "errorMessage": errorMessage}
};

export {signInProfessor, signUpProfessor}
