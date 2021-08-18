import { yupResolver } from '@hookform/resolvers/yup';
import { Button, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../components/form-control/InputField';
import PasswordField from '../../../components/form-control/PasswordField';
RegisterForm.propTypes = {
  onSubmitRegister: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 0, 1, 0),
  },
  avatar: {
    margin: '0 auto',
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    textAlign: 'center',
  },
  submit: {
    // margin: theme.spacing(2, 0,1, 0)
  },
}));
function RegisterForm({ onSubmitRegister = null }) {
  const classes = useStyles();
  const schema = yup.object().shape({
    fullname: yup
      .string()
      .required('please enter your full name')
      .test('should has at least two words', 'please enter at least two words', (value) => {
        return value.split(' ').length >= 2;
      }),
    email: yup.string().required('please enter your email').email('please enter a valid email address'),
    password: yup
      .string()
      .required('please enter your password')
      .matches
      // '(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}',
      // 'Password must contain at least 8 characters, including upper case letters, lower case letters, numbers and a special character',
      (),
    repassword: yup
      .string()
      .required('please retype your password')
      .oneOf([yup.ref('password')], 'passord does not match'),
    phone: yup
      .string()
      .required('please enter your phone number')
      .length(10, 'please enter a valid phone number')
      .matches('((09|03|07|08|05)+([0-9]{8}))', 'please enter a valid phone number'),
  });

  const form = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      password: '',
      repassword: '',
      phone: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmitRegister = async (values) => {
    if (onSubmitRegister) {
      await onSubmitRegister(values);
    }
  };
  return (
    <div className={classes.root}>
      <Typography className={classes.title} component="h3" variant="h5">
        Sign Up
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmitRegister)}>
        <InputField form={form} label="Full name" name="fullname" />
        <InputField form={form} label="Email" name="email" />
        <PasswordField form={form} label="Password" name="password" />
        <PasswordField form={form} label="RePassWord" name="repassword" />
        <InputField form={form} label="Phone" name="phone" />
        <Button type="submit" className={classes.submit} variant="contained" color="primary" fullWidth>
          Đăng ký
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
