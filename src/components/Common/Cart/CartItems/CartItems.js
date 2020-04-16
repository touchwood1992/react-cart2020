import React from "react";
import CartItem from "./CartItem/CartItem";

const CartItems = (props) => {
  let cartitems;
  if (props.cart.length === 0) {
    cartitems = <div className="no-items cart-row">No cart Item Found.</div>;
  } else {
    cartitems = props.cart.map((c) => (
      <CartItem
        key={c.id}
        cItem={c}
        removeItemFromCart={() => props.removeItem(c.id)}
      />
    ));
  }
  return <>{cartitems}</>;
};
export default CartItems;
