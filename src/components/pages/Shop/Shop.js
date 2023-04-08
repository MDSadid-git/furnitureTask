import React, { useState } from "react";
import useTitle from "../../Hooks/useTitle";
import products from "../Home/AllProdutsList/AllProductsList";
import ProductsList from "../Home/Products/ProductsList";

const Shop = () => {
  useTitle("Shop");
  const [pordutsData, setProdutsData] = useState(products);
  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "sofa") {
      const filterProducts = products.filter(
        (item) => item.category === "sofa"
      );
      setProdutsData(filterProducts);
    }
    if (filterValue === "Dsofa") {
      const filterProducts = products.filter(
        (item) => item.category === "Dsofa"
      );
      setProdutsData(filterProducts);
    }
    if (filterValue === "chair") {
      const filterProducts = products.filter(
        (item) => item.category === "chair"
      );
      setProdutsData(filterProducts);
    }
  };
  const handleFilterShort = (e) => {
    const filterValue = e.target.value;
    console.log(filterValue);
    if (filterValue === 4.5) {
      const filterProducts = products.filter((item) => item.avgRating === 4.5);
      setProdutsData(filterProducts);
    }
    if (filterValue === 4.7) {
      const filterProducts = products.filter((item) => item.avgRating === 4.7);
      setProdutsData(filterProducts);
    }
    if (filterValue === 4.9) {
      const filterProducts = products.filter((item) => item.avgRating === 4.9);
      setProdutsData(filterProducts);
    }
  };
  console.log(handleFilterShort);
  return (
    <div>
      <div className="text-center my-32">
        <h1 className="my-20 text-4xl font-bold">Ours Product</h1>
        <div className="flex justify-around">
          <div>
            <select
              className="select select-info w-full max-w-xs"
              onChange={handleFilter}
            >
              <option disabled selected>
                Filter By Category
              </option>
              <option value={"sofa"}>Sofa</option>
              <option value={"Dsofa"}>Dabul Sofa</option>
              <option value={"chair"}>chair</option>
            </select>
          </div>

          <div>
            <select
              onChange={handleFilterShort}
              className="select select-info w-full max-w-xs"
            >
              <option disabled selected>
                Sort By
              </option>
              <option value={4.5}>4.5</option>
              <option value={4.7}>4.7</option>
              <option value={4.9}>4.9</option>
            </select>
          </div>
        </div>
        <div>
          {products.length === 0 ? (
            <h1>No Products are Found</h1>
          ) : (
            <ProductsList data={pordutsData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
