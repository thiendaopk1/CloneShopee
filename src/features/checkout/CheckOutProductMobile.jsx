import React from 'react';
import PropTypes from 'prop-types';

CheckOutProductMobile.propTypes = {
  product: PropTypes.object,
};

function CheckOutProductMobile({ product = {} }) {
  const { quantity, newProduct } = product;
  return (
    <div className="checkout___product-mobile-item">
      <div className="checkout___product-mobile-img">
        <img src={newProduct.images[0].path} alt="" className="checkout___product-mobile-img1" />
      </div>
      <div className="checkout___product-mobile-info">
        <div className="checkout___product-mobile-name">
          <div className="checkout___product-mobile-name1">{newProduct.name}</div>
          <div className="checkout___product-mobile-type">Loại: {newProduct.colors.colorName}</div>
        </div>
        <div className="checkout___product-mobile-more">
          <div className="checkout___product-mobile-price">
            {new Intl.NumberFormat('vi-VN', {
              style: 'currency',
              currency: 'VND',
            }).format(newProduct.salePrice * quantity)}
          </div>
          <div className="checkout___product-mobile-quantity">{quantity}</div>
        </div>
      </div>
    </div>
  );
}

export default CheckOutProductMobile;
