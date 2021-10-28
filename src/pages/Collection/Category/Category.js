import { Slider } from "antd";
import React, { useContext, useMemo, useState } from "react";
import { AppContext } from "../../../app/Context/AppProvider";
import { Link, useHistory } from "react-router-dom";
import "./Category.scss";
import CardImage from "../../../components/CardImage/CardImage";

const categories = [
  {
    name: "Hebe Staff",
    url: "/collection",
  },
  {
    name: "Pick",
    url: "/collection",
  },
  {
    name: "New",
    url: "/collection/new-arrivals",
  },
  {
    name: "Women",
    url: "/collection/women",
  },
  {
    name: "Men",
    url: "/collection/men",
  },
  {
    name: "Girls",
    url: "/collection",
  },
  {
    name: "Boys",
    url: "/collection",
  },
  {
    name: "Plus",
    url: "/collection",
  },
  {
    name: "Size",
    url: "/collection",
  },
  {
    name: "Edits",
    url: "/collection",
  },
];

const colors = [
  {
    name: "Orange",
    hex: "#dc8e6a",
  },
  {
    name: "RosyBrown",
    hex: "#9f755e",
  },
  {
    name: "Green",
    hex: "#b1c350",
  },
  {
    name: "DarkSlateBlue",
    hex: "#333d4f",
  },
  {
    name: "Violet",
    hex: "#8b7095",
  },
  {
    name: "White",
    hex: "#ededed",
  },
  {
    name: "Black",
    hex: "#2a2a2a",
  },
  {
    name: "Pink",
    hex: "#ec60e1",
  },
];

const sizes = [
  {
    name: "Size S",
    type: "S",
  },
  {
    name: "Size M",
    type: "M",
  },
  {
    name: "Size L",
    type: "L",
  },
  {
    name: "Size XL",
    type: "XL",
  },
  {
    name: "Size XXL",
    type: "XXL",
  },
];

const prices = [
  {
    name: "None",
    type: "none",
  },
  {
    name: "Popularity",
    type: "best-seller",
  },
  {
    name: "Average rating",
    type: "top-rate",
  },
  {
    name: "Newness",
    type: "new-arrivals",
  },
  {
    name: "Price: low to hight",
    type: "descending",
  },
  {
    name: "Price: hight to low",
    type: "ascending",
  },
];

function Category(props) {
  const [active, setActive] = useState(null);
  const history = useHistory();

  return (
    <div className="category">
      <div className="category__nav">
        <h3 className="category__nav-title">
          <ion-icon name="list-outline"></ion-icon>
          Categories
        </h3>
        <ul className="category__nav-list">
          {categories.map((item, index) => (
            <li
              className={`category__nav-item ${
                index === active ? "active" : ""
              }`}
              key={index}
              onClick={() => {
                setActive(index);
                history.push(item.url);
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <CategoryColor />
      <CategoryPrice />
      <CategorySizes />
      <CategoryPriceFilter />
      <CategoryImage />
    </div>
  );
}

function CategoryColor() {
  const { filters, setFilters } = useContext(AppContext);

  const active = useMemo(() => {
    return filters.color;
  }, [filters]);

  return (
    <div className="category__color ">
      <h3 className="category__title">Color</h3>
      <div className="category__wrap">
        <div className="category__color-list">
          {colors.map((item, index) => (
            <button
              key={index}
              style={{ backgroundColor: item.hex }}
              className={`category__color-item ${
                active === item.name ? "active" : ""
              }`}
              onClick={() => {
                setFilters((prev) => ({ ...prev, color: item.name }));
              }}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

function CategoryPrice() {
  const [value, setValue] = useState([10, 1000]);
  const { setSortMimax } = useContext(AppContext);

  function handleChange(value) {
    setValue(value);
  }

  function handleAfterChange(value) {
    setSortMimax(value);
  }

  return (
    <div className="category__price">
      <h3 className="category__title">Price</h3>
      <div className="category__wrap">
        <Slider
          range
          step={1}
          defaultValue={[10, 1000]}
          min={10}
          max={1000}
          onChange={handleChange}
          onAfterChange={handleAfterChange}
        />
        <p className="category__price-desc">{`Price: $${value[0]} — $${value[1]}`}</p>
      </div>
    </div>
  );
}

function CategorySizes() {
  const { filters, setFilters } = useContext(AppContext);

  const active = useMemo(() => {
    return filters.size;
  }, [filters]);

  return (
    <div className="category__size ">
      <h3 className="category__title">Size</h3>
      <div className="category__wrap">
        <div className="category__size-list">
          {sizes.map((item, index) => (
            <span
              key={index}
              className={`category__size-item ${
                active === item.name ? "active" : ""
              }`}
              onClick={() =>
                setFilters((prev) => ({ ...prev, size: item.name }))
              }
            >
              {item.type}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function CategoryPriceFilter() {
  const { filters, setFilters } = useContext(AppContext);

  const active = useMemo(() => {
    return filters.priceFilter;
  }, [filters]);

  return (
    <div className="category__filter-price">
      <h3 className="category__title">Price</h3>
      <div className="category__wrap">
        <ul className="category__filter-price-list">
          {prices.map((item, index) => (
            <li
              key={index}
              className={`category__filter-price-item ${
                active === item.name ? "active" : ""
              }`}
              onClick={() => {
                setFilters((prev) => ({ ...prev, priceFilter: item.name }));
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CategoryImage() {
  return (
    <div className="category__img">
      <CardImage
        src="https://images.pexels.com/photos/902030/pexels-photo-902030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        paddingTop="140%"
      />
      <div className="category__img-content">
        <h5>Spring</h5>
        <h6>Collection</h6>
        <button className="btn category__img-btn">Shop now</button>
      </div>
    </div>
  );
}

export default Category;
