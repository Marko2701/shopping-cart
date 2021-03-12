import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCartList from '../../components/ShoppingCartList/ShoppingCartList';
import ShoppingCartCheckout from '../../components/ShoppingCartCheckout/ShoppingCartCheckout';
import './ShoppingCartPage.css';

const ShoppingCartPage = ({
  cartItems,
  setCartItems,
  setTotalQuantity
}) => {

  const incrementItem = (id) => {
    const updatedCartItems = cartItems.map(item => {
      let cartItem = item;

      if (item.id === id) {
        cartItem = {
          ...item,
          quantity: item.quantity + 1
        };
      }

      return cartItem;
    });

    setCartItems(updatedCartItems);
  };

  const decrementItem = (id) => {
    const updatedCartItems = cartItems.map(item => {
      let cartItem = item;

      if (item.id === id && item.quantity > 1) {
        cartItem = {
          ...item,
          quantity: item.quantity - 1
        };
      }

      return cartItem;
    });

    setCartItems(updatedCartItems);
  };

  const handleRemove = (productId) => {
    const newList = cartItems.filter(item => item.id !== productId);
    setCartItems(newList);

    if (cartItems.length === 1) {
      setTotalQuantity(0);
    }
  };

  const updateQuantity = (totalItems) => {
    setTotalQuantity(totalItems);
  };

  const clearCart = () => {
    setCartItems([]);
    setTotalQuantity(0);
  };

  return (
    <div className='emptyCart__wrapper'>
      {cartItems.length === 0 &&
        <div className='emptyCart'>
          Your Cart is empty!
    </div>}
      {cartItems.length > 0 && <div className='shoppingCartPage__wrapper'>
        <ShoppingCartList
          cartItems={cartItems}
          incrementItem={incrementItem}
          decrementItem={decrementItem}
          handleRemove={handleRemove}
        />
        <ShoppingCartCheckout
          cartItems={cartItems}
          updateQuantity={updateQuantity}
          clearCart={clearCart}
        />
      </div>
      }
    </div>
  );
};

ShoppingCartPage.propTypes = {
  cartItems: PropTypes.array,
  setCartItems: PropTypes.func,
  setTotalQuantity: PropTypes.func
};

export default ShoppingCartPage;
