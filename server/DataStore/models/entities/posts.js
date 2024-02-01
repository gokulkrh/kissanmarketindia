export default class Post {
  constructor(
    post_id,
    title,
    category,
    description,
    price,
    quantity,
    home_delivery,
    pincode,
    place,
    latitude,
    longitude
  ) {
    this.post_id = post_id;
    this.title = title;
    this.category = category;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.home_delivery = home_delivery;
    this.pincode = pincode;
    this.place = place;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
