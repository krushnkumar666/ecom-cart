import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const Wishlist = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vh] xl:mx-w-[30vh] transition-all duration-300 z-200 px-4 lg:px-[35px]`}
      style={{ width: isOpen ? "auto" : "auto" }}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="uppercase text-sm font-semibold">
        Shopping Bag({itemAmount})
      </div>
      <div
        className="flex flex-col gap-y-2 border-b"
        style={{ maxHeight: "calc(100% - 260px)", overflowY: "auto" }}
      >
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div
        className="total-container flex flex-col gap-y-2 py-2 mt-1"
        style={{ maxHeight: "500px", overflowY: "auto" }}
      >
        <div className="w-full flex justify-between items-center">
          <div className="uppercase font-semibold">
            <span className="mr-2">Total :</span> ${" "}
            {parseFloat(total).toFixed(2)}
          </div>
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white w-11 h-10 flex justify-center items-center text-xl ml-2 rounded-md"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to="/"
          className="bg-gray-200 flex p-3 justify-center items-center text-primary w-full font-medium rounded-md "
        >
          View Cart
        </Link>
        <Link
          to="/"
          className="bg-gray-200 flex p-3 justify-center items-center text-primary w-full font-medium rounded-md "
        >
          Checkout
        </Link>
        <hr className="pt-20" />
      </div>
    </div>
  );
};

export default Wishlist;
