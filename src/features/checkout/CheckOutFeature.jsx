import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CheckOutAddress from './CheckOutAddress';
import CheckOutProductList from './CheckOutProductList';
import CheckOutPayMent from './CheckOutPayment';
import '../../assets/css/checkout.css';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { FormControl, RadioGroup, FormControlLabel, Radio, makeStyles, Button } from '@material-ui/core';
import { cartTotalCountSelectors } from '../product/components/shoppingCart/selectors';
import orderApi from '../../api/orderApi';
import { useEffect } from 'react';
import addressApi from '../../api/addressApi';
import { useSnackbar } from 'notistack';
import { Redirect } from 'react-router-dom';
CheckOutFeature.propTypes = {};

const useStyle = makeStyles((theme) => ({
  btn: {
    '&.MuiButton-root': {
      background: '#ee4d2d',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid rgba(0,0,0,.09)',
      boxShadow: '0 1px 1px 0 rgb(0 0 0 / 3%)',
      borderRadius: '2px',
      textTransform: 'capitalize',
      width: '210px',
      height: '40px',
      fontSize: '14px',
    },
  },

  radioGroup: {
    '&.MuiFormGroup-root': {
      flexDirection: 'row',
    },
  },

  radio: {
    '&.MuiRadio-root': {
      display: 'none',
    },
  },

  label: {
    '&.MuiFormControlLabel-root': {
      marginLeft: '10px',
      marginRight: '0px',
      height: '40px',
      padding: '4px 12px',
      background: '#fff',
      border: '1px solid rgba(0,0,0,.09)',
      '&:hover': {
        color: '#ee4d2d',
        borderColor: '#ee4d2d',
      },
    },

    '&.MuiFormControlLabel-label': {
      '&.MuiTypography-body1': {
        fontSize: '14px',
      },
    },
  },
}));

function CheckOutFeature(props) {
  const classes = useStyle();
  const { enqueueSnackbar } = useSnackbar();
  const cartTotal = useSelector(cartTotalCountSelectors);
  const totalBill = cartTotal + 20000;

  const products = useSelector((state) => {
    return state.cart.cartItems;
  });

  const [payment, setPayment] = useState('COD');

  const handleOnChange = (event) => {
    setPayment(event.target.value);
  };

  const addressList = useSelector((state) => {
    return state.address.addressItems;
  });

  // conver array to object
  const checked = addressList.find((address) => address.status === true);
  const [addressChecked, setAddressChecked] = useState(checked);

  const handleChangeAddress = (value) => {
    setAddressChecked(value);
  };
  // end conver array to object

  const loggedInUser = useSelector((state) => state.user.current);
  const { email } = loggedInUser;
  const handleSubmit = () => {
    const data = {
      fullname: addressChecked.name,
      email: email,
      address: addressChecked.address,
      phone: addressChecked.phone,
      cartItems: products,
      cartTotal: cartTotal,
      totalBill: totalBill,
      payment: payment,
    };
    // console.log('data', data);
    orderApi.add(data);
    enqueueSnackbar('bạn đã đặt mua đơn hàng', { variant: 'success' });
  };
  const [view1, setView1] = useState(true);
  const handleChangeView1 = (state) => {
    setView1(state);
  };
  const isLoggedIn = !!loggedInUser.id;
  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <div className="checkout__content">
        <div className="grid wide">
          <div className="row">
            <div className="col l-12 c-12 m-12">
              {addressList.length > 0 && (
                <CheckOutAddress
                  addressList={addressList}
                  addressChecked={addressChecked}
                  onChange={handleChangeAddress}
                  view1={view1}
                  onClickChange1={handleChangeView1}
                />
              )}
            </div>
          </div>
          <div className="row">
            <div className="col l-12 c-12 m-12">
              <div className="checkout__product">
                <div className="checkout__product-header hide-on-mobile">
                  <div className="checkout__product-header-label">
                    <div className="checkout__product-header-product">
                      <div className="checkout__product-header-product-1">Sản phẩm</div>
                    </div>
                    <div className="checkout__product-header-empty"></div>
                    <div className="checkout__product-header-price">Đơn giá</div>
                    <div className="checkout__product-header-quantity">Số lượng</div>
                    <div className="checkout__product-header-totalPrice">Thành tiền</div>
                  </div>
                </div>
                <CheckOutProductList products={products} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col l-12 c-12 m-12">
              <div className="checkout__product-payment">
                <div className="checkout__product-payment-categories">
                  <div>
                    <div className="checkout__product-payment-setting">
                      <div className="checkout__product-payment-setting-title">Phương thức thanh toán</div>
                      <div className="checkout__product-payment-setting-radio">
                        <FormControl component="fieldset">
                          <RadioGroup
                            aria-label="gender"
                            name="gender1"
                            value={payment}
                            className={classes.radioGroup}
                            onChange={handleOnChange}
                          >
                            <FormControlLabel
                              value="COD"
                              control={<Radio className={classes.radio} />}
                              label="Thanh toán khi nhận hàng"
                              className={classNames(classes.label, {
                                'checkout__product-payment-selected': 'COD' === payment,
                              })}
                            />
                            <FormControlLabel
                              value="VNPAY"
                              control={<Radio className={classes.radio} />}
                              label="Ví VNPAY"
                              className={classNames(classes.label, {
                                'checkout__product-payment-selected': 'VNPAY' === payment,
                              })}
                            />
                          </RadioGroup>
                        </FormControl>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="checkout__product-payment-bill">
                  <div className="checkout__product-payment-total-label">Tổng tiền hàng</div>
                  <div className="checkout__product-payment-total">
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(cartTotal)}
                  </div>
                  <div className="checkout__product-payment-delivery-label">Phí vận chuyển</div>
                  <div className="checkout__product-payment-delivery">
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(20000)}
                  </div>
                  <div className="checkout__product-payment-totalBill-label">Tổng thanh toán:</div>
                  <div className="checkout__product-payment-totalBill">
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalBill)}
                  </div>
                  <div className="checkout__product-payment-action">
                    <div className="checkout__product-payment-action-lable">
                      <div className="checkout__product-payment-action-label1 hide-on-mobile">
                        Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo{' '}
                        <a
                          href="https://shopee.vn/legaldoc/policies/"
                          rel="noopener noreferrer"
                          className="checkout__product-payment-action-link"
                        >
                          Điều khoản Shopee
                        </a>
                      </div>
                    </div>
                    <div className="checkout__product-payment-mobile-total-Bill">
                      <div className="checkout__product-payment-totalBill-label">Tổng thanh toán:</div>
                      <div className="checkout__product-payment-totalBill">
                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                          totalBill,
                        )}
                      </div>
                    </div>
                    <Button className={classes.btn} onClick={handleSubmit}>
                      Đặt hàng
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOutFeature;
