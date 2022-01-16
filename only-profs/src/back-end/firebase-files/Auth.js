import { db, auth } from "./firebase.js";
import { createProfessorDocument, createInstructorDocument } from "./create.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const serverError = (errorCode, errorMessage) => {
  return { errorCode: errorCode, errorMessage: errorMessage };
};

const signUpProfessor = async (email, password, username, title, description) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      createProfessorDocument(user, username, title, description);
      return user;
    })
    .catch((error) => {
      return serverError(error.code, error.message);
    });
};

const signUpInstructor = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      createInstructorDocument(user);
      return user;
    })
    .catch((error) => {
      return serverError(error.code, error.message);
    });
};

const signIn = async (email, password) => {
  console.log(email + " " + password);
  let user = undefined;
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      user = userCredential.user;
    })
    .catch((error) => {
      console.log(error);
    });
  return user;
};

export { signIn, signUpProfessor, signUpInstructor };
