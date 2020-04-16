import React from "react";

const CartItem = (props) => {
  return (
    <div className="cart-row">
      <div className="cart-left">
        <img
          className="img-fluid"
          src={props.cItem.src.medium}
          alt="Cart Item"
        />
        <span>{props.cItem.name}</span>
      </div>
      <div className="cart-right mt-2">
        <span>${props.cItem.price}</span>
        <button
          className="btn btn-danger ml-5"
          onClick={props.removeItemFromCart}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
