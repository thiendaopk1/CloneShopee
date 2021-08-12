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
        <div key={(product.idp, product.idc)}>
          <ProductCartDetail product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductsCart;
