import React from "react";
import useTitle from "../../Hooks/useTitle";
import Banner from "./Banner/Banner";
import Shop from "./Shop/Shop";
import Services from "./Services/Services";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      {/* <Banner /> */}
      <Services />
      {/* <Shop /> */}
    </div>
  );
};

export default Home;
