import React from "react";

const ProductItem = (props) => {
  const { product } = props;

  return (
    <div className="col-md-4 mb-2 d-flex">
      <div className="card">
        <img
          className="card-img-top d-block"
          src={product.src.medium}
          alt="Product"
        />
        <div className="card-body">
          <h4 className="card-title">{product.name}</h4>
          <p className="card-text">$ {product.price}</p>
          <button
            className="btn btn-info stretched-link"
            onClick={() => props.addToCart(product.id)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
