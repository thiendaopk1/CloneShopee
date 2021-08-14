import React from 'react';
import PropTypes from 'prop-types';
import CheckOutProduct from './CheckOutProduct';
import { useSelector } from 'react-redux';
import { cartTotalCountSelectors } from '../product/components/shoppingCart/selectors';
CheckOutProductList.propTypes = {
  products: PropTypes.array,
};

CheckOutProductList.defaulProps = {
  products: [],
};

function CheckOutProductList({ products }) {
  const cartTotal = useSelector(cartTotalCountSelectors);
  return (
    <div className="checkout__product-main">
      <div>
        <div className="checkout__product-list">
          <div className="checkout__product-list-item">
            {products.map((product) => (
              <div key={(product.idc, product.idp)}>
                <CheckOutProduct product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="checkout__product-total-price">
        <div className="checkout__product-total-price-label">Tổng số tiền:</div>
        <div className="checkout__product-total-price-number">
          {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(cartTotal)}
        </div>
      </div>
    </div>
  );
}

export default CheckOutProductList;
