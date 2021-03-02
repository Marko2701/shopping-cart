import React from 'react';
import Search from "../../components/Search/Search";
import ProductsList from '../../components/ProductsList/ProductsList';
import './MainPage.css'

function MainPage(props) {
    return (
        <div id='mainPage'>
            <Search products={props.products} setValue={props.setValue} />
            <ProductsList products={props.products} addToCart={props.addToCart} />
        </div>
    )
}

export default MainPage;

