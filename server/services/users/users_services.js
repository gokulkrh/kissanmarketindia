import { CreateNewUser } from "../../DataStore/store/users/users_store";
import { User } from "../../DataStore/models/users/user";

function RegisterUser() {
  const user = User.build({
    user_id: "usr_8086183925_johndoe",
    user_name: "john doe",
    full_name: "John Doe",
    email: "johndoe@gmail.com",
    phone: "8086183925",
    password: "johndoe@123",
    joined_date: new Date(),
    is_deleted: false,
  });

  CreateNewUser(user);
}

function GetUser() {}

function VerifyLogin() {}

export { RegisterUser, GetUser, VerifyLogin };
