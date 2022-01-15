// All functions that read from cloud firestore
import { db } from "./firebase-files/firebase.js";
import { doc, collection, addDoc, getDocs } from "firebase/firestore";

const getProfessorVideos = async ({ userUID }) => {
  const professorVideosDoc = await getDoc(
    doc(db, `Professors/${user.providerData.uid}/Videos`)
  );

  if (professorVideosDoc.exists()) {
    return professorVideosDoc.data();
  } else {
    return serverError("", "Document doesn't exist");
  }
};

const getProfessorAssignments = async ({ userUID }) => {
  const professorVideosDoc = await getDoc(
    doc(db, `Professors/${user.providerData.uid}/Assignments`)
  );

  if (professorVideosDoc.exists()) {
    return professorVideosDoc.data();
  } else {
    return serverError("", "Document doesn't exist");
  }
};

const getInstructorAssignments = async ({ userUID }) => {
  const professorVideosDoc = await getDoc(
    doc(db, `Instructor/${user.providerData.uid}/Assignments`)
  );

  if (professorVideosDoc.exists()) {
    return professorVideosDoc.data();
  } else {
    return serverError("", "Document doesn't exist");
  }
};

const serverError = (errorCode, errorMessage) => {
  return { errorCode: errorCode, errorMessage: errorMessage };
};

export {
  getProfessorVideos,
  getProfessorAssignments,
  getInstructorAssignments,
};
