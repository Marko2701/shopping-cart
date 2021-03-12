import React from 'react';
import PropTypes from 'prop-types';
import './ShoppingCartProduct.css';

function ShoppingCartProduct({
  product,
  incrementItem,
  decrementItem,
  handleRemove
}) {

  return (

    <li className='shoppingCartProduct__wrapper'>
      <img src={product.image} />

      <div className='nameNprice__wrapper'>
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
      </div>

      <p className='quantity'>Qty: {product.quantity}</p>

      <div className='cartButtons'>
        <button
          onClick={() => incrementItem(product.id)}
        >
          <i className="fas fa-plus-circle"></i>
        </button>

        <button onClick={() => decrementItem(product.id)}
        >
          <i className="fas fa-minus-circle"></i>
        </button>

        <button className='delete'
          onClick={() => handleRemove(product.id)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </li>

  );
}

ShoppingCartProduct.propTypes = {
  product: PropTypes.object,
  incrementItem: PropTypes.func,
  decrementItem: PropTypes.func,
  handleRemove: PropTypes.func
};

export default ShoppingCartProduct;
