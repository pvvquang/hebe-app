import React, { useEffect, useState } from "react";
import ProductApi from "../../../api/ProductApi";
import CardItem from "../../../components/CardItem/CardItem";
import "./NavListProduct.scss";

const navList = [
  { name: "New Arrivals", type: "new-arrivals" },
  { name: "Best Seller", type: "best-seller" },
  { name: "Top Rate", type: "top-rate" },
];

function NavListProduct(props) {
  const [products, setProducts] = useState([]);
  const [typeApi, setTypeApi] = useState("new-arrivals");

  useEffect(() => {
    const getData = async () => {
      const params = { _page: 1, _limit: 8 };
      try {
        const response = await ProductApi.getTypeSell(typeApi, params);
        setProducts(response.data);
      } catch (e) {
        console.log("Error!!", e);
      }
    };

    getData();
  }, [typeApi]);

  return (
    <div className="container">
      <div className="nav__product-list">
        {navList.map((item, index) => (
          <button
            className={`nav__product-item ${
              typeApi === item.type ? "active" : ""
            }`}
            key={index}
            onClick={() => setTypeApi(item.type)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="row">
        {products.map((item, index) => (
          <div className="col-lg-3 col-md-4 col-6" key={index}>
            <CardItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavListProduct;
