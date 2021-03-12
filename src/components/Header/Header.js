import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({
  cartQuantity
}) => {
  return (
    <header className='header__wrapper'>
      <Link to='/'>
        <img src='https://cutt.ly/tzoGJtp' />
      </Link>
      <p>About</p>
      <Link to='/shoppingCart'>
        <p>
          <span className='cart-image'>
            <i className="fas fa-shopping-cart"></i>
          </span>
          Cart({cartQuantity})
        </p>
      </Link>
    </header>
  );
};

Header.propTypes = {
  cartQuantity: PropTypes.number
};

export default Header;

