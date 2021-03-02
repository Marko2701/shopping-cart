import React from 'react';
import './ShoppingCartCheckout.css'

function ShoppingCartCheckout(props) {

    const totalQuantity = () => {
        let sum = 0;
        let quantities = props.cartItems.map(e => e.qty);
        quantities.forEach(quantity => sum += quantity);

        return sum;
    };

    const totalPayment = () => {
        let sum = 0;
        let prices = props.cartItems.map(e => e.price * e.qty);
        prices.forEach(price => sum += price);

        return sum;
    };

    props.updateQuantity(totalQuantity());

    return (
        <div className='checkout'>
            <p>Total Items</p>
            <h3>{totalQuantity()}</h3>
            <p>Total Payment</p>
            <h3>${totalPayment()}</h3>
            <div className='checkoutBtns'>
                <button className='checkoutBtn'>CHECKOUT</button>
                <button className='clearBtn' onClick={() => props.clearCart()}>CLEAR</button>
            </div>
        </div>
    )
}

export default ShoppingCartCheckout;
