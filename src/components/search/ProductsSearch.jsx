import React from 'react';
import PropTypes from 'prop-types';

ProductsSearch.propTypes = {
  products: PropTypes.array,
};

function ProductsSearch({ products = [] }) {
  return (
    <div className="header__search-history">
      <ul className="header__search-product-list">
        {products.map((product) => (
          <li key={product.id} className="header__search-product-item">
            <a href="">{product.name}</a>
          </li>
        ))}
      </ul>
      <h3 className="header__search-history-title">Lịch sử tìm kiếm</h3>
      <ul className="header__search-history-list">
        <li className="header__search-history-item">
          <a href="">Dầu gội đầu</a>
        </li>
        <li className="header__search-history-item">
          <a href="">Dầu gội đầu</a>
        </li>
      </ul>
    </div>
  );
}

export default ProductsSearch;
