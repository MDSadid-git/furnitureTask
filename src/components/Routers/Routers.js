import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import DisplayError from "../shared/MYError/DisplayError";
import Furniture from "../pages/Furniture/Furniture";
import Cart from "../pages/Cart/Cart";
import Productdetails from "../pages/ProductDetails/Productdetails";
import Checkout from "../pages/Checkout/Checkout";
import Shop from "../pages/Shop/Shop";
import Login from "../login/Login";
import Singup from "../singup/Singup";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <DisplayError />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/furntiture",
        element: <Furniture />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/:id",
        element: <Productdetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/singup",
        element: <Singup />,
      },
    ],
  },
]);

export default Router;
