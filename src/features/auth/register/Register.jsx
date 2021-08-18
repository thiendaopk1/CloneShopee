import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from './RegisterForm';
import { useDispatch } from 'react-redux';
import { register } from '../userSlice';
import { unwrapResult } from '@reduxjs/toolkit';

Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register({ closeDialog }) {
  const dispath = useDispatch();
  const handleSubmitRegister = async (values) => {
    try {
      const action = register(values);
      console.log('action', action);
      const resultAction = await dispath(action);
      console.log('resultAction', resultAction);
      const user = unwrapResult(resultAction);
      console.log('user', user);
      if (closeDialog) {
        closeDialog();
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <div>
      <RegisterForm onSubmitRegister={handleSubmitRegister} />
    </div>
  );
}

export default Register;
