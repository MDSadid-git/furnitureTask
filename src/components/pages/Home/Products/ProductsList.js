import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = ({ data, text }) => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-10">{text}</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5">
        {data?.map((item, i) => (
          <ProductCard item={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
