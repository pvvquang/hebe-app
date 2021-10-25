import React, { useEffect, useState } from "react";
import CardImage from "../../../components/CardImage/CardImage";
import ProductApi from "../../../api/ProductApi";
import "./ProductCard.scss";
import { Link } from "react-router-dom";

function ProductCard(props) {
  const [men, setMen] = useState([]);
  const [bags, setBags] = useState([]);
  const [women, setWomen] = useState([]);
  const [shoes, setShoes] = useState([]);
  const { getTypeSell } = ProductApi;

  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await getTypeSell("men");
        setMen(response.data);
      } catch (e) {
        console.log("Error!!", e);
      }

      try {
        const response = await getTypeSell("bags");
        setBags(response.data);
      } catch (e) {
        console.log("Error!!", e);
      }

      try {
        const response = await getTypeSell("women");
        setWomen(response.data);
      } catch (e) {
        console.log("Error!!", e);
      }

      try {
        const response = await getTypeSell("shoes");
        setShoes(response.data);
      } catch (e) {
        console.log("Error!!", e);
      }
    };

    getApi();
  }, []);

  return (
    <div className="container">
      <div className="row product__row">
        <div className="col-lg-6 col-md-12 col-12">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-6 product__col">
                  <CardImage item={men[0]} paddingTop="100%" />
                  <div className="product__overlay">
                    <p className="product__overlay-title">New Arrivals</p>
                    <Link to="" className="product__overlay-link">
                      Shop now{" "}
                      <ion-icon name="chevron-forward-outline"></ion-icon>
                    </Link>
                  </div>
                </div>
                <div className="col-6 product__col">
                  <CardImage item={bags[0]} paddingTop="100%" />
                  <div className="product__overlay">
                    <p className="product__overlay-title">New Arrivals</p>
                    <Link to="" className="product__overlay-link">
                      Shop now{" "}
                      <ion-icon name="chevron-forward-outline"></ion-icon>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 product__col ">
              <CardImage item={shoes[1]} paddingTop="50%" />
              <div className="product__overlay overlay-3">
                <p className="product__overlay-title">New Arrivals</p>
                <Link to="" className="product__overlay-link">
                  Shop now <ion-icon name="chevron-forward-outline"></ion-icon>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 product__col">
          <CardImage item={women[2]} paddingTop="100%" />
          <div className="product__overlay overlay-4">
            <p className="product__overlay-title">New Arrivals</p>
            <Link to="" className="product__overlay-link">
              Shop now <ion-icon name="chevron-forward-outline"></ion-icon>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
