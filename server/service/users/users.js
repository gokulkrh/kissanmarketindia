import { GetUser, CreateUser } from "../../dataStore/store/users.js";
import User from "../../dataStore/models/entities/users.js";

async function Login(request) {
  try {
    const user = await GetUser(request.username);
    if (user.password !== request.password) {
      return false;
    }
    return true;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function RegisterUser(reqBody) {
  let user = new User(
    reqBody.fullname + reqBody.phone,
    reqBody.fullname,
    reqBody.password,
    reqBody.email,
    reqBody.phone,
    reqBody.profile_pic_url,
    reqBody.send_marketing_emails
  );

  try {
    await CreateUser(user);
  } catch (error) {
    console.error("RegisterUser: ", error.message);
    throw error;
  }
}

export { Login, RegisterUser };
