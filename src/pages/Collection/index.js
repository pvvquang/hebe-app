import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banners from "./Banners/Banners";
import Category from "./Category/Category";
import CollectionFilter from "./CollectionFilter/CollectionFilter";
import ListProducts from "./ListProducts/ListProducts";

function Collection(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <Banners />
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <Category />
          </div>
          <div className="col-lg-9">
            <CollectionFilter />
            <ListProducts />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Collection;
