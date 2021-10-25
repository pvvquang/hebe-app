import React from "react";
import "./FormSignIn.scss";

function FormSignIn() {
  return (
    <div className="container">
      <div className="row signIn__wrap">
        <div className="col-md-6 col-12">
          <div className="signIn__text">
            <ion-icon name="mail-outline"></ion-icon>
            <span>
              Sign up to enjoy free U.S. shipping and returns on your first
              order.
            </span>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <form className="signIn__form">
            <input type="email" placeholder="Email Address" />
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormSignIn;
