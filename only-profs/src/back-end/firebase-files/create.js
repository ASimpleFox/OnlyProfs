import { db } from "./firebase.js";
import { doc, setDoc } from "firebase/firestore";

const createProfessorDocument = async (user) => {
  console.log(user);
  await setDoc(doc(db, `Professors/${user.uid}/UserInformation/Information`), {
    email: user.email,
  });
  await setDoc(doc(db, `Professors/${user.uid}/Videos/Video`), {});
  await setDoc(doc(db, `Professors/${user.uid}/Assignments/Assignment`), {});
};

const createInstructorDocument = async (user) => {
  await setDoc(doc(db, `Instructor/${user.uid}/UserInformation/Information`), {
    email: user.email,
  });
  await setDoc(doc(db, `Instructor/${user.uid}/Videos/Video`), {});
};

export { createProfessorDocument, createInstructorDocument };
