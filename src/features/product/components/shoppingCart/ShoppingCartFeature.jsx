import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';
import '../../../../assets/css/shoppingCart.css';
import { useSelector } from 'react-redux';
import ProductsCart from './components/ProductsCart';
ShoppingCartFeature.propTypes = {};

function ShoppingCartFeature(props) {
  const products = useSelector((state) => {
    return state.cart.cartItems;
  });
  return (
    <div className="shopping__cart">
      <div className="grid wide">
        {/* label */}
        <div className="row">
          <div className="col l-12">
            <div className="shopping__cart-header">
              <div className="shopping__cart-header-box">
                <div className="shopping__cart-label-sp">Sản phẩm</div>

                <div className="shopping__cart-label-price">Đơn giá</div>
                <div className="shopping__cart-label-quantity">Số lượng</div>
                <div className="shopping__cart-label-quantityPrice">Số tiền</div>
                <div className="shopping__cart-label-anipulation">Thao tác</div>
              </div>
            </div>
          </div>
        </div>
        {/* product */}
        <div className="row">
          <div className="col l-12">
            <div className="shopping__cart-main">
              <ProductsCart products={products} />
            </div>
          </div>
        </div>
        {/* footer */}
        <div className="row">
          <div className="col l-12">
            <div className="shopping__cart-footer">Footer</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartFeature;
