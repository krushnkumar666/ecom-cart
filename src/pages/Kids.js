import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";

const Kids = () => {
    const { products } = useContext(ProductContext);

    const filteredProducts = products ? products.filter((product) => {
      
      return product.category && product.category.toLowerCase().includes("child");
    }) : [];

  return (
    <div>
      <Hero/>
      
      <section className="py-16">
      <h1 className="flex justify-center text-4xl mb-10 font-bold">Products Not Available</h1>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] mx-w-sm mx-auto md:mx-w-none md:mx-0 pl-10 pr-10">
            {filteredProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kids;
