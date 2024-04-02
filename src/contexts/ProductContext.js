import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data.map(product => ({
          ...product,
          category: getCategory(product.title)
        })));
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]); 
      }
    };
    fetchProducts();
  }, []);

  const getCategory = (title) => {
    if (title.toLowerCase().includes("women")) {
      return "women";
    } else if (title.toLowerCase().includes("men")) {
      return "men";
    } else if (title.toLowerCase().includes("kid")) {
      return "kids";
    } else {
      return "other";
    }
  };

  return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
