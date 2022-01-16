// All functions that read from cloud firestore
import { db } from "./firebase.js";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";

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

const getProfessorInfo = async (username) => {
    const profList = collection(db, "Professors");
    let q = (username) ? query(profList, where("username", "==", username)) : undefined;
    var data = undefined;
    try {
      const querySnapshot = await getDocs(q || profList);
      querySnapshot.forEach((doc) => {
          data = doc.data()
      });
    } catch (err) {
      console.log("An issue occured");
    }
    return data;
  };

const serverError = (errorCode, errorMessage) => {
  return { errorCode: errorCode, errorMessage: errorMessage };
};

export {
  getProfessorVideos,
  getProfessorAssignments,
  getProfessorInfo,
  getInstructorAssignments,
};
