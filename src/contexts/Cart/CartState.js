import React from "react";
import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import {
  GET_ALL_PRODUCT_ITEMS,
  SET_LOADING,
  ADD_TO_CART,
  GET_CART,
  REMOVE_CART_ITEM,
  PLACE_ORDER,
} from "./types";
import AxiosInstance from "../../HttpClient/HttpClient";
const faker = require("faker");

const CartState = (props) => {
  const defaultState = { products: [], loading: false, cart: [] };
  const [state, dispatch] = useReducer(CartReducer, defaultState);

  const getAllProducts = async () => {
    try {
      dispatch({ type: SET_LOADING });

      const allProducts = await AxiosInstance.get(
        `https://api.pexels.com/v1/search?query=laptop&per_page=10&page=1`
      );

      const newProducts = allProducts.data.photos.map((p) => {
        return {
          ...p,
          name: faker.name.findName(),
          price: faker.commerce.price(),
        };
      });

      dispatch({
        type: GET_ALL_PRODUCT_ITEMS,
        payload: newProducts,
      });
    } catch (error) {
      console.log(error.response);
      alert("Error while calling api");
    }
  };

  const getCart = () => {
    dispatch({ type: GET_CART });
  };

  const addToCart = (id) => {
    if (id) {
      //Check product is already in cart?

      if (state.cart.findIndex((p) => p.id === id) !== -1) {
        return false;
      }

      dispatch({
        type: ADD_TO_CART,
        payload: id,
      });

      return true;
    }
  };

  const removeCartItem = (id) => {
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: id,
    });
    return true;
  };

  const placeOrder = () => {
    dispatch({ type: PLACE_ORDER });
    return true;
  };

  return (
    <CartContext.Provider
      value={{
        products: state.products,
        getAllProducts,
        loading: state.loading,
        addToCart,
        cart: state.cart,
        getCart,
        removeCartItem,
        placeOrder,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default CartState;
