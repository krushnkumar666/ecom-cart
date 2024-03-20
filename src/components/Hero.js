import React from "react";
import WomenImg from "../img/women.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="bg-pink-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center z-100 py-24">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase w">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
          </div>
          <h1 className="text-[70px] leadng-[1.1] font-light mb-4">
            AUTUMN SALE STYLISH
            <br />
            <span className="font-semibold">WOMENS & MENS</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-black"
          >
            Discover More
          </Link>
        </div>
        <div className="hidden lg:block">
          <img src={WomenImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
