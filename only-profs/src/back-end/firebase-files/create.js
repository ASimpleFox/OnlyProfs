import { db } from "./firebase.js";
import { doc, setDoc, addDoc, updateDoc } from "firebase/firestore";

const createProfessorDocument = async (
  user,
  userUsername,
  userTitle,
  userDescription
) => {
  await setDoc(
    doc(db, `Professors/${user.uid}`),
    {
      email: user.email,
      username: userUsername,
      title: userTitle,
      description: userDescription,
    },
    { merge: true }
  );
  await setDoc(
    doc(db, `Professors/${user.uid}/Videos/Video`),
    {},
    { merge: true }
  );
  await setDoc(
    doc(db, `Professors/${user.uid}/Assignments/Assignment`),
    {},
    { merge: true }
  );
};

const createInstructorDocument = async (user) => {
  await setDoc(
    doc(db, `Instructor/${user.uid}`),
    {
      email: user.email,
    },
    { merge: true }
  );
  await setDoc(doc(db, `Instructor/${user.uid}/Videos`), {}, { merge: true });
};

const addVideoUrl = async (url, uid, fileName, description) => {
  await setDoc(
    doc(db, `Professors/${uid}/Videos/${fileName}`),
    {
      videoURL: url,
      videoDescription: description,
      videoName: fileName,
    },
    { merge: true }
  );
};

const addAssignmentUrl = async (url, uid, fileName, description) => {
  await setDoc(
    doc(db, `Professors/${uid}/Assignments/${fileName}`),
    {
      assignmentURL: url,
      assignmentDescription: description,
      assignmentName: fileName,
    },
    { merge: true }
  );
};

export {
  createProfessorDocument,
  createInstructorDocument,
  addVideoUrl,
  addAssignmentUrl,
};
