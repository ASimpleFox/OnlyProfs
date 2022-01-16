import {
  ref,
  storage,
  getDownloadURL,
  uploadBytes,
} from "../firebase-files/firebase";
import { addVideoUrl, addAssignmentUrl } from "../firebase-files/create.js";

const uploadVideoToStorage = async (uid, file, fileName, description) => {
  const videosRef = ref(storage, `${uid}/Videos/${fileName}`);
  await uploadBytes(videosRef, file)
    .then((snapshot) => {
    })
    .catch((e) => {
      return "Error";
    });

  await getDownloadURL(ref(storage, `${uid}/Videos/${fileName}`))
    .then((url) => {
      console.log("Calling Add Video URL: ", url);
      addVideoUrl(url, uid, fileName, description);
    })
    .catch((error) => {
      return "Error";
    });

  return "Success";
};

const uploadAssignmentToStorage = async (uid, file, fileName, description) => {
  const assignmentRef = ref(storage, `${uid}/Assignments/${fileName}`);
  await uploadBytes(assignmentRef, file)
    .then((snapshot) => {
    })
    .catch((e) => {
      return "Error";
    });

  await getDownloadURL(ref(storage, `${uid}/Assignments/${fileName}`))
    .then((url) => {
      addAssignmentUrl(url, uid, fileName, description);
    })
    .catch((error) => {
      return "Error";
    });

  return "Success";
};

export { uploadVideoToStorage, uploadAssignmentToStorage };
