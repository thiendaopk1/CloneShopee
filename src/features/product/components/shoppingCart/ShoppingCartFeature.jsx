import React from 'react';
import PropTypes from 'prop-types';
import { Button, Paper, makeStyles } from '@material-ui/core';
import '../../../../assets/css/shoppingCart.css';
import { useDispatch, useSelector } from 'react-redux';
import ProductsCart from './components/ProductsCart';
import { removeAll } from './CartSlice';
import { cartTotalCountSelectors } from './selectors';
import { useHistory } from 'react-router-dom';
ShoppingCartFeature.propTypes = {};

const useStyle = makeStyles((theme) => ({
  btn1: {
    '&.MuiButton-root': {
      background: '0',
      border: 'none',
      fontSize: '16px',
      marginTop: '4px',
      color: ' #222222',
      textTransform: 'capitalize',
    },
  },

  btn2: {
    '&.MuiButton-root': {
      padding: '8px 62px',
      margin: '0 22px 0 15px',
      textTransform: 'capitalize',
      fontWeight: '300',
      boxSizing: 'border-box',
      borderRadius: '2px',
      background: '#ee4d2d',
      color: '#fff',
      fontSize: '14px',
      '&:hover': {
        backgroundColor: '#ee4d2dd9',
      },
    },
  },
}));

function ShoppingCartFeature(props) {
  const classes = useStyle();

  const dispatch = useDispatch();
  const cartTotal = useSelector(cartTotalCountSelectors);
  const history = useHistory();

  const handleCheckOut = () => {
    history.push('/checkout');
  };

  const products = useSelector((state) => {
    return state.cart.cartItems;
  });

  const handleRemoveAll = () => {
    const action = removeAll();
    dispatch(action);
  };
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
            <div className="shopping__cart-footer">
              <div className="shopping__cart-footer-box">
                <div className="shopping__cart-footer-deleteAll">
                  <Button className={classes.btn1} onClick={handleRemoveAll}>
                    Xoá tất cả
                  </Button>
                </div>
                <div className="shopping__cart-footer-favorite">
                  <span className="shopping__cart-footer-favorite-label">Lưu vào danh mục Đã thích</span>
                </div>
                <div className="shopping__cart-footer-price">
                  <div className="shopping__cart-footer-price1">
                    <span className="shopping__cart-footer-price-label">Tổng thanh toán:</span>
                    <span className="shopping__cart-footer-totalPrice">
                      {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                        cartTotal,
                      )}
                    </span>
                  </div>
                </div>
                <div className="shopping__cart-footer-checkOut">
                  <Button className={classes.btn2} onClick={handleCheckOut}>
                    Mua hàng
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartFeature;
