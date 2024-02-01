import db from "../knex.js";

async function CreateUser(user) {
  try {
    await db.insert(user).into("users");
  } catch (error) {
    console.log("AddUser: ", error.message);
    throw error;
  }
}

async function GetUser() {
  try {
    const user = await db.select("*").from("users");
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function UpdateUser() {}

async function FetchUsername() {}

async function FetchEmail() {}

async function FetchPhone() {}

async function LoginCredentials() {}

export {
  CreateUser,
  GetUser,
  UpdateUser,
  FetchEmail,
  FetchPhone,
  FetchUsername,
  LoginCredentials,
};
