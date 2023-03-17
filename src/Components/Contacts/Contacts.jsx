import React from "react";
import Himage from "../../assets/Himage.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./Contacts.css";

export const Contacts = () => {
  return (
    <>
      <div id="contact" className="Contact">
        <div className="contact-card">
          <img className="card-image home-img" src={Himage} alt="contactImg" />
          <div className="card-content">
            <h3 className="card-title">John Doe</h3>
            <p className="card-subtitle">MERN Stack Developer</p>
            <p className="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
              ipsam autem cumque, accusantium dicta odio.
            </p>
            <div className="card-details">
              <p className="card-details-item">
                <span className="card-details-label">Phone:</span>
                <span className="card-details-value">+968 97859628</span>
              </p>
              <p className="card-details-item">
                <span className="card-details-label">Email:</span>
                <span className="card-details-value">
                  noor.jsdivs@gmail.com
                </span>
              </p>
            </div>
            <div className="card-social-links">
              <h2 className="card-social-title">Find me in</h2>
              <div className="card-social-icons">
                <span className="card-social-icon">
                  <FaFacebookF />
                </span>
                <span className="card-social-icon">
                  <FaTwitter />
                </span>
                <span className="card-social-icon">
                  <FaLinkedinIn />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
