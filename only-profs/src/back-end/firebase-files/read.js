// All functions that read from cloud firestore
import { db } from "./firebase.js";
import { doc, getDoc, collection, query, where } from "firebase/firestore";

const getProfessorVideos = async (userUID) => {
  const professorVideosDoc = await getDoc(
    doc(db, `Professors/${userUID}/Videos`)
  );

  if (professorVideosDoc.exists()) {
    return professorVideosDoc.data();
  } else {
    console.log(serverError("", "Document doesn't exist"));
    return undefined;
  }
};

const getProfessorAssignments = async (userUID) => {
  const professorVideosDoc = await getDoc(
    doc(db, `Professors/${userUID}/Assignments`)
  );

  if (professorVideosDoc.exists()) {
    return professorVideosDoc.data();
  } else {
    console.log(serverError("", "Document doesn't exist"));
    return undefined;
  }
};

const getInstructorAssignments = async (userUID) => {
  const professorVideosDoc = await getDoc(
    doc(db, `Instructor/${userUID}/Assignments`)
  );
  return professorVideosDoc;
};


const serverError = (errorCode, errorMessage) => {
  return { errorCode: errorCode, errorMessage: errorMessage };
};

export {
  getProfessorVideos,
  getProfessorAssignments,
  getInstructorAssignments,
};
