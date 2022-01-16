import * as functions from "./functions.js";

// Do testing here
export async function testSignup() {
  await functions.signUp("etst@gmail.com", "TestPassword"); // Sample user
};

export async function getProfessorInfo() {
  const data = await functions.getProfessorInfo("Koopa");
  console.log(data);
}
