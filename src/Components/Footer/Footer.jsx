import React from "react";
import "./Footer.css";
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Telegram,
  Twitter,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="foot_container">
      <div className="foot_logo">
        <span className="foot_top">De'LEGEND</span>
        <span className="foot_bottom">RESTAURANT</span>
      </div>
      <div className="contact_us">
        {/* <h5>Get In Touch</h5> */}
        <p className="mail">
          <span className="iconn">
            <Mail />
          </span>
          <span>delegendrestaurant@info.ng</span>
        </p>
        <p className="phone">
          <span className="iconn">
            <Phone />
          </span>
          <span>+234 806 377 5427 | +234 904 846 8728</span>
        </p>
      </div>
      <div className="icons">
        <Facebook /> <Instagram /> <Twitter /> <Telegram />{" "}
      </div>
    </footer>
  );
};

export default Footer;
