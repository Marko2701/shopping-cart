import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import MainPage from './Pages/MainPage/MainPage';
import ShoppingCartPage from './Pages/ShoppingCartPage/ShoppingCartPage'
import data from './data';

function App() {

  const [products, setProducts] = useState(data.products);
  const [filteredProducts, setFilteredProducts] = useState(data.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const results = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    setFilteredProducts(results);
  }, [searchTerm]);

  const setValue = (value) => {
    setSearchTerm(value);
  };

  const addToCart = (product) => {
    const exist = cartItems.find(item => item.id === product.id);

    if (exist) {
      setCartItems([...cartItems])
    }
    else {
      setCartItems([...cartItems, product])
    }
  };

  const incrementItem = (id, value) => {
    let updatedCartItems = cartItems.map(item => item.id === id ? { ...item, qty: item.qty + value } : item);
    setCartItems(updatedCartItems);
  }

  const decrementItem = (id, value) => {
    let updatedCartItems = cartItems.map(item => item.id === id && item.qty > 1 ? { ...item, qty: item.qty - value } : item);
    setCartItems(updatedCartItems);
  }

  const updateQuantity = (totalItems) => {
    setTotalQuantity(totalItems);
  }

  const handleRemove = (productId) => {
    const newList = cartItems.filter(item => item.id !== productId);
    setCartItems(newList);

    if (cartItems.length === 1) {
      setTotalQuantity(0);
    }
  }

  const clearCart = () => {
    setCartItems([]);
    setTotalQuantity(0);
  }

  return (
    <div className="App">
      <Header cartQuantity={totalQuantity} />
      <Switch>

        <Route path='/shoppingCart'>
          <ShoppingCartPage cartItems={cartItems} incrementItem={incrementItem} decrementItem={decrementItem} updateQuantity={updateQuantity} handleRemove={handleRemove} clearCart={clearCart} />
        </Route>

        <Route path='/'>
          <MainPage products={filteredProducts} setValue={setValue} addToCart={addToCart} />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
