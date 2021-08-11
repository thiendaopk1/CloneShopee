import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from './RegisterForm';
import { useDispatch } from 'react-redux';
import { register } from '../userSlice';
import { unwrapResult } from '@reduxjs/toolkit';

Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register(props) {
  const dispath = useDispatch;
  const handleSubmit = async (values) => {
    try {
      //auto set username = email
      // values.username = values.email;

      const action = register(values);
      const resultAction = await dispath(action);
      const user = unwrapResult(resultAction);
      //close dialog
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }

      // enqueueSnackbar('Register successfully', { variant: 'success' });
    } catch (error) {
      // enqueueSnackbar(error.message, { variant: 'error' });
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
