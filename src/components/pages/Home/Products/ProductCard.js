import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../Redux/Slices/cartSlice";
import { toast } from "react-toastify";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        image: item.imgUrl,
      })
    );
    toast.success("Product Added success");
  };
  return (
    <div>
      <div className="card bg-base-100 shadow-xl my-10">
        <figure>
          <img
            src={item?.imgUrl}
            alt="Shoes"
            className="hover:scale-125 duration-300 ease-in-out"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title ">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h2>

          <p className="text-sm text-slate-500">{item.category}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline font-bold">${item.price}</div>
            <span
              onClick={addToCart}
              className="bg-black p-[2px] text-white rounded-full hover:scale-125 duration-300 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
