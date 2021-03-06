import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';

function Search({
  products,
  setValue
}) {

  return (
    <div className="search__wrapper">
      {products.length === 1 ?
        <p>{products.length} Product</p>
        :
        <p>{products.length} Products</p>
      }

      <div className='inputSearch'>
        <span className='inputIcon'><i className="fas fa-search"></i></span>
        <input type='text' placeholder='Start searching'
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
}

Search.propTypes = {
  products: PropTypes.array,
  setValue: PropTypes.func
};

export default Search;
