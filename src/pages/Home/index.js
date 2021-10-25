import React, { useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Blog from "./Blog/Blog";
import FormSignIn from "./FormSignIn/FormSignIn";
import InstagramShop from "./InstagramShop/InstagramShop";
import NavListProduct from "./NavListProduct/NavListProduct";
import ProductCard from "./ProductCard/ProductCard";

function Home(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <Carousel />
      <ProductCard />
      <NavListProduct />
      <Banner />
      <Blog />
      <FormSignIn />
      <InstagramShop />
      <Footer />
    </div>
  );
}

export default Home;
