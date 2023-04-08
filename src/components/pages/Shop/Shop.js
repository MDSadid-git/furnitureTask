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
      setProdutsData(null);
    }
  };
  console.log(handleFilter);
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
              <option>Filter By Category</option>
              <option value={"sofa"}>Sofa</option>
              <option value={"Dsofa"}>Dabul Sofa</option>
              <option value={"Csofa"}>chair</option>
            </select>
          </div>

          <div>
            <select className="select select-info w-full max-w-xs">
              <option disabled selected>
                Sort By
              </option>
              <option>English</option>
              <option>Japanese</option>
              <option>Italian</option>
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
