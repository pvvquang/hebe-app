import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Button from "../Button/Button";
import "./Carousel.scss";

import SwiperCore, { Pagination, Autoplay } from "swiper";
import ProductApi from "../../api/ProductApi";
import { AppContext } from "../../app/Context/AppProvider";

SwiperCore.use([Pagination, Autoplay]);

function Carousel(props) {
  const [products, setProducts] = useState([]);
  const { getTypeSell } = ProductApi;
  const { showCouponCode } = useContext(AppContext);

  useEffect(() => {
    const getApi = async () => {
      const params = {
        _page: 1,
        _limit: 5,
      };

      const response = await getTypeSell("new-arrivals", params);
      setProducts(response.data);
    };

    getApi();
  }, []);

  useEffect(() => {
    if (showCouponCode) {
      document.querySelector(".slideshow").style.marginTop = "45px";
    } else {
      document.querySelector(".slideshow").style.marginTop = 0;
    }
  }, [showCouponCode]);

  return (
    <div className="slideshow">
      <Swiper
        spaceBetween={0}
        pagination={true}
        slidesPerView={1}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        loop={true}
      >
        {products.map((item, index) => (
          <SwiperSlide key={index}>
            <Slide item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function Slide({ item }) {
  return (
    <div className="slide__content">
      <div className="container">
        <div className="wrap">
          <img
            className="slide__content-img"
            src={item.photoURL[0]}
            alt={item.name}
          />
          <div className="slide__content-wrap">
            <p className="slide__content-desc">Our starting lineup</p>
            <h2 className="slide__content-title">New Arrivals</h2>
            <div className="slide__content-btns">
              <Button className="slide-btn">For Men's</Button>
              <Button className="slide-btn">For Women's</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
