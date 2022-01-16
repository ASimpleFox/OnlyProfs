import * as functions from "./functions.js";

// Do testing here
const testSignup = async () => {
  await functions.signUp("etst@gmail.com", "TestPassword");
};

export { testSignup };
