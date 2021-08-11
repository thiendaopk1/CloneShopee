import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import { Link } from 'react-router-dom';
ProductList.propTypes = {
  productList: PropTypes.array,
};

ProductList.defaultProps = {
  productList: [],
};

function ProductList({ productList }) {
  return (
    <div className="row">
      {productList.map((product) => (
        <div key={product.id} className="col l-2-4 m-6 c-12">
          <Link to={`/${product.id}`} style={{ textDecoration: 'none', color: 'black' }}>
            <Product product={product} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
