import React, { useContext } from "react";
import CartItems from "./CartItems/CartItems";
import CartContext from "../../../contexts/Cart/CartContext";
import CartTotal from "./CartTotal/CartTotal";

import { toast } from "react-toastify";

const Cart = () => {
  const cartContext = useContext(CartContext);

  const removeItem = (id) => {
    const removed = cartContext.removeCartItem(id);
    if (removed) {
      toast.success("Removed from Cart !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const placeOrder = () => {
    const placed = cartContext.placeOrder();
    if (placed) {
      toast.success("Order Placed !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div className="cart-container">
      <h5 className="text-center mt-2 mb-2 text-uppercase">Your cart</h5>
      <CartItems cart={cartContext.cart} removeItem={removeItem} />
      <CartTotal cart={cartContext.cart} placeOrder={placeOrder} />
    </div>
  );
};
export default Cart;
