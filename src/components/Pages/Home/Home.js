import React, { useContext, useEffect } from "react";
import Products from "./Products/Products";
import Cart from "../../Common/Cart/Cart";
import CartContext from "../../../contexts/Cart/CartContext";
import Loader from "../../Common/Loader/Loader";
const Home = () => {
  const cartContext = useContext(CartContext);
  useEffect(() => {
    cartContext.getAllProducts();
  }, []);

  return (
    <div className="container mt-2 mb-2">
      <div className="row">
        <div className="col-md-9">
          <div className="row">
            {cartContext.loading === true ? (
              <Loader />
            ) : (
              <Products allProducts={cartContext.products}></Products>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <Cart />
        </div>
      </div>
    </div>
  );
};
export default Home;
