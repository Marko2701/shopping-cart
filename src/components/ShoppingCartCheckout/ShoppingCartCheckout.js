import React from 'react';
import PropTypes from 'prop-types';
import './ShoppingCartCheckout.css';

function ShoppingCartCheckout({
  cartItems,
  clearCart
}) {

  const totalQuantity = () => {
    let sum = 0;
    const quantities = cartItems.map(item => item.quantity);
    quantities.forEach(item => sum += item);

    return sum;
  };

  const totalPayment = () => {
    let sum = 0;
    const prices = cartItems.map(item => item.price * item.quantity);
    prices.forEach(price => sum += price);

    return sum;
  };

  return (
    <div className='shoppingCartCheckout__wrapper'>
      <p>Total Items</p>
      <h3>{totalQuantity()}</h3>
      <p>Total Payment</p>
      <h3>${totalPayment()}</h3>
      <div className='checkoutBtns'>
        <button className='checkoutBtn'>CHECKOUT</button>
        <button className='clearBtn'
          onClick={() => clearCart()}>CLEAR</button>
      </div>
    </div>
  );
}

ShoppingCartCheckout.propTypes = {
  cartItems: PropTypes.array,
  clearCart: PropTypes.func
};

export default ShoppingCartCheckout;
