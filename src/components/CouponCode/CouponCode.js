import React, { useContext } from "react";
import { AppContext } from "../../app/Context/AppProvider";
import "./CouponCode.scss";

function CouponCode(props) {
  const { showCouponCode, setShowCouponCode } = useContext(AppContext);

  if (!showCouponCode) return null;

  return (
    <div className="coupon-code">
      <div className="container">
        <div className="coupon-code__wrap">
          <p className="coupon-code__text">
            Join our showroom and get 20 % off ! Coupon code : Hebe20
          </p>
          <button
            className="coupon-code__btn"
            onClick={() => setShowCouponCode(false)}
          >
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CouponCode;
