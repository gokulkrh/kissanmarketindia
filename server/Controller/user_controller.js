import { Login, RegisterUser } from "../Service/Users/users.js";
import RegisterUserRequest from "../DataStore/models/requests/users.js";

import {
  ValidateLoginRequest,
  ValidateRegisterRequest,
} from "../Validator/users.js";

import { CreateToken } from "../Middleware/jwt_auth.js";

async function LoginHandler(req, res, next) {
  const request = {
    user: req.body.user,
    password: req.body.password,
  };

  const token = CreateToken(request.user);

  res.cookie("jwt", token, {
    withCredentials: true,
    httpOnly: false,
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.status(201).json({ token: token });
  //   try {
  //     var err = ValidateLoginRequest(request);
  //     if (err) {
  //       res.status(400).json("invalid request Idiot!!");
  //       return;
  //     }
  //   } catch (error) {
  //     res.status(500).json("unexpected error");
  //     return;
  //   }

  //   try {
  //     const valid_user = await Login(request);
  //     if (valid_user) {
  //       const token = CreateToken(request.username);
  //       res.status(200).json({ token: token });
  //       return;
  //     }
  //     res.status(400).json("create account first");
  //   } catch (error) {
  //     console.log(error);
  //     res.status(500).json("something went wrong");
  //   }
}

async function RegisterHandler(req, res) {
  let reqBody;
  try {
    reqBody = ValidateRegisterRequest(req);
  } catch (error) {
    return res.status(400).json({ "message: ": error.message });
  }

  try {
    await RegisterUser(reqBody);
  } catch (error) {
    return res.status(500).json({ "message: ": error.message });
  }

  return res.status(200).json(reqBody);
}

// async function FetchUserHandler(req, res) {
//     res.status(200).json({ user: "swaglord" });
// };

// async function UpdateUserHandler(req, res) {};

export { RegisterHandler, LoginHandler };
