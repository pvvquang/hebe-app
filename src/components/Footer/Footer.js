import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/footer-logo.png";
import pay from "../../assets/img/paypal.png";
import "./Footer.scss";

const company = ["Our Story", "Eureka", "Projects", "Thinkers"];
const information = ["Help", "Feedback", "Returns", "Press"];

function Footer(props) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row footer__wrap">
          <div className="col-lg-4 order-3 order-lg-1">
            <div className="footer__nav">
              <div className="footer__nav-list">
                <h3>Company</h3>
                <div>
                  {company.map((item, index) => (
                    <Link key={index} to="" className="footer__nav-item">
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="footer__nav-list">
                <h3>Information</h3>
                <div>
                  {information.map((item, index) => (
                    <Link key={index} to="" className="footer__nav-item">
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 order-2 order-lg-2">
            <div className="footer__logo">
              <img className="footer__logo-img" src={logo} alt="Hebe Logo" />
              <p className="footer__logo-desc">Animal Shop</p>
            </div>
          </div>
          <div className="col-lg-4 order-1 order-lg-3">
            <div className="footer__form">
              <p className="footer__form-title">
                Don't miss out on the latest.
              </p>
              <p className="footer__form-desc">
                Get notified of new products, limited releases, and more.
              </p>
              <form>
                <input type="email" placeholder="Email Address" />
                <button className="footer__form-btn">Submit</button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer__bottom row">
          <div className="col-lg-4 col-md-6 col-12 ">
            <div className="footer__bottom-social">
              <Link to="">
                <ion-icon name="logo-twitter"></ion-icon>
              </Link>
              <Link to="">
                <ion-icon name="logo-dribbble"></ion-icon>
              </Link>
              <Link to="">
                <ion-icon name="logo-behance"></ion-icon>
              </Link>
              <Link to="">
                <ion-icon name="logo-instagram"></ion-icon>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="footer__bottom-text">
              <p>© 2018 Famithemes. All rights reserved</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="footer__bottom-pay">
              <img src={pay} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
