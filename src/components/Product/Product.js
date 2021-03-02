import React from 'react'
import "./Product.css"

function Product(props) {

    return (

        <li className='product'>
            <img src={props.product.image} />
            <p>{props.product.name}</p>
            <h2>${props.product.price}</h2>
            <div id='addToCartBtn'>
                <button onClick={() => props.addToCart(props.product)}>Add to Cart</button>
            </div>
        </li>
    )
}

export default Product;
