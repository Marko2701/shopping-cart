import React from 'react';
import PropTypes from 'prop-types';
import './Product.css';

function Product({
  addToCart,
  product
}) {

  return (
    <li className='product'>
      <img src={product.image} />
      <p>{product.name}</p>
      <h2>${product.price}</h2>
      <div className='product__button'>
        <button
          onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </li>
  );
}

Product.propTypes = {
  addToCart: PropTypes.func,
  product: PropTypes.object
};

export default Product;
