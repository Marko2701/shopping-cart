import React from 'react';
import Product from '../Product/Product';
import './ProductsList.css';

function ProductsList(props) {

  return (
    <ul className='mainProducts'>
      {props.products.map(product =>
        <Product
          key={product.id}
          product={product}
          addToCart={props.addToCart}
        />)}
    </ul>
  );
}

export default ProductsList;
