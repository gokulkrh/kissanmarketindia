import { React } from "react";
import "../styles/users/create_post.css";

export default function CreatePostComponent() {
  function SellerInformation() {
    return (
      <div className="create-post-seller-info">
        <h2>Seller Information</h2>
        <div>
          <label>Your Name</label>
          <input type="text" placeholder="your name" />
          <br />
          <label>Phone Number</label>
          <input type="text" placeholder="Phone Number" />
          <br />
          <label>Email</label>
          <input type="text" placeholder="Email" />
          <br />
        </div>
      </div>
    );
  }

  return (
    <div className="create-post-page">
      <div className="create-post-form">
        <h2>Post Free Ads</h2>
        <label>Category</label>
        <input type="text" placeholder="Select a category" />
        <br />
        <label>Product Name</label>
        <input type="text" placeholder="Enter Product Name" />
        <br />
        <label>Pictures</label>
        <input type="text" placeholder="Picture #1" />
        <br />
        <input type="text" placeholder="Picture #2" />
        <br />
        <input type="text" placeholder="Picture #3" />
        <br />
        <input type="text" placeholder="Picture #4" />
        <br />
        <input type="text" placeholder="Picture #5" />
        <br />
        <label>Price</label>
        <input type="text" placeholder="eg. 150" />
        <br />
        <label>City</label>
        <input type="text" placeholder="Select a city" />
        <br />
        <SellerInformation />
        <button>Submit</button>
      </div>
      <div className="post-ads-information">
        <h3>Post Free Ads</h3>
        <p>
          Do you have something to sell, to rent, any service to offer or a job
          offer? Post it at Kissan Market India, its free, for local business
          and very easy to use!
        </p>
        <br />
        <h4>How to sell quickly</h4>
        <ul>
          <li>Use a brief title and description of the item</li>
          <li>Make sure you post in the correct category</li>
          <li>Add nice photos to your ad</li>
          <li>Put a reasonable price</li>
          <li>Check the item before publish</li>
        </ul>
      </div>
    </div>
  );
}
