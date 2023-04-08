import React from "react";
import herImg from "../../../../Assets/images/hero-img.png";
import { Link } from "react-router-dom";

const Shop = () => {
  const year = new Date().getFullYear();
  console.log(year);
  return (
    <div className="mt-10">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={herImg} className=" rounded-lg  mr-5" alt="HeroImg" />
          <div>
            <h1 className="text-5xl font-bold">Box Offers {year}</h1>
            <p className="py-6">
              Explore our furniture & home furnishing range. Regal Furniture is
              a bangladeshi leader in life at home. Whether you just moved into
              a new home or looking to (char, Side Table, Dressing Table,
              Almira)
            </p>
            <button className=" btn btn-outline btn-primary ml-5">
              <Link to={"/shop"}>Shop now</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
