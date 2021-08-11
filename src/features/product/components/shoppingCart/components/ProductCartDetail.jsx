import React from 'react';
import PropTypes from 'prop-types';
import { setQuantity, removeFromCart } from '../CartSlice';
import { useDispatch } from 'react-redux';
import ProductQuantity from './ProductQuantity';
import { Button } from '@material-ui/core';
ProductCartDetail.propTypes = {
  product: PropTypes.object,
};

function ProductCartDetail({ product }) {
  const { newProduct, quantity, idc } = product;
  const quantityItem = product.quantity;
  const dispatch = useDispatch();

  const handleOnChange = ({ quantity }) => {
    const action = setQuantity({
      idp: newProduct.id,
      idc,
      quantityItem,
      newProduct,
    });
    dispatch(action);
  };

  const handleClickRemove = ({ cartItems }) => {
    const action = removeFromCart({
      idp: product.id,
    });
    dispatch(action);
  };
  return (
    <div className="shopping__cart-item">
      <div className="shopping__cart-product">
        <div className="shopping__cart-product-detail">
          <div className="shopping__cart-product-info">
            <img src={newProduct.images[0].path} alt="" className="shopping__cart-product-img" />
            <span className="shopping__cart-product-name">{newProduct.name}</span>
          </div>
        </div>
        <div className="shopping__cart-product-type">Phân loại hàng: {newProduct.colors[0].colorName}</div>
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
          <ProductQuantity quantityItem={quantityItem} idp={newProduct.id} handleOnChange={handleOnChange} />
        </div>
        <div className="shopping__cart-product-totalPrice">
          <span className="shopping__cart-product-totalPrices">
            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
              newProduct.salePrice * quantity,
            )}
          </span>
        </div>
        <div className="shopping__cart-product-delete">
          <Button>Xóa</Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCartDetail;
