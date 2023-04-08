import React from "react";
import useTitle from "../../Hooks/useTitle";

const About = () => {
  useTitle("About");
  return (
    <div className="flex justify-center items-center my-52">
      <div>
        <h1 className="text-4xl text-center my-10">About Us</h1>
        <p className="text-center mb-10">
          Explore our furniture & home furnishing range. Regal Furniture is a{" "}
          <br />
          bangladeshi leader in life at home. Whether you just moved into a new{" "}
          <br />
          home.Experience the beauty and craftsmanship of Hatil furniture - The{" "}
          <br />
          best and largest furniture brand in Bangladesh.
        </p>
      </div>
    </div>
  );
};

export default About;
