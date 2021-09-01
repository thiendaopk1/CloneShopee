import React from 'react';
import PropTypes from 'prop-types';
import { login } from '../userSlice';
import LoginForm from './LoginForm';
// import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import cartApi from '../../../api/cartApi';
import addressApi from '../../../api/addressApi';
import { setCart } from '../../product/components/shoppingCart/CartSlice';
import { setAddress } from '../../user/component/AddressSlice';

Login.propTypes = {
  closeDialog: PropTypes.func,
  openForgot: PropTypes.func,
  openRegister: PropTypes.func,
};

function Login(props) {
  const oncloseLogin = (value) => {
    const open = props.openForgot;
    open();
  };
  const openFormRegister = () => {
    const open1 = props.openRegister;
    open1();
  };
  const dispath = useDispatch();
  const handleSubmit = async (values) => {
    (async () => {
      try {
        const action = login(values);
        const resultAction = await dispath(action);
        const user = unwrapResult(resultAction);

        //gọi api
        const items = await cartApi.getAll();
        const { cartItems } = items;
        dispath(setCart(cartItems));

        const items1 = await addressApi.getAll();
        console.log('items', items1);
        const { addressList } = items1;
        console.log('addressList', addressList);
        dispath(setAddress(addressList));

        const { closeDialog } = props;
        if (closeDialog) {
          closeDialog();
        }

        // enqueueSnackbar('login successfully', { variant: 'success' });
      } catch (error) {
        // enqueueSnackbar(error.message, { variant: 'error' });
      }
    })();
  };
  return (
    <div>
      <LoginForm onSubmit={handleSubmit} onClose={oncloseLogin} opendangky={openFormRegister} />
    </div>
  );
}

export default Login;
