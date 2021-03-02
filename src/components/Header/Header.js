import React from 'react';
import {Link} from 'react-router-dom';
import "./Header.css";

export default function Header(props) {
    return (
        <header>
            <Link to='/'>
            <img src='https://i2.wp.com/www.pittwatergolfcentre.com.au/wp-content/uploads/2014/11/nike-logo-square.png?fit=285%2C285&ssl=1'/>
            </Link>
            <p>About</p>
            <Link to='/shoppingCart'>
            <p><span className='cart-image'><i class="fas fa-shopping-cart"></i></span>Cart <span className='number-of-items'></span>({props.cartQuantity})</p>
            </Link>    
        </header>
    )
};

