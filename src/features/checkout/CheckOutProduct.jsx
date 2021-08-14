import React from 'react';
import PropTypes from 'prop-types';

CheckOutProduct.propTypes = {
  product: PropTypes.object,
};

function CheckOutProduct({ product = {} }) {
  const { quantity, newProduct } = product;
  return (
    <div className="checkout__product-item">
      <div className="checkout__product-info">
        <img src={newProduct.images[0].path} alt="" className="checkout__product-img" />
        <span className="checkout__product-name">
          <span className="checkout__product-name1">{newProduct.name}</span>
        </span>
      </div>
      <div className="checkout__product-type">
        <span className="checkout__product-type1">Loại: {newProduct.colors[0].colorName}</span>
      </div>
      <div className="checkout__product-price">
        {new Intl.NumberFormat('vi-VN', {
          style: 'currency',
          currency: 'VND',
        }).format(newProduct.salePrice)}
      </div>
      <div className="checkout__product-quantity">{quantity}</div>
      <div className="checkout__product-totalPrice">
        {new Intl.NumberFormat('vi-VN', {
          style: 'currency',
          currency: 'VND',
        }).format(newProduct.salePrice * quantity)}
      </div>
    </div>
  );
}

export default CheckOutProduct;
