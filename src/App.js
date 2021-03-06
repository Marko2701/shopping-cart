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
    let sum = 0;
    const quantities = cartItems.map(item => item.quantity);
    quantities.forEach(item => sum += item);

    setTotalQuantity(sum);
  }, [cartItems]);

  return (
    <div className='App__wrapper'>
      <Header cartQuantity={totalQuantity} />
      <Switch>

        <Route path='/shoppingCart'>
          <ShoppingCartPage
            setCartItems={setCartItems}
            cartItems={cartItems}
            setTotalQuantity={setTotalQuantity}
          />
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
};

export default App;
