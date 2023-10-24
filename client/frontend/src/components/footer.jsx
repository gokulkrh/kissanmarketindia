import {React} from "react";
import "./styles/footer.css"

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h4>About Us</h4>
                    <ul className="footer-col-elements">
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Anti-Scam</a></li>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Privacy</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Contact & Sitemap</h4>
                    <ul className="footer-col-elements">
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Sitemap</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>My Account</h4>
                    <ul className="footer-col-elements">
                        <li><a href="#">Log In</a></li>
                        <li><a href="#">Register</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Follow Us On</h4>
                </div>
            </div>
        </div>
    )
}

export default Footer