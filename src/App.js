import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import ShoppingCartPage from './pages/ShoppingCartPage/ShoppingCartPage';

import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    console.log(cartItems);
    // Svaki put kada se ovo promeni, treba da se prodje kroz listu i saberu svi qty
  }, [cartItems]);

  const incrementItem = (id, value) => {
    const updatedCartItems = cartItems.map(item => {
      let cartItem = item;

      if (item.id === id) {
        cartItem = {
          ...item,
          qty: item.qty + value
        };
      }

      return cartItem;
    });

    setCartItems(updatedCartItems);
  };

  const decrementItem = (id, value) => {
    const updatedCartItems = cartItems.map(item => item.id === id && item.qty > 1 ? { ...item, qty: item.qty - value } : item);
    setCartItems(updatedCartItems);
  };

  const updateQuantity = (totalItems) => {
    setTotalQuantity(totalItems);
  };

  const handleRemove = (productId) => {
    const newList = cartItems.filter(item => item.id !== productId);
    setCartItems(newList);

    if (cartItems.length === 1) {
      setTotalQuantity(0);
    }
  };

  const clearCart = () => {
    setCartItems([]);
    setTotalQuantity(0);
  };

  return (
    <div className='App'>
      <Header cartQuantity={totalQuantity} />
      <Switch>

        <Route path='/shoppingCart'>
          <ShoppingCartPage
            cartItems={cartItems}
            incrementItem={incrementItem}
            decrementItem={decrementItem}
            updateQuantity={updateQuantity}
            handleRemove={handleRemove}
            clearCart={clearCart} />
        </Route>

        <Route path='/'>
          <MainPage
            setCartItems={setCartItems}
            cartItems={cartItems}
          />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
