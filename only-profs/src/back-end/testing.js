import * as functions from "./functions.js";

// Do testing here
export async function testSignup() {
  await functions.signUp("etst@gmail.com", "TestPassword"); // Sample user
};

export async function testGetProfessorInfo() {
    const data = await functions.getProfessorInfo("Koopa");
};

export async function testGetProfessorVideos() {
    const data = await functions.getProfessorVideos("Kl0CEYb8srflJYbuATiRRvMv7nn2");
    console.log(data);
};

export async function getProfessorInfoByUID() {
    const data = await functions.getProfessorInfoByUID("SCN0gVD7aaYRr5M9oTHxmyNpmWJ3");
    console.log(data);
}
