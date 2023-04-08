import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import DisplayError from "../shared/MYError/DisplayError";
import ContactForm from "../pages/Home/contactForm/ContactForm";
import Cart from "../pages/Cart/Cart";
import Productdetails from "../pages/ProductDetails/Productdetails";

import Shop from "../pages/Shop/Shop";
import Login from "../login/Login";
import Singup from "../singup/Singup";
import About from "../pages/About/About";

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
        path: "/contact",
        element: <ContactForm />,
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
        path: "/about",
        element: <About />,
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
