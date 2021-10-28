import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";
import { useContext } from "react/cjs/react.development";
import ProductApi from "../../../api/ProductApi";
import { AppContext } from "../../../app/Context/AppProvider";
import CardItem from "../../../components/CardItem/CardItem";
import Pagination from "../../../components/Pagination/Pagination";

function ListProducts(props) {
  const [products, setProducts] = useState([]);
  const [originProducts, setOriginProducts] = useState([]);
  const [pagination, setPagination] = useState({});

  const { sortPrice, sortMimax } = useContext(AppContext);

  const { type } = useParams();

  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 12,
  });

  useEffect(() => {
    const getData = async () => {
      const params = filters;
      if (!type) {
        try {
          const response = await ProductApi.getAll(params);
          setProducts(response.data);
          setOriginProducts(response.data);
          setPagination(response.pagination);
        } catch (e) {
          console.log("Error!!", e);
        }
      } else {
        try {
          const response = await ProductApi.getTypeSell(type, params);
          setProducts(response.data);
          setOriginProducts(response.data);
          setPagination(response.pagination);
        } catch (e) {
          console.log("Error!!", e);
        }
      }
    };

    getData();
  }, [filters, type]);

  useEffect(() => {
    let newProducts = [...originProducts];

    if (sortPrice === "ascending") {
      newProducts.sort(function (a, b) {
        return a.price_new - b.price_new;
      });
    } else if (sortPrice === "descending") {
      newProducts.sort(function (a, b) {
        return b.price_new - a.price_new;
      });
    }

    if (sortMimax.length) {
      console.log("sort theo mimax");
      newProducts = newProducts.filter(
        (item) =>
          item.price_new >= sortMimax[0] && item.price_new <= sortMimax[1]
      );
    }

    setProducts(newProducts);
  }, [sortPrice, sortMimax[0], sortMimax[1], pagination]);

  const handlePageChange = (newPage) => {
    setFilters({
      ...filters,
      _page: newPage,
    });
  };

  return (
    <div className="collection__product-wrap">
      <div className="row">
        {products.length ? (
          products.map((item, index) => (
            <div className="col-lg-4 col-md-4 col-6" key={index}>
              <CardItem
                item={item}
                pagination={pagination}
                products={products}
              />
            </div>
          ))
        ) : (
          <p>No products matched</p>
        )}
      </div>
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default ListProducts;
