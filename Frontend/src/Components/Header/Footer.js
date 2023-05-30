import "./Footer.css";
import { Link } from "react-router-dom";
import facebookIcon from "../Images/facebook.jpeg";
import instagramIcon from "../Images/instagram.jpeg";
import twitterIcon from "../Images/twitter.jpeg";
import linkedinIcon from "../Images/linkedin.jpeg";
import log from "../Images/Logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img src={log} alt="good" className="imag" />
      </div>
      <div className="list">
        <ul>
          <li>
            <Link to="/travel">Travel</Link>
          </li>
          <li>
            <Link to="/hotels">Hotels</Link>
          </li>
          <li>
            <Link to="/places">Places</Link>
          </li>
          <li>
            <Link to="/weather">Weather</Link>
          </li>
          <li>
            <Link to="/todos">To Do's</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="icons">
        <ul>
          <li>
            {" "}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src={facebookIcon}
                className="facebookIcon"
                alt="facbookIcon"
              />{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src={instagramIcon}
                className="facebookIcon"
                alt="instagramIcon"
              />{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src={twitterIcon}
                className="facebookIcon"
                alt="twitterIcon"
              />{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src={linkedinIcon}
                className="facebookIcon"
                alt="linkedinIcon"
              />{" "}
            </a>{" "}
          </li>
        </ul>
      </div>
      <div className="terms">
        <div className="copyright">
          {" "}
          &copy; 2022 Travelry. All Rights Reserved.
        </div>
        <div className="termsOfUse">
          <a href="https://www.facebook.com/"> Terms of Use</a>
        </div>
        <div className="privacyPolicy">
          <a href="https://www.facebook.com/">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
