import "./Footer.css"

import FooterLocation from "../../assets/Icons/footerlocation.svg?react"
import FooterEmail from "../../assets/Icons/footeremail.svg?react";
import FooterCall from "../../assets/Icons/footercall.svg?react";
import FooterLogo from "../../assets/Icons/footerlogo.svg?react";
import FooterFaceBook from "../../assets/Icons/footerfacebook.svg?react";
import FooterInstagram from "../../assets/Icons/footerinstagram.svg?react";
import FooterPintrest from "../../assets/Icons/footerpintrest.svg?react";
import FooterTwitter from "../../assets/Icons/footertwitter.svg?react";

export default function Footer(){
    return(
<footer className="footer">
  <section className="contact-bar">
    <div className="contact-bar__container">
      <div className="contact-bar__item">
        <div className="contact-bar__icon-wrapper">
            <FooterLocation classNameName="fas fa-map-marker-alt"/>
        </div>
        <div classNameName="contact-bar__content">
          <span className="contact-bar__label">Address:</span>
          <p className="contact-bar__value">1925 Boggess Street</p>
        </div>
      </div>

      <div className="contact-bar__item">
        <div className="contact-bar__icon-wrapper">
            <FooterCall className="fas fa-phone-alt"/>
        </div>
        <div className="contact-bar__content">
          <span className="contact-bar__label">Phone:</span>
          <p className="contact-bar__value">(00) 875 784 568</p>
        </div>
      </div>

      <div className="contact-bar__item">
        <div className="contact-bar__icon-wrapper">
            <FooterEmail className="fas fa-envelope" />
        </div>
        <div className="contact-bar__content">
          <span className="contact-bar__label">Email:</span>
          <p className="contact-bar__value">info@gmail.com</p>
        </div>
      </div>
    </div>
  </section>

  <section className="footer-main">
    <div className="footer-main__container">
      <div className="footer-main__column footer-main__column--about">
        <div className="footer-main__logo">
            <FooterLogo/>
        </div>
        <p className="footer-main__description">
          Interdum velit laoreet id donec ultrices tincidunt arcu. Tincidunt tortor aliqua mfacilisi cras fermentum odio eu.
        </p>
        <div className="footer-main__socials">
          <a href="#" className="footer-main__social-link"><FooterFaceBook className="fab fa-facebook-f"/></a>
          <a href="#" className="footer-main__social-link"><FooterInstagram className="fab fa-instagram" /></a>
          <a href="#" className="footer-main__social-link"><FooterPintrest className="fab fa-pinterest-p" /></a>
          <a href="#" className="footer-main__social-link"><FooterTwitter className="fab fa-twitter"/></a>
        </div>
      </div>

      <div className="footer-main__column">
        <h3 className="footer-main__title">Our Services:</h3>
        <ul className="footer-main__list">
          <li className="footer-main__list-item"><a href="#">Web Development</a></li>
          <li className="footer-main__list-item"><a href="#">UI/UX Design</a></li>
          <li className="footer-main__list-item"><a href="#">Management</a></li>
          <li className="footer-main__list-item"><a href="#">Digital Marketing</a></li>
          <li className="footer-main__list-item"><a href="#">Blog News</a></li>
        </ul>
      </div>

      <div className="footer-main__column">
        <h3 className="footer-main__title">Gallery</h3>
        <div className="footer-main__gallery">
          <img src="link1.png" alt="" className="footer-main__gallery-img"/>
          <img src="link2.png" alt="" className="footer-main__gallery-img"/>
          <img src="link3.png" alt="" className="footer-main__gallery-img"/>
          <img src="link4.png" alt="" className="footer-main__gallery-img"/>
          <img src="link5.png" alt="" className="footer-main__gallery-img"/>
          <img src="link6.png" alt="" className="footer-main__gallery-img"/>
        </div>
      </div>

      <div className="footer-main__column">
        <h3 className="footer-main__title">Subscribe</h3>
        <form className="footer-main__form">
          <input type="email" className="footer-main__input" placeholder="Enter your email:"/>
          <button type="submit" className="footer-main__button">SUBSCRIBE NOW</button>
        </form>
      </div>
    </div>
  </section>

  <div className="footer-copyright">
    <p className="footer-copyright__text">Copyright © 2024 <span className="footer-copyright__highlight">edunity</span> || All Rights Reserved</p>
  </div>
</footer>
    )
}