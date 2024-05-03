import { generatePIDwithPrefix } from "../../../utils/utils.js";

export default class User {
  constructor(data) {
    this.setValues(data);
  }

  setValues(data) {
    this.user_id = this.user_id || generatePIDwithPrefix("usr");
    this.fullname = data.fullname || this.fullname || "";
    this.password = data.password || this.password || "";
    this.email = data.email || this.email || "";
    this.phone = data.phone || this.phone || "";
    this.profile_pic_url = data.profile_pic_url || this.profile_pic_url || "";
    this.send_marketing_emails = data.send_marketing_emails || this.send_marketing_emails || true;
  }
}
