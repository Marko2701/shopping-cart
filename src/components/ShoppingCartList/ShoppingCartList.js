import React from 'react';
import ShoppingCartProduct from '../ShoppingCartProduct/ShoppingCartProduct'
import './ShoppingCartList.css';

function ShoppingCartLIst(props) {

    return (
        <ul className='cartProducts'>
            {props.cartItems.map(product => <ShoppingCartProduct key={product.id} product={product} incrementItem={props.incrementItem} decrementItem={props.decrementItem} handleRemove={props.handleRemove} />)}
        </ul>
    )
}

export default ShoppingCartLIst;
