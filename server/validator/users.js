import validator from "validator";
import RegisterUserRequest from "../dataStore/models/requests/users.js";

function ValidateLoginRequest(request) {
  const reqBody = {};
  return reqBody;
}

function validateLoginType(type) {}

function ValidateRegisterRequest(req) {
  let reqBody = new RegisterUserRequest(req.body);

  return reqBody;
}

function validateEmail(email) {}

function validatePhone(phone_number) {}

// function ValidatePincode(pincode) {}

export { ValidateLoginRequest, ValidateRegisterRequest };
