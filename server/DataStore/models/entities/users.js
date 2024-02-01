export default class User {
  constructor(
    user_id,
    fullname,
    password,
    email,
    phone,
    profile_pic_url,
    send_marketing_emails
  ) {
    this.user_id = user_id;
    this.fullname = fullname;
    this.password = password;
    this.email = email;
    this.phone = phone;
    this.profile_pic_url = profile_pic_url;
    this.send_marketing_emails = send_marketing_emails;
  }
}
