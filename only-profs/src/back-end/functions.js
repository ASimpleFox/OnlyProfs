import * as Auth from "./firebase-files/Auth";
import * as Create from "./firebase-files/create";
import * as Read from "./firebase-files/read";
import * as Remove from "./firebase-files/remove";
import * as Update from "./firebase-files/update";

// All functions that front-end will call (Keep it simple)

const signUp = async (email, password) => {
    const user = await Auth.signUpProfessor(email, password);
    return user;
};

const signIn = async (email, password) => {
    const user = await Auth.signIn(email, password);
    return user;
};

export {signUp, signIn}
