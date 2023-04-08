import React from "react";
import img1 from "../../../../Assets/images/arm-chair-01.jpg";
import img2 from "../../../../Assets/images/arm-chair-02.jpg";
import img3 from "../../../../Assets/images/arm-chair-03.jpg";
import img4 from "../../../../Assets/images/single-sofa-01.jpg";
import img5 from "../../../../Assets/images/single-sofa-02.jpg";
import img6 from "../../../../Assets/images/single-sofa-03.jpg";
import BannerItem from "../BannerItem/BannerItem";

const bannerData = [
  {
    image: img1,
    prev: 6,
    id: 1,
    next: 2,
  },
  {
    image: img2,
    prev: 1,
    id: 2,
    next: 3,
  },
  {
    image: img3,
    prev: 2,
    id: 3,
    next: 4,
  },
  {
    image: img4,
    prev: 3,
    id: 4,
    next: 5,
  },
  {
    image: img5,
    prev: 4,
    id: 5,
    next: 6,
  },
  {
    image: img6,
    prev: 5,
    id: 6,
    next: 1,
  },
];
const Banner = () => {
  return (
    <div className="carousel w-full pb-5 my-10">
      {bannerData.map((slide) => (
        <BannerItem slide={slide} key={slide.id}></BannerItem>
      ))}
    </div>
  );
};

export default Banner;
