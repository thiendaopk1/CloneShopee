import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/main.css';
import no_cart from '../../assets/images/no_cart.png';
import { Button, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { cartTotalCountSelectors } from '../../features/product/components/shoppingCart/selectors';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();
  const handleClickCart = () => {
    history.push('/cart');
  };
  const products = useSelector((state) => {
    return state.cart.cartItems;
  });

  const priceTotal = useSelector(cartTotalCountSelectors);

  return (
    <div className="header__cart-list">
      <h4 className="header__cart-heading">Sản phẩm mới thêm</h4>
      <ul className="header__cart-list-item">
        {products.map((product) => (
          <li key={product.id} className="header__cart-item">
            <img className="header__cart-item-img" src={product.newProduct.images[0].path} />
            <div className="header__cart-item-info">
              <div className="header__cart-item-head">
                <h5 className="header__cart-item-name">{product.newProduct.name}</h5>
                <span className="header__cart-item-price">
                  {new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                  }).format(product.newProduct.salePrice)}
                </span>
              </div>
              <span className="header__cart-item-quantity">x{product.quantity}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="header__cart-footing">
        <h4 className="header__cart-more-item">
          Tổng tiền:{' '}
          {new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
          }).format(priceTotal)}
        </h4>
        <Button className={classes.btn_more} onClick={handleClickCart}>
          Xem giỏ hàng
        </Button>
      </div>
    </div>
  );
}

export default Cart;
