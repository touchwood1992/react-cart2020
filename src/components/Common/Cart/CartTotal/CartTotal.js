import React from "react";
const CartTotal = (props) => {
  return props.cart.length > 0 ? (
    <>
      <div className="cart-row">
        <button className="btn btn-dark mt-2 btn-block">
          Your Total :$
          {props.cart.reduce((acc, next) => {
            return acc + parseFloat(next.price);
          }, 0)}
        </button>
      </div>
      <div className="cart-row">
        <button
          className="btn btn-dark mt-2 btn-block"
          onClick={props.placeOrder}
        >
          Place Order
        </button>
      </div>
    </>
  ) : (
    ""
  );
};
export default CartTotal;
