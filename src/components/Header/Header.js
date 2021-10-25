import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import logoDark from "../../assets/img/logo-dark.png";
import flagUK from "../../assets/img/flag.png";
import flagVN from "../../assets/img/flagvn.png";
import "./Header.scss";
import NavMobile from "./NavMobile";
import { AppContext } from "../../app/Context/AppProvider";
import CouponCode from "../CouponCode/CouponCode";

const headerNavLeft = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Shop",
    url: "/collection",
  },
  {
    name: "Element",
    url: "/",
  },
];

const headerNavRight = [
  {
    name: "Page",
    url: "/",
  },
  {
    name: "Blog",
    url: "/",
  },
  {
    name: "MegaMenu",
    url: "/",
  },
];

const flags = [
  {
    name: "America",
    src: flagUK,
  },
  {
    name: "Viet Nam",
    src: flagVN,
  },
];

const moneyUnit = ["USD", "VND"];

function Header(props) {
  const headerRef = useRef(null);
  const [imgFlag, setImgFlag] = useState(flagUK);
  const { unit, setUnit } = useContext(AppContext);

  useEffect(() => {
    const stickyHeaer = () => {
      if (headerRef.current) {
        if (
          document.body.scrollTop > 100 ||
          document.documentElement.scrollTop > 100
        ) {
          headerRef.current.classList.add("sticky");
        } else {
          headerRef.current.classList.remove("sticky");
        }
      }
    };

    window.addEventListener("scroll", stickyHeaer);

    return () => window.removeEventListener("scroll", stickyHeaer);
  }, []);

  useEffect(() => {
    const mobileNav = document.querySelector(".header__mobile");
    const mobileNavItems = document.getElementsByClassName("mobile__nav-item");
    function handleClick() {
      document.querySelector(".mobile__nav").classList.toggle("active");
    }

    [...mobileNavItems].forEach((element) =>
      element.addEventListener("click", handleClick)
    );
    mobileNav.addEventListener("click", handleClick);

    return () => {
      mobileNav.removeEventListener("click", handleClick);
      [...mobileNavItems].forEach((element) =>
        element.removeEventListener("click", handleClick)
      );
    };
  }, []);

  return (
    <header className={`header${props.dark ? "dark" : ""}`} ref={headerRef}>
      <CouponCode />
      <div className="container header__container">
        <div className="header-wrap">
          <div className="header__mobile">
            <ion-icon name="menu"></ion-icon>
          </div>
          <div className="header__search">
            <ion-icon name="search-outline"></ion-icon>
            <input
              type="text"
              name="search"
              className="header__search-input"
              placeholder="Search..."
            />
          </div>
          <div className="header__nav">
            <ul className="header__nav-list">
              {headerNavLeft.map((item, index) => (
                <li key={index} className="header__nav-item">
                  <Link to={item.url}>{item.name}</Link>
                </li>
              ))}
              <li className="logo">
                <Link to="/">
                  <img src={props.dark ? logoDark : logo} alt="Hebe" />
                </Link>
              </li>
              {headerNavRight.map((item, index) => (
                <li key={index} className="header__nav-item">
                  <Link to={item.url}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="header__info">
            <div className="header__info-dropdown">
              <img src={imgFlag} alt="" />
              <ion-icon name="chevron-down-outline"></ion-icon>
              <div className="header__info-dropdown-list">
                {flags.map((item, index) => (
                  <div
                    className="header__info-dropdown-item"
                    key={index}
                    onClick={() => setImgFlag(item.src)}
                  >
                    <img src={item.src} alt={item.name} />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="header__info-dropdown money">
              <span>{unit}</span>
              <ion-icon name="chevron-down-outline"></ion-icon>
              <div className="header__info-dropdown-list">
                {moneyUnit.map((item, index) => (
                  <div
                    className="header__info-dropdown-item"
                    key={index}
                    onClick={() => setUnit(item)}
                  >
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="header__info-user">
              <ion-icon name="person-outline"></ion-icon>
            </div>
            <div className="header__info-cart">
              <ion-icon name="cart-outline"></ion-icon>
              <span className="header__info-cart-count">3</span>
            </div>
          </div>
        </div>
      </div>
      <NavMobile
        headerNavLeft={headerNavLeft}
        headerNavRight={headerNavRight}
      />
    </header>
  );
}

export default Header;
