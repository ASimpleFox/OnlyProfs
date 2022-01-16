// All functions that read from cloud firestore
import { db } from "./firebase.js";
import { doc, getDoc, getDocs, collection, query, where } from "firebase/firestore";

const getProfessorVideos = async (userUID) => {
  const videoList = await collection(db, `Professors/${userUID}/Videos`);
  const querySnapshot = await getDocs(videoList);
  var data = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });
  return data;
};

const getProfessorAssignments = async (userUID) => {
  const assignmentList = await collection(db, `Professors/${userUID}/Assignments`);
  const querySnapshot = await getDocs(assignmentList);
  var data = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });
  return data;
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
          data = doc.data();
          data["uid"] = doc.id;
      });
    } catch (err) {
      console.log("An issue occured");
    }
    return data;
};


const getProfessorInfoByUID = async (uid) => {
    const profList = collection(db, "Professors");
    let data = undefined;
    try {
      const querySnapshot = await getDocs(profList);
      querySnapshot.forEach((doc) => {
          if (doc.id === uid) {
              data = doc.data();
          }
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
  getProfessorInfoByUID,
  getInstructorAssignments,
};
