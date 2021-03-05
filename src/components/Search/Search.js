import React from 'react'
import './Search.css'

function Search(props) {

    return (
        <div className="search">
            {props.products.length === 1 ?
                <p>{props.products.length} Product</p>
                :
                <p>{props.products.length} Products</p>
            }

            <div className='searchWrapper'>
                <span className='searchIcon'><i className="fas fa-search"></i></span>
                <input type='text' placeholder='Start searching'
                    onChange={(e) => props.setValue(e.target.value)}
                />
            </div>
        </div>
    )
}

export default Search;
