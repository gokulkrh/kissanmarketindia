import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/users/register.css";

import imageIcon from "../../images/images.png";
import penIcon from "../../images/pen.png";
import heartIcon from "../../images/heart.png";

import {
  ValidateName,
  ValidateEmail,
  ValidateMobile,
  ValidatePassword,
  MatchPassword,
} from "./helper";

export default function RegistrationPage() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [marketing, setMarketing] = useState(false);

  const HandleInput = (e) => {
    const { name, value, checked } = e.target;
    switch (name) {
      case "fullname":
        // var resp = ValidateName(value);
        // if (!resp.isValid) {
        //   alert(resp.message);
        // }
        setFullname(value);
        break;
      case "email":
        // resp = ValidateEmail(value);
        // if (!resp.isValid) {
        //   alert(resp.message);
        // }
        setEmail(value);
        break;
      case "phone":
        // resp = ValidateMobile(value);
        // if (!resp.isValid) {
        //   alert(resp.message);
        // }
        setPhone(value);
        break;
      case "password":
        // resp = ValidatePassword(value);
        // if (!resp.isValid) {
        //   alert(resp.message);
        // }
        setPassword(value);
        break;
      case "confirm-password":
        // resp = MatchPassword(value);
        // if (!resp.isValid) {
        //   alert(resp.message);
        // }
        setConfirmPassword(value);
        break;
      case "marketing":
        setMarketing(checked);
        break;
      default:
        break;
    }
  };

  const PostUsers = () => {
    if (!fullname || !phone || !email || !password) {
      alert("missing fields", fullname);
      return;
    }
    axios
      .post("http://localhost:5000/v1/users/register", {
        fullname: fullname,
        email: email,
        phone: phone,
        password: password,
        send_marketing_emails: marketing,
      })
      .then((response) => {
        if (response.status === 200) {
          alert("User Registered Successfully");
        }
      });
  };

  return (
    <div className="reg-component">
      <div className="reg-form-container">
        <h2>Create your account, It's 100% free</h2>
        <button>Sign in Google</button>
        <button>Sign in FaceBook</button>
        <h4>OR</h4>
        <div className="reg-form">
          <label>Name</label>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="fullname"
            placeholder="Name"
            onBlur={HandleInput}
          />
          <br />
          <label>Phone</label>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            onBlur={HandleInput}
          />
          <br />
          <label>Email</label>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="email"
            placeholder="Email"
            onBlur={HandleInput}
          />
          <br />
          <label>Password</label>
          <br />
          <input
            type="text"
            name="password"
            placeholder="Password"
            onBlur={HandleInput}
          />
          <br />
          <input
            type="text"
            name="confirm-password"
            placeholder="Confirm Password"
            onBlur={HandleInput}
          />
          <br />
          <input type="checkbox" onChange={HandleInput} />
          <label>I have read and agree to the Terms & Conditions</label>
          <br />
          <input type="checkbox" name="marketing" onChange={HandleInput} />
          <label>I accept to receive marketing emails</label>
          <br />
          <button onClick={PostUsers}>Register</button>
        </div>
      </div>
      <div className="reg-info">
        <div className="reg-info-sec">
          <img src={imageIcon} alt="something" />
          <h3>Post a Free Classified</h3>
          <p>
            Do you have something to sell, to rent, any service to offer or a
            job offer? Post it at Kissan Market India, its free, for local
            business and very easy to use!
          </p>
        </div>
        <div className="reg-info-sec">
          <img src={penIcon} alt="something" />
          <h3>Create and Manage Items</h3>
          <p>
            Become a best seller or buyer. Create and Manage your ads. Repost
            your old ads, etc.
          </p>
        </div>
        <div className="reg-info-sec">
          <img src={heartIcon} alt="something" />
          <h3>Create your Favorite ads list.</h3>
          <p>
            Create your Favorite ads list. And save your search. Don't forget
            any deal.
          </p>
        </div>
      </div>
    </div>
  );
}
