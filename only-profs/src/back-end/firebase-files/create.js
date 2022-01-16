import { db } from "./firebase.js";
import { doc, setDoc, addDoc } from "firebase/firestore";

const createProfessorDocument = async (user, userUsername, userTitle, userDescription) => {
  console.log(user);
  await setDoc(doc(db, `Professors/${user.uid}/UserInformation/Information`), {
    email: user.email,
    username: userUsername,
    title: userTitle,
    description: userDescription,
  }, { merge: true });
  await setDoc(doc(db, `Professors/${user.uid}/Videos/Video`), {}, { merge: true });
  await setDoc(doc(db, `Professors/${user.uid}/Assignments/Assignment`), {}, { merge: true});
};

const createInstructorDocument = async (user) => {
  await setDoc(doc(db, `Instructor/${user.uid}/UserInformation/Information`), {
    email: user.email,
  }, { merge: true });
  await setDoc(doc(db, `Instructor/${user.uid}/Videos/Video`), {}, { merge: true });
};

const addVideoUrl = async (url, uid, fileName, description) => {
  await addDoc(`Professors/${uid}/Videos/Video`, {fileName: {videoURL:url, videoDiscription: description}});
}

const addAssignmentUrl = async (url, uid, fileName, description) => {
  await addDoc(`Professors/${uid}/Assignments/Assignment`, {fileName: {assignmentURL:url, assignmentDiscription: description}});
}


export { createProfessorDocument, createInstructorDocument, addVideoUrl, addAssignmentUrl };
