import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading ...
      </section>
    );
  }

  console.log(product);

  const { title, price, description, image } = product;
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-12 lg:py-32 flex-auto">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
              <img className="max-w-[150px] lg:max-w-sm" src={image} alt="" />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
                {title}
              </h1>
              <div className="text-xl text-red-500 font-medium mb-6">
                $ {price}
              </div>
              <p className="mb-8">{description}</p>
              <button
                onClick={() => addToCart(product, product.id)}
                className="bg-black py-4 px-8 text-white rounded-md"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <footer className="bg-gray-200 text-center py-4">Footer content</footer> */}
    </div>
  );
};

export default ProductDetails;
