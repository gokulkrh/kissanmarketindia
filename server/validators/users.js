// import { RegisterUserRequest, LoginRequest } from "../data_store/models/requests/users.js";

// export default {
//   validateLoginRequest(req) {
//     const reqBody = new LoginRequest(req.body);
//     let validationErrors = [];

//     try {
//       reqBody.validateType();
//       reqBody.validateUser();
//     } catch (error) {
//       validationErrors.push(error.message);
//     }

//     if (validationErrors.length > 0) {
//       throw new Error(validationErrors);
//     }

//     return reqBody;
//   },

//   validateRegisterRequest(req) {
//     const reqBody = new RegisterUserRequest(req.body);
//     // let validationErrors = []; // TODO fix validation
//     // try {
//     //   reqBody.validateName();
//     //   reqBody.validateEmail();
//     //   reqBody.validatePhone();
//     //   reqBody.validateProfilePicURL();
//     //   reqBody.validateSendMarketingEmails();
//     // } catch (error) {
//     //   validationErrors.push(error.message);
//     // }

//     // if (validationErrors.length > 0) {
//     //   throw new Error(validationErrors);
//     // }

//     return reqBody;
//   },
// };
