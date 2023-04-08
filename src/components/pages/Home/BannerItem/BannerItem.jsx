import React from "react";
import "./BannerItem.css";
import { Link } from "react-router-dom";
const BannerItem = ({ slide: { image, id, prev, next } }) => {
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full ">
      <div className="img-gradient">
        <img src={image} alt="" className="w-full rounded-xl  " />
      </div>
      <div className="absolute flex transform -translate-y-1/2  top-1/4 left-24 text-white">
        <h1 className="text-6xl">
          Affordable <br />
          price for <br />
          Shop
        </h1>
      </div>
      <div className="absolute flex transform -translate-y-1/2  w-2/5 top-2/4 left-24 text-white">
        <p className="text-xl">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
      </div>
      <div className="absolute flex transform -translate-y-1/2  w-2/5 top-3/4 left-24 text-white">
        <button className="btn btn-primary  ml-5">
          <Link to={"/shop"}>Shop Now</Link>
        </button>
      </div>
      <div className="absolute flex top-10 transform -translate-y-1/2  right-5 ">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle ml-5">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
