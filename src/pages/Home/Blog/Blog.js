import React, { useRef } from "react";
import { Link } from "react-router-dom";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import CardImage from "../../../components/CardImage/CardImage";
import "./Blog.scss";

const photo1 =
  "https://images.pexels.com/photos/821652/pexels-photo-821652.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const photo2 =
  "https://images.pexels.com/photos/4295983/pexels-photo-4295983.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const photo3 =
  "https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const photo4 =
  "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const photo5 =
  "https://images.pexels.com/photos/3865912/pexels-photo-3865912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const photo6 =
  "https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

SwiperCore.use([Pagination, Navigation]);

function Blog() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="container">
      <div className="blog">
        <h3 className="blog__title">From our blog</h3>
        <Swiper
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          spaceBetween={42}
          pagination={true}
          slidesPerView={3}
          loop={true}
        >
          {photos.map((item, index) => (
            <SwiperSlide key={index}>
              <BlogItem item={item} />
            </SwiperSlide>
          ))}
          <button className="next-btn" ref={nextRef}>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </button>
          <button className="prev-btn" ref={prevRef}>
            <ion-icon name="chevron-back-outline"></ion-icon>
          </button>
        </Swiper>
      </div>
    </div>
  );
}

export default Blog;

const BlogItem = ({ item }) => {
  return (
    <div className="blog__item">
      <CardImage src={item} paddingTop="106%" />
      <div className="blog__item-content">
        <h4 className="blog__item-content-title">
          Our Journey from Sheep to Shop
        </h4>
        <p className="blog__item-content-desc">
          Cliquam erat volutpat. Praesent ut ligula non mi varius sagitti
          Cliquam erat volutpat. Praesent ut ligula non mi varius sagitti
          Cliquam erat volutpat. Praesent ut ligula non mi varius sagitti
        </p>
        <Link className="blog__item-content-link" to="">
          Continue reading <ion-icon name="chevron-forward-outline"></ion-icon>
        </Link>
      </div>
    </div>
  );
};
