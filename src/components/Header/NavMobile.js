import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./NavMobile.scss";

function NavMobile({ headerNavLeft, headerNavRight }) {
  return (
    <div className="mobile__nav">
      <div className="mobile__nav-search">
        <ion-icon name="search-outline"></ion-icon>
        <input
          type="text"
          name="search"
          className="mobile__nav-search-input"
          placeholder="Search..."
        />
      </div>
      <ul className="mobile__nav-list">
        {headerNavLeft.map((item, index) => (
          <li key={index} className="mobile__nav-item">
            <Link to={item.url}>{item.name}</Link>
          </li>
        ))}
        {headerNavRight.map((item, index) => (
          <li key={index} className="mobile__nav-item">
            <Link to={item.url}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <Button className="signIn-btn">Đăng nhập</Button>
    </div>
  );
}

export default NavMobile;
