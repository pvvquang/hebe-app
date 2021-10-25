import React from "react";
import CardImage from "../../../components/CardImage/CardImage";
import Button from "../../../components/Button/Button";
import instagramLogo from "../../../assets/img/instagram.png";
import "./InstagramShop.scss";
import { Link, useHistory } from "react-router-dom";

const photos = [
  "https://i.pinimg.com/564x/bb/c9/c9/bbc9c9bc12494e9f973658ca179ad297.jpg",
  "https://i.pinimg.com/564x/2b/f1/64/2bf164d08742aca0a6558054ea4155a9.jpg",
  "https://i.pinimg.com/564x/ee/54/fc/ee54fc2ccc5233a671e243c19b728a97.jpg",
  "https://i.pinimg.com/564x/03/ec/56/03ec5629bcb78132566154b83312df88.jpg",
  "https://i.pinimg.com/564x/44/ae/cc/44aecc5741e497a03b07302a897841d5.jpg",
  "https://i.pinimg.com/564x/8c/88/7e/8c887edfa3182f19b141625febd74aeb.jpg",
  "https://i.pinimg.com/564x/ed/5f/16/ed5f16ee57e7ffd9497e8a3dee43de36.jpg",
  "https://i.pinimg.com/564x/ab/a5/2a/aba52a57d5c85bf1fb702c8ec5ae15cf.jpg",
  "https://i.pinimg.com/564x/63/cf/63/63cf6325d6a2dfa71f62a8c83be259ce.jpg",
  "https://i.pinimg.com/564x/15/33/f1/1533f142944b0314f2feb537071ba171.jpg",
];

function InstagramShop(props) {
  const history = useHistory();

  return (
    <div className="instagram">
      <div className="instagram__logo">
        <img src={instagramLogo} alt="Instagram Shop" />
        <Button
          onClick={() => history.push("/")}
          className="instagram__logo-text"
        >
          Instagram Shop
        </Button>
      </div>
      <div className="instagram__img">
        {photos.map((item, index) => (
          <div className="instagram__img-item" key={index}>
            <CardImage
              src={item}
              paddingTop="100%"
              className="instagram__img-item-photo"
            />
            <Link to="" className="instagram__img-item-overlay">
              <ion-icon name="logo-instagram"></ion-icon>
              <p>Shop it</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InstagramShop;
