import {
  RegisterUser,
  GetUser,
  VerifyLogin,
} from "../../services/users/users_services";

function RegisterHandler(req, res) {
  res.status(200).json("User registered successfully");
}

function FetchUserHandler(req, res) {
  res.status(200).json({ user: "swaglord" });
}

function LoginHandler(req, res) {
  res.status(200).json({ message: "User Logged in successfully" });
}

export { RegisterHandler, FetchUserHandler, LoginHandler };
