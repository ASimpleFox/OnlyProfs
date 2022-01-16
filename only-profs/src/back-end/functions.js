import * as Auth from "./firebase-files/Auth";
import * as Create from "./firebase-files/create";
import * as Read from "./firebase-files/read";
import * as Remove from "./firebase-files/remove";
import * as Update from "./firebase-files/update";

// All functions that front-end will call (Keep it simple)

const signUp = async (email, password) => {
    await Auth.signUpProfessor(email, password);
    // Could also be for signing up a student
};

const signIn = async (email, password) => {
    await Auth.signIn(email, password);
};

export {signUp, signIn}
