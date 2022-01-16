import { storage } from "./firebase-files/firebase";
import {addVideoUrl } from "../firebase-files/create.js"

const uploadVideoToStorage = (uid, file, fileName, description) => {
  storage
    .ref(`${uid}/Videos/${fileName}`)
    .put(file)
    .then((snapshot) => {
      console.log("Uploaded a blob or file!");
      //Call function to upload download link to firebase
    });

  getDownloadURL(ref(storage, `${uid}/Videos/${fileName}`))
    .then((url) => {
        addVideoUrl(url, uid, fileName, description);
    })
    .catch((error) => {
      // Handle any errors
    });
};

const uploadAssignmentToStorage = (uid, file, fileName, description) => {
  storage
    .ref(`${uid}/Assignments/${fileName}`)
    .put(file)
    .then((snapshot) => {
      console.log("Uploaded a blob or file!");
      //Call function to upload download link to firebase
    });

  getDownloadURL(ref(storage, `${uid}/Assignments/${fileName}`))
    .then((url) => {
        addVideoUrl(url, uid, fileName, description);
    })
    .catch((error) => {
      // Handle any errors
    });
};