import { storage } from "./firebase-files/firebase";

const uploadVideoToStorage = (uid, file, fileName) => {
  storage
    .ref(`${uid}/Videos/${fileName}`)
    .put(file)
    .then((snapshot) => {
      console.log("Uploaded a blob or file!");
      //Call function to upload download link to firebase
    });

  getDownloadURL(ref(storage, `${uid}/Videos/${fileName}`))
    .then((url) => {
        
    })
    .catch((error) => {
      // Handle any errors
    });
};

const uploadAssignmentToStorage = (uid, file) => {
  storage
    .ref(`${uid}/Assignments`)
    .put(file)
    .then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
};

export { uploadAssignmentToStorage, uploadVideoToStorage };
