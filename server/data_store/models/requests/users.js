export default class RegisterUserRequest {
  constructor(reqBody) {
    this.setValues(reqBody);
  }

  setValues(reqBody) {
    this.fullname = reqBody.fullname || "";
    this.password = reqBody.password || "";
    this.email = reqBody.email || "";
    this.phone = reqBody.phone || "";
    this.profile_pic_url = reqBody.profile_pic_url || "";
    this.send_marketing_emails = reqBody.send_marketing_emails || "";
  }

  validateName() {
    if (typeof this.fullname !== "string") {
      throw new Error('invalid dataType for field "fullname"');
    } else if (this.fullname === "") {
      throw new Error("name cannot be empty");
    } else if (this.fullname.length > 50) {
      throw new Error("name is too long");
    }
  }

  validateEmail() {
    if (typeof this.email !== "string") {
      throw new Error('invalid dataType for field "email"');
    } else if (this.email === "") {
      throw new Error("email cannot be empty");
    }
  }

  validatePhone() {}

  validateProfilePicURL() {}

  validateSendMarketingEmails() {
    if (typeof this.send_marketing_emails !== "boolean") {
      throw new Error('invalid dataType for field "send_marketing_emails"');
    }
  }
}
