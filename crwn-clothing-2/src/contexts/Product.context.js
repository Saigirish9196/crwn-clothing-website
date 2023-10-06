import { createContext, useState } from "react";
import Products from '../shop-data'



export const ProductsContext = createContext({
  products:[],
});


export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(Products);
  const value = { products, setProducts };
  
  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};