import React from 'react';
import PropTypes from 'prop-types';
import ProductCartDetail from './ProductCartDetail';

ProductsCart.propTypes = {
  products: PropTypes.array,
};

ProductsCart.defaultProps = {
  products: [],
};

function ProductsCart({ products }) {
  return (
    <div className="shopping__cart-list">
      {products.map((product) => (
        <ProductCartDetail product={product} />
      ))}
    </div>
  );
}

export default ProductsCart;
