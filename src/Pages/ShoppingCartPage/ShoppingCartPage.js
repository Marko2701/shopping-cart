import React from 'react';
import ShoppingCartList from '../../components/ShoppingCartList/ShoppingCartList';
import ShoppingCartCheckout from '../../components/ShoppingCartCheckout/ShoppingCartCheckout';
import './ShoppingCartPage.css';

function ShoppingCartPage(props) {

    return (
        <div id='shoppingCartPage'>
            {props.cartItems.length === 0 &&
                <div id='emptyCart'>
                    Your Cart is empty!
            </div>}
            {props.cartItems.length > 0 && <div id='cart'>
                <ShoppingCartList cartItems={props.cartItems} incrementItem={props.incrementItem} decrementItem={props.decrementItem} handleRemove={props.handleRemove} />
                <ShoppingCartCheckout cartItems={props.cartItems} updateQuantity={props.updateQuantity} clearCart={props.clearCart} />
            </div>
            }

        </div>

    )
}

export default ShoppingCartPage;
