import React, { useContext, useEffect, useState } from "react";
import { Select } from "antd";
import "./CollectionFilter.scss";
import { AppContext } from "../../../app/Context/AppProvider";

const { Option } = Select;

const sortFilters = [
  {
    name: "Price: low to hight",
    type: "ascending",
  },
  {
    name: "Price: hight to low",
    type: "descending",
  },
];

function CollectionFilter() {
  const { filters, setFilters, setSortPrice } = useContext(AppContext);
  const [listFilter, setListFilter] = useState([]);

  useEffect(() => {
    setListFilter(Object.values(filters));
  }, [filters]);

  const handleChange = (value) => {
    setSortPrice(value);
  };

  const handleClick = (item, index) => {
    const listFilterItem = [...listFilter];
    listFilterItem.splice(index, 1);

    for (const key in filters) {
      if (Object.hasOwnProperty.call(filters, key)) {
        let element = filters[key];
        filters[key] = element === item ? "" : element;
      }
    }

    setFilters({ ...filters });
    setListFilter(listFilterItem);
  };

  return (
    <div className="filter-bar row">
      <div className="col-lg-9">
        <div className="filter-bar__list">
          <div className="filter-bar__title">
            <ion-icon name="funnel-outline"></ion-icon>
            <span className="filter-bar__title-text">Filter</span>
          </div>
          {listFilter.map((item, index) =>
            item === "" ? (
              ""
            ) : (
              <span className="filter-bar__item" key={index}>
                <ion-icon
                  name="close-outline"
                  onClick={() => handleClick(item, index)}
                ></ion-icon>
                {item}
              </span>
            )
          )}
        </div>
      </div>
      <div className="col-lg-3">
        <div className="filter-bar__select">
          <Select
            defaultValue="Sort"
            style={{ width: "85%" }}
            onChange={handleChange}
          >
            {sortFilters.map((filter) => (
              <Option value={filter.type} key={filter.name}>
                {filter.name}
              </Option>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
}

export default CollectionFilter;
