import { generatePIDwithPrefix } from "../../../utils/utils.js";

export default class Post {
  constructor(data) {
    this.setValues(data);
  }

  setValues(data) {
    this.post_id = generatePIDwithPrefix("pst");
    this.title = data.title || "";
    this.category = data.category || "others";
    this.description = data.description || "";
    this.price = data.price || "";
    this.quantity = data.quantity || "";
    this.home_delivery = data.home_delivery || false;
    this.pincode = data.pincode || "";
    this.place = data.place || "";
    this.latitude = data.latitude || "";
    this.longitude = data.longitude || "";
  }
}
