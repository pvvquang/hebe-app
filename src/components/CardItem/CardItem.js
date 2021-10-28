import React, { useContext, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../app/Context/AppProvider";
import ConvertUnit from "../../util/ConvertUnit";
import "./CardItem.scss";

function CardItem({ item, products, pagination }) {
  const { unit, sortPrice } = useContext(AppContext);
  const [active, setActive] = useState(false);
  const [moneyUnit, setMoneyUnit] = useState(`$ ${item.price_new}`);

  useEffect(() => {
    let unitConvert = "";

    switch (unit) {
      case "VND":
        unitConvert = `${ConvertUnit(item.price_new)}đ`;
        break;
      default:
        unitConvert = `$ ${item.price_new}.00`;
    }

    setMoneyUnit(unitConvert);
  }, [unit, sortPrice, pagination, products]);

  return (
    <div className="card__item">
      <div
        className="card__item-img"
        style={{ backgroundImage: `url(${item.photoURL[0]})` }}
      >
        <div className="card__item-actions">
          <div
            className="card__item-actions-icon"
            onClick={() => setActive(!active)}
          >
            {active ? (
              <ion-icon name="heart" class="heart"></ion-icon>
            ) : (
              <ion-icon name="heart-outline" class="heart-outline"></ion-icon>
            )}
          </div>
          <div className="card__item-actions-icon">
            <ion-icon name="bag-add-outline"></ion-icon>
            <span>Add to cart</span>
          </div>
          <div className="card__item-actions-icon">
            <ion-icon name="search-outline"></ion-icon>
          </div>
        </div>
      </div>
      <Link to="" className="card__item-title">
        {item.name}
      </Link>
      <p className="card__item-price">{moneyUnit}</p>
    </div>
  );
}

export default CardItem;
