import { React } from "react";
import "../../styles/footer.css";
import logo from "../../images/just_kissan_market.png";
import facebookIcon from "../../images/SocialMediaIcons/facebook.png";
import instagramIcon from "../../images/SocialMediaIcons/instagram.png";
import linkedinIcon from "../../images/SocialMediaIcons/linkedin.png";
import pinterestIcon from "../../images/SocialMediaIcons/pinterest.png";
import twitterIcon from "../../images/SocialMediaIcons/twitter.png";
import whatsappIcon from "../../images/SocialMediaIcons/whatsapp.png";
// import youtubeIcon from "../../images/SocialMediaIcons/youtube.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-column">
            <img src={logo} alt="kissan market india logo"></img>
            <ul className="footer-col-elements">
              <li>
                <p>
                  Kissan Market India is a one stop platform for farmers in
                  India to Sell fresh farm produce, connecting buyers in cities
                  with farmers in rural India. Buy directly from farmers, cut
                  out the middlemen, win win for farmers and consumers.
                </p>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>About Us</h4>
            <ul className="footer-col-elements">
              <li>
                <a href="www.google.com">FAQ</a>
              </li>
              <li>
                <a href="www.google.com">Anti-Scam</a>
              </li>
              <li>
                <a href="www.google.com">Terms</a>
              </li>
              <li>
                <a href="www.google.com">Privacy</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact</h4>
            <textarea
              type="text"
              placeholder="write to us..."
              className="footer-contact-message"
            />
            <br />
            <button>Send Message</button>
          </div>
        </div>
        <div className="footer-sm-section">
          <a href="https://www.google.com">
            <img className="footer-sm-icon" src={facebookIcon}></img>
          </a>
          <a href="https://www.google.com">
            <img className="footer-sm-icon" src={instagramIcon}></img>
          </a>
          <a href="https://www.google.com">
            <img className="footer-sm-icon" src={twitterIcon}></img>
          </a>
          <a href="https://www.google.com">
            <img className="footer-sm-icon" src={linkedinIcon}></img>
          </a>
          <a href="https://www.google.com">
            <img className="footer-sm-icon" src={whatsappIcon}></img>
          </a>
          <a href="https://www.google.com">
            <img className="footer-sm-icon" src={pinterestIcon}></img>
          </a>
        </div>
        <div className="copyright-disclaimer">
          <hr></hr>
          <p>
            © {new Date().getFullYear()} Kissan Market India. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
