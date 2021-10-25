import React from "react";
import { Link } from "react-router-dom";
import "./Banner.scss";

function Banner(props) {
  return (
    <div className="container">
      <div className="banner__img">
        <div className="banner__img-content">
          <p className="banner__img-content-desc">
            Free shipping worldwide on all baskets over £600.
          </p>
          <Link className="banner__img-content-link" to="">
            Shipping & Returns
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
