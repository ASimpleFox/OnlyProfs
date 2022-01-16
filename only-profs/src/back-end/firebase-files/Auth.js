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
  let user = undefined;
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      user = userCredential.user;
      user.displayName = username;
      createProfessorDocument(user, username, title, description);
    })
    .catch((error) => {
      console.log(serverError(error.code, error.message));
    });
  return user;
};

const signUpInstructor = async (email, password) => {
  let user = undefined;
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      createInstructorDocument(user);
    })
    .catch((error) => {
      console.log(serverError(error.code, error.message));
    });
  return user;
};

const signIn = async (email, password) => {
  let user = undefined;
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      user = userCredential.user;
    })
    .catch((error) => {
        console.log(serverError(error.code, error.message));
    });
  return user;
};

export { signIn, signUpProfessor, signUpInstructor };
