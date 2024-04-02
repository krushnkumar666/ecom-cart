import React, { useContext, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaHeart } from "react-icons/fa";
import Logo from "../img/logo2.png";

const Header = ({ products }) => { 
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [search, setSearch] = useState("");


  // const filteredProducts = products.filter((product) =>
  //   product.name.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    <header className={`bg-white fixed w-full z-50 transition-all shadow-md pb-2 pt-1 border-t`}>
      <div className="container mx-auto flex items-center  h-12">
        <Link to="/">
          <div className="pt-5 pb-5">
            <img className="w-[100px]" src={Logo} alt="" />
          </div>
        </Link>
        <div className="flex items-center ml-5">
          <Link to="/men">
            <h6 className="text-sm">MEN</h6>
          </Link>
          <Link to="/women">
            {" "}
            <h6 className="ml-5 text-sm">WOMEN</h6>
          </Link>
          <Link to="/kid">
            <h6 className="ml-5 text-sm">KIDS</h6>
          </Link>
          <h6 className="ml-5 text-sm">HOME & LIVING</h6>
          <h6 className="ml-5 text-sm">BEAUTY</h6>
          <h6 className="ml-5 text-sm">
            STUDIO<sup className="text-red-500">NEW</sup>
          </h6>
          <div className="relative flex items-center justify-center ml-10">
            <FaSearch className="absolute top-1.8 left-3 flex justify-center items-center text-gray-400" />
            <input
              type="text"
              className="pl-10 pt-1 pb-1 bg-gray-200 text-sm placeholder-gray-500 rounded-md"
              placeholder="Search products"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex items-center justify-between absolute right-2 mr-4"
        >
          <div className="ml-5 relative flex items-center">
            <Link to="/profile">
              <div className="ml-3">
                <FaUser className="text-3xl  text-black border border-none p-1 cursor-pointer" />
                <div className="text-xs">Profile</div>
              </div>
            </Link>
            <div className="ml-3">
              <FaHeart className="text-3xl  text-black border border-none p-1 cursor-pointer" />
              <div className="text-xs">Wishlist</div>
            </div>
          </div>
          <div className="flex flex-col items-center relative ml-4">
            <BsBag className="text-2xl" />
            <div className="text-xs mt-1">Bag</div>
            <div className="bg-red-500 absolute -right-2 -bottom-[-3] text-[12px] w-[19px] h-[19px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </header>
  );
};

export default Header;
