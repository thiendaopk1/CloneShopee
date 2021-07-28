import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/main.css';
import no_cart from '../../assets/images/no_cart.png';
import { Button, makeStyles } from '@material-ui/core';
Cart.propTypes = {};

const useStyle = makeStyles((theme) => ({
  btn_more: {
    color: '#fff',
    height: '34px',
    padding: '0 15px',
    minWidth: '60px',
    maxWidth: '190px',
    backgroundColor: '#ee4d2d',
    fontSize: '10px',
    display: 'flex',
    justifyItems: 'center',
    '&:hover': {
      backgroundColor: '#f05d40',
    },
  },
}));

function Cart(props) {
  const classes = useStyle();
  return (
    <div className="header__cart-list">
      <h4 className="header__cart-heading">Sản phẩm mới thêm</h4>
      <ul className="header__cart-list-item">
        <li className="header__cart-item">
          <div className="header__cart-item-img"></div>
          <div className="header__cart-item-info">
            <div className="header__cart-item-head">
              <h5 className="header__cart-item-name">
                Kẹo Milo cube 275g 100 viên date 2022
              </h5>
              <span className="header__cart-item-price">26.000</span>
            </div>
          </div>
        </li>
      </ul>

      <ul className="header__cart-list-item">
        <li className="header__cart-item">
          <div className="header__cart-item-img"></div>
          <div className="header__cart-item-info">
            <div className="header__cart-item-head">
              <h5 className="header__cart-item-name">
                Kẹo Milo cube 275g 100 viên date 2022
              </h5>
              <span className="header__cart-item-price">26.000</span>
            </div>
          </div>
        </li>
      </ul>

      <ul className="header__cart-list-item">
        <li className="header__cart-item">
          <div className="header__cart-item-img"></div>
          <div className="header__cart-item-info">
            <div className="header__cart-item-head">
              <h5 className="header__cart-item-name">
                Kẹo Milo cube 275g 100 viên date 2022
              </h5>
              <span className="header__cart-item-price">26.000</span>
            </div>
          </div>
        </li>
      </ul>
      <div className="header__cart-footing">
        <h4 className="header__cart-more-item">3 Thêm Hàng Vào Giỏ</h4>
        <Button className={classes.btn_more}>Xem giỏ hàng</Button>
      </div>
    </div>
  );
}

export default Cart;
