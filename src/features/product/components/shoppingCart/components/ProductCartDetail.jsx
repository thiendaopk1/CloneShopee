import React from 'react';
import PropTypes from 'prop-types';
import { setQuantity, removeFromCart } from '../CartSlice';
import { useDispatch } from 'react-redux';
import ProductQuantity from './ProductQuantity';
import { Button, makeStyles } from '@material-ui/core';
ProductCartDetail.propTypes = {
  product: PropTypes.object,
};
const useStyle = makeStyles((theme) => ({
  btn: {
    '&.MuiButton-root': {
      background: '0',
      border: 'none',
      color: ' #222222',
      textTransform: 'capitalize',
      fontSize: '14px',
      '&:hover': {
        color: '#ee4d2d',
      },
    },
  },
}));
function ProductCartDetail({ product }) {
  const classes = useStyle();
  const { newProduct, quantity, idc, idp } = product;
  const quantityItem = product.quantity;
  const dispatch = useDispatch();

  const handleOnChange = ({ quantity }) => {
    const action = setQuantity({
      idp,
      idc,
      quantity,
      newProduct,
    });
    dispatch(action);
  };

  const handleClickRemove = ({ cartItems }) => {
    const action = removeFromCart({
      idp,
      idc,
    });
    dispatch(action);
  };
  return (
    <div className="shopping__cart-item">
      <div className="shopping__cart-product hide-on-mobile-tablet">
        <div className="shopping__cart-product-detail">
          <div className="shopping__cart-product-info">
            <img src={newProduct.images[0].path} alt="" className="shopping__cart-product-img" />
            <span className="shopping__cart-product-name">{newProduct.name}</span>
          </div>
        </div>
        <div className="shopping__cart-product-type">Phân loại hàng: {newProduct.colors.colorName}</div>
        <div className="shopping__cart-product-price">
          <span className="shopping__cart-product-originalPrice">
            {new Intl.NumberFormat('vi-VN', {
              style: 'currency',
              currency: 'VND',
            }).format(newProduct.price)}
          </span>
          <span className="shopping__cart-product-salePrice">
            {new Intl.NumberFormat('vi-VN', {
              style: 'currency',
              currency: 'VND',
            }).format(newProduct.salePrice)}
          </span>
        </div>
        <div className="shopping__cart-product-quantity">
          <ProductQuantity quantityItem={quantityItem} idc={idc} idp={idp} handleOnChange={handleOnChange} />
        </div>
        <div className="shopping__cart-product-totalPrice">
          <span className="shopping__cart-product-totalPrices">
            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
              newProduct.salePrice * quantityItem,
            )}
          </span>
        </div>
        <div className="shopping__cart-product-delete">
          <Button onClick={handleClickRemove} className={classes.btn}>
            Xóa
          </Button>
        </div>
      </div>
      <div className="shopping__cart-product-mobile">
        <div className="shopping__cart-product-mobile-left">
          <div className="shopping__cart-product-info">
            <img src={newProduct.images[0].path} alt="" className="shopping__cart-product-mobile-img" />
          </div>
        </div>
        <div className="shopping__cart-product-mobile-right">
          <span className="shopping__cart-product-mobile-name">{newProduct.name}</span>
          <div className="shopping__cart-product-mobile-type">
            Phân loại hàng: {newProduct.colors.colorName}
          </div>
          <div className="shopping__cart-product-mobile-price">
            <span className="shopping__cart-product-originalPrice">
              {new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
              }).format(newProduct.price)}
            </span>

            <span className="shopping__cart-product-totalPrices">
              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                newProduct.salePrice * quantityItem,
              )}
            </span>
          </div>
          <div className="shopping__cart-product-mobile-quantity">
            <ProductQuantity
              quantityItem={quantityItem}
              idc={idc}
              idp={idp}
              handleOnChange={handleOnChange}
            />
          </div>
        </div>
        <div className="shopping__cart-product-mobile-delete">
          <Button onClick={handleClickRemove} className={classes.btn}>
            Xóa
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCartDetail;
