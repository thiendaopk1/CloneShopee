import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, makeStyles } from '@material-ui/core';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import QuantityField from '../../../components/form-control/QuantityField';
import classNames from 'classnames';
import CloseIcon from '@material-ui/icons/Close';

AddToCartFormMobile.propTypes = {
  colors: PropTypes.array,
  onSubmit1: PropTypes.func,
};
const useStyle = makeStyles((theme) => ({
  icon: {
    marginLeft: '5px',
    marginRight: '10px',
    height: '15px',
    width: '15px',
  },

  btn2: {
    '&.MuiButton-root': {
      padding: '10px',
      fontSize: '14px',
      backgroundColor: '#f06043',
      color: '#ffeee8',
      border: '1px solid #f06043',
      boxShawdow: '0 1px 1px 0 rgb(0 0 0 / 3%)',
    },
  },

  iconExitMobile: {
    fontSize: '30px',
    display: 'flex',
    float: 'right',
    margin: '15px 15px 15px 0px',
  },
}));
function AddToCartFormMobile({ colors, onSubmit = null }) {
  const [active, setActive] = useState(0);

  const classes = useStyle();
  const schema = yup.object().shape({
    quantity: yup
      .number()
      .required('làm ơn nhập')
      .min(1, 'Tối thiểu là 1 sản phẩm')
      .typeError('Làm ơn nhập số'),
  });
  const form = useForm({
    defaultValues: {
      quantity: 1,
    },

    resolver: yupResolver(schema),
  });
  const handleSubmit = async (values) => {
    // if (!isLoggedIn) {
    //   return;
    // } else {
    const data = {
      quantity: values.quantity,
      idc: active,
    };
    if (data.idc === 0) {
      return;
    } else {
      if (onSubmit) {
        await onSubmit(data);
      }
    }
    // }
  };
  return (
    <div>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="addToCart__btn-mobile">
          <label htmlFor="addToCart-btn" className="addToCart__btn-mobile-btn1">
            <AddShoppingCartIcon className={classes.icon} />
          </label>
          <label htmlFor="addToCart-btn" className="addToCart__btn-mobile-btn2">
            Mua ngay
          </label>
        </div>
        <input type="checkbox" id="addToCart-btn" hidden className="addToCart__checkbox" />
        <label htmlFor="addToCart-btn" className="addToCart__overlay"></label>
        <div className="addToCart__options-mobile">
          <label htmlFor="addToCart-btn" className="addToCart__-icon-exit">
            <CloseIcon className={classes.iconExitMobile} />
          </label>
          <div className="product__type">
            <label className="product__type-label">Màu sắc</label>
            <ul className="product__type-list">
              {colors.map((color) => (
                <li
                  key={color.id}
                  name="type"
                  className={classNames('product__type-item', {
                    'product__type-active': color.id === active,
                  })}
                  onClick={() => setActive(color.id)}
                >
                  {color.colorName}
                </li>
              ))}
            </ul>
          </div>
          <div className="quantity__form-control">
            <label htmlFor="quantity" className="quantity__form-label">
              Số lượng
            </label>
            <QuantityField name="quantity" id="quantity" form={form} />
          </div>
          <Button className={classes.btn2} fullWidth type="submit">
            Thêm mới
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddToCartFormMobile;
