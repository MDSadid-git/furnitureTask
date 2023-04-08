import React, { useEffect, useState } from "react";
import useTitle from "../../Hooks/useTitle";
import Banner from "./Banner/Banner";
import Shop from "./Shop/Shop";
import Services from "./Services/Services";
import ProductsList from "./Products/ProductsList";
import myAllProductDataList from "./AllProdutsList/AllProductsList";
import CountDown from "./CountDown/CountDown";

const Home = () => {
  useTitle("Home");
  const [trending, setTrending] = useState(myAllProductDataList);
  const [bestSales, setBestSales] = useState(myAllProductDataList);

  useEffect(() => {
    const filterProducts = myAllProductDataList.filter(
      (item) => item.category === "chair"
    );
    const filterBestSales = myAllProductDataList.filter(
      (item) => item.category === "sofa"
    );
    setTrending(filterProducts);
    setBestSales(filterBestSales);
  }, []);

  return (
    <div>
      <Banner />
      <Services />
      <ProductsList data={trending} text="Trending Products" />
      <ProductsList data={bestSales} text="Best sales Products" />
      <Shop />
      <CountDown />
    </div>
  );
};

export default Home;
