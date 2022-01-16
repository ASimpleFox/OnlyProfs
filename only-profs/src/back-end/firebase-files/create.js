import { db } from "./firebase.js";
import { doc, setDoc } from "firebase/firestore";

const createProfessorDocument = async (user, username, ) => {
  console.log(user);
  await setDoc(doc(db, `Professors/${user.uid}/UserInformation/Information`), {
    email: user.email,
  }, { merge: true});
  await setDoc(doc(db, `Professors/${user.uid}/Videos/Video`), {}, { merge: true});
  await setDoc(doc(db, `Professors/${user.uid}/Assignments/Assignment`), {}, { merge: true});
};

const createInstructorDocument = async (user) => {
  await setDoc(doc(db, `Instructor/${user.uid}/UserInformation/Information`), {
    email: user.email,
  }, { merge: true});
  await setDoc(doc(db, `Instructor/${user.uid}/Videos/Video`), {}, { merge: true});
};

export { createProfessorDocument, createInstructorDocument };
