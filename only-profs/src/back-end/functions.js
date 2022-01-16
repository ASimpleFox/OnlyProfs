import * as Auth from "./firebase-files/Auth";
import * as Create from "./firebase-files/create";
import * as Read from "./firebase-files/read";
import * as Remove from "./firebase-files/remove";
import * as Update from "./firebase-files/update";

// All functions that front-end will call (Keep it simple)

const signUp = async (email, password, username, title, description) => {
    const user = await Auth.signUpProfessor(email, password, username, title, description);
    return user;
};

const signIn = async (email, password) => {
    const user = await Auth.signIn(email, password);
    return user;
};

const getProfessorVideos = async (uid) => {
    const data = Read.getProfessorVideos(uid);
    return data;
};

const getProfessorAssignments = async (uid) => {
    const data = Read.getProfessorAssignments(uid);
    return data;
};

const getInstructorAssignments = async (uid) => {
    const data = Read.getInstructorAssignments(uid);
    return data;
}

const getProfessorInfo = async (username) => {
    const res = Read.getProfessorInfo(username);
    return res;
}

const getProfessorInfo = async (username) => {
    const res = Read.getProfessorInfo(username);
    return res;
}

//get user information //video, video title, video description, associated aassignments
export {signUp, signIn, getProfessorVideos, getProfessorAssignments, getInstructorAssignments, getProfessorInfo};
