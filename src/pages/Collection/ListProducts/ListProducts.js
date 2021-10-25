import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductApi from "../../../api/ProductApi";
import CardItem from "../../../components/CardItem/CardItem";
import Pagination from "../../../components/Pagination/Pagination";

function ListProducts(props) {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({});

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
          setPagination(response.pagination);
        } catch (e) {
          console.log("Error!!", e);
        }
      } else {
        try {
          const response = await ProductApi.getTypeSell(type, params);
          setProducts(response.data);
          setPagination(response.pagination);
        } catch (e) {
          console.log("Error!!", e);
        }
      }
    };

    getData();
  }, [filters, type]);

  const handlePageChange = (newPage) => {
    setFilters({
      ...filters,
      _page: newPage,
    });
  };

  return (
    <div className="collection__product-wrap">
      <div className="row">
        {products.map((item, index) => (
          <div className="col-lg-4 col-md-4 col-6" key={index}>
            <CardItem item={item} />
          </div>
        ))}
      </div>
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default ListProducts;
