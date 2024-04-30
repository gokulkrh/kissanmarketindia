import { generatePIDwithPrefix } from "../../../utils/utils.js";

export default class User {
  constructor(reqBody) {
    this.setValues(reqBody);
  }

  setValues(reqBody) {
    this.user_id = generatePIDwithPrefix("usr");
    this.fullname = reqBody.fullname || "";
    this.password = reqBody.password || "";
    this.email = reqBody.email || "";
    this.phone = reqBody.phone || "";
    this.profile_pic_url = reqBody.profile_pic_url || "";
    this.send_marketing_emails = reqBody.send_marketing_emails || "";
  }
}
