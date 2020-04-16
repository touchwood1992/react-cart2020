import React, { useContext } from "react";

import CartContext from "../../../../contexts/Cart/CartContext";
import { toast } from "react-toastify";

import ProductItem from "./ProductItem/ProductItem";

const Products = (props) => {
  const cartContext = useContext(CartContext);
  const addingToCart = (id) => {
    const added = cartContext.addToCart(id);
    if (!added) {
      //set Toast
      toast.error("Already In cart !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    } else if (added) {
      //set Toast
      toast.success("Added to cart !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  return (
    <>
      {props.allProducts.map((p) => (
        <ProductItem
          key={p.id}
          product={p}
          addToCart={() => addingToCart(p.id)}
        />
      ))}
    </>
  );
};

export default Products;
