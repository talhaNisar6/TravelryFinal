import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./AboutUs.css";
import zafar from "../../Images/zafar.png";
import adnan from "../../Images/adnan.png";
import mannan from "../../Images/mannan.png";
import talha from "../../Images/talha.png";
import naveed from "../../Images/naveed.png";
const AboutUs = () => {
  return (
    <div className="about-us-container background-color-gradient">
        <div className="background-color-gradient1">
      <div className="heading-container ">
        <h1 className="about-us-heading">About Us</h1>
      </div>
      <div className="our-team-container">
        <h2 className="our-team-heading">Our Team</h2>
        <div className="employee-cards-container">
          <div className="employee-card">
            <img className="employee-image" src={zafar} alt="employee1" />
            <h3 className="employee-name">Zafar Khan</h3>
            <div className="employee-info">
              <FontAwesomeIcon icon={faPhoneAlt} />
              <span className="employee-phone">123-456-7890</span>
            </div>
            <div className="employee-info">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span className="employee-address">
                Lahore, Pakistan
              </span>
            </div>
            <div className="employee-info">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="employee-email">employee1@example.com</span>
            </div>
          </div>
          <div className="employee-card">
            <img className="employee-image" src={naveed} alt="employee2" />
            <h3 className="employee-name">Naveed Amjad</h3>
            <div className="employee-info">
              <FontAwesomeIcon icon={faPhoneAlt} />
              <span className="employee-phone">123-456-7890</span>
            </div>
            <div className="employee-info">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span className="employee-address">Lahore,pakistan </span>
            </div>
            <div className="employee-info">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="employee-email">employee1@example.com</span>
            </div>
          </div>
          <div className="employee-card">
            <img className="employee-image" src={talha} alt="employee2" />
            <h3 className="employee-name">Talha Nisar</h3>
            <div className="employee-info">
              <FontAwesomeIcon icon={faPhoneAlt} />
              <span className="employee-phone">123-456-7890</span>
            </div>
            <div className="employee-info">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span className="employee-address">Lahore, Pakistan</span>
            </div>
            <div className="employee-info">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="employee-email">employee1@example.com</span>
            </div>
          </div>
          <div>
            <div className="employee-card">
              <img className="employee-image" src={adnan} alt="employee2" />
              <h3 className="employee-name">Adnan Sardar</h3>
              <div className="employee-info">
                <FontAwesomeIcon icon={faPhoneAlt} />
                <span className="employee-phone">123-456-7890</span>
              </div>
              <div className="employee-info">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span className="employee-address">Lahore, pakistan</span>
              </div>
              <div className="employee-info">
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="employee-email">employee1@example.com</span>
              </div>
            </div>
          </div>
          <div>
            <div className="employee-card">
              <img className="employee-image" src={mannan} alt="employee2" />
              <h3 className="employee-name">Abdul Mannan</h3>
              <div className="employee-info">
                <FontAwesomeIcon icon={faPhoneAlt} />
                <span className="employee-phone">123-456-7890</span>
              </div>
              <div className="employee-info">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span className="employee-address">Lahore,Pakistan</span>
              </div>
              <div className="employee-info">
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="employee-email">employee1@example.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AboutUs;
