import { React, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/header.css";

import logo from "../../images/logo.png";
import loginIcon from "../../images/login.png";
import registerIcon from "../../images/register.png";

export default function Header() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleButtonClick = (e) => {
    const name = e.currentTarget.name;
    switch (name) {
      case "toggle-login":
        setShowLoginForm(!showLoginForm);
        break;
      case "register-redirect":
        if (location.pathname !== "/register") {
          navigate("/register");
        }
        break;
      case "create-post-redirect":
        if (location.pathname !== "/create") {
          navigate("/create");
        }
        break;
      default:
        break;
    }
  };

  function getGoogleAuthURL() {
    const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";

    const options = {
      redirect_uri: "http://localhost:5000/api/sessions/oauth/google",
      client_id:
        "118555229427-maiirupthbtejc4ia8s5s8lnipvlcofo.apps.googleusercontent.com",
      access_type: "offline",
      response_type: "code",
      prompt: "consent",
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ].join(" "),
    };

    console.log({ options });
    const qs = new URLSearchParams(options);
    console.log({ qs });

    return `${rootUrl}?${qs.toString()}`;
  }

  function LoginForm() {
    return (
      <div className="login-popup">
        <div className="login-form">
          <h3>Log In</h3>
          <a href={getGoogleAuthURL()}>
            <button>Login with Google</button>
          </a>
          <button>Login with Facebook</button>
          <br />
          <label>Login</label>
          <input name="email-or-phone" placeholder="Email or Phone" />
          <br />
          <label>Password</label>
          <input name="password" placeholder="Password" />
          <br />
          <input type="checkbox" />
          <label>Keep me logged in</label>
          <br />
          <button name="toggle-login" onClick={handleButtonClick}>
            Cancel
          </button>
          <button>Login</button>
        </div>
      </div>
    );
  }

  return (
    <div className="header">
      {showLoginForm ? <LoginForm /> : null}
      <div className="header-container">
        <div className="header-app-col">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="header-user-col">
          <button
            name="toggle-login"
            className="toggle-login"
            onClick={handleButtonClick}
          >
            <img src={loginIcon} />
            Login
          </button>
          <button
            name="register-redirect"
            className="register-redirect"
            onClick={handleButtonClick}
          >
            <img src={registerIcon} />
            Register
          </button>
          <button
            name="create-post-redirect"
            className="create-post-redirect"
            onClick={handleButtonClick}
          >
            +Add Product
          </button>
        </div>
      </div>
    </div>
  );
}
