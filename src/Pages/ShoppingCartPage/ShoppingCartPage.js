import React, { useState } from 'react';
import ShoppingCartList from '../../components/ShoppingCartList/ShoppingCartList';
import ShoppingCartCheckout from '../../components/ShoppingCartCheckout/ShoppingCartCheckout';
import './ShoppingCartPage.css';

const ShoppingCartPage = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const exist = cartItems.find(item => item.id === product.id);

    if (exist) {
      setCartItems([...cartItems])
    }
    else {
      setCartItems([...cartItems, product])
    }
  };

  return (
    <div id='shoppingCartPage'>
      {props.cartItems.length === 0 &&
        <div id='emptyCart'>
          Your Cart is empty!
    </div>}
      {props.cartItems.length > 0 && <div id='cart'>
        <ShoppingCartList
          cartItems={props.cartItems}
          incrementItem={props.incrementItem}
          decrementItem={props.decrementItem}
          handleRemove={props.handleRemove}
        />
        <ShoppingCartCheckout
          cartItems={props.cartItems}
          updateQuantity={props.updateQuantity}
          clearCart={props.clearCart}
        />
      </div>
      }
    </div>
  );
};

export default ShoppingCartPage;
