import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../app/Context/AppProvider";
import "./Banners.scss";

function Banners(props) {
  const { showCouponCode } = useContext(AppContext);

  useEffect(() => {
    if (showCouponCode) {
      document.querySelector(".banners").style.marginTop = "45px";
    } else {
      document.querySelector(".banners").style.marginTop = 0;
    }
  }, [showCouponCode]);

  return (
    <div className="banners">
      <div className="banners__warp">
        <h2 className="banners__title">Shop</h2>
        <p className="banners__desc">
          Home
          <ion-icon name="chevron-forward-outline"></ion-icon>
          Shop
        </p>
      </div>
    </div>
  );
}

export default Banners;
