import { db } from "./firebase-files/firebase.js";
import { doc, setDoc } from "firebase/firestore";

const createProfessorDocument = async ({ user }) => {
  await setDoc(doc(db, `Professors/${user.providerData.uid}/UserInformation`), {
    email: user.providorData.email,
  });
  await setDoc(doc(db, `Professors/${user.providerData.uid}/Videos`), {});
  await setDoc(doc(db, `Professors/${user.providerData.uid}/Assignments`), {});
};

const createInstructorDocument = async ({ user }) => {
  await setDoc(doc(db, `Instructor/${user.providerData.uid}/UserInformation`), {
    email: user.providorData.email,
  });
  await setDoc(doc(db, `Instructor/${user.providerData.uid}/Videos`), {});
};

export { createProfessorDocument, createInstructorDocument };
