import { db, auth } from "./firebase.js";
import { createProfessorDocument, createInstructorDocument } from "./create.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const serverError = (errorCode, errorMessage) => {
  return { errorCode: errorCode, errorMessage: errorMessage };
};

const signUpProfessor = async ({ email, password }) => {
  console.log("Starting SignUp Professor");
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Signed Up Professor");
      // Signed in
      const user = userCredential.user;

      createProfessorDocument(user);
      return user;
    })
    .catch((error) => {
      return serverError(error.code, error.message);
    });
};

const signUpInstructor = async ({ email, password }) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      createInstructorDocument(user);
      return user;
    })
    .catch((error) => {
      return serverError(error.code, error.message);
    });
};

const signIn = async ({ email, password }) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      return serverError(error.code, error.message);
    });
};

export { signIn, signUpProfessor, signUpInstructor };
