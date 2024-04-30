import RegisterUserRequest from "../data_store/models/requests/users.js";

export default {
  validateLoginRequest: async () => {},

  validateRegisterRequest(req, res) {
    const reqBody = new RegisterUserRequest(req.body);
    let validationErrors = [];

    try {
      reqBody.validateName();
      reqBody.validateEmail();
      reqBody.validatePhone();
      reqBody.validateProfilePicURL();
      reqBody.validateSendMarketingEmails();
    } catch (error) {
      validationErrors.push(error.message);
    }

    if (validationErrors.length > 0) {
      throw new Error(validationErrors);
    }

    return reqBody;
  },
};
