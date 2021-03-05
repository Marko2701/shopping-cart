import React from 'react';
import './ShoppingCartProduct.css';

function ShoppingCartProduct(props) {
    console.log(props)
    return (

        <li className='cartProduct'>
            <img src={props.product.image} />

            <div className='nameNprice'>
                <h3>{props.product.name}</h3>
                <p>Price: ${props.product.price}</p>
            </div>

            <p className='qty'>Qty: {props.product.qty}</p>

            <div className='cartButtons'>
                <button onClick={() => props.incrementItem(props.product.id, 1)}><i className="fas fa-plus-circle"></i></button>
                <button onClick={() => props.decrementItem(props.product.id, 1)}><i className="fas fa-minus-circle"></i></button>
                <button id='delete' onClick={() => props.handleRemove(props.product.id)}><i className="fas fa-trash-alt"></i></button>
            </div>
        </li>

    )
}

export default ShoppingCartProduct;
