import { yupResolver } from '@hookform/resolvers/yup';
import { Button, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../components/form-control/InputField';
import PasswordField from '../../../components/form-control/PasswordField';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 0, 1, 0),
  },

  title: {
    display: 'flex',
    float: 'left',
    color: '#222',
    padding: '15px 0px',
  },
  submit: {
    // margin: theme.spacing(2, 0,1, 0)
    color: '#fff',
    backgroundColor: '#ee4d2d',
    padding: '0px 10px',
    height: '40px',
    marginTop: '20px',
  },
}));

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const classes = useStyles();
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required('please enter your full name')
      .test(
        'should has at least two words',
        'please enter at least two words',
        (value) => {
          return value.split(' ').length >= 2;
        },
      ),
    email: yup
      .string()
      .required('please enter your email')
      .email('please enter a valid email address'),
    password: yup
      .string()
      .required('please enter your password')
      .matches(
        '(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}',
        'Password must contain at least 8 characters, including upper case letters, lower case letters, numbers and a special character',
      ),
    repassword: yup
      .string()
      .required('please retype your password')
      .oneOf([yup.ref('password')], 'passord does not match'),
    phone: yup
      .string()
      .required('please enter your phone number')
      .length(10, 'please enter a valid phone number')
      .matches('((09|03|07|08|05)+([0-9]{8}))', 'please enter a valid phone number'),
    address: yup.string().required('please enter your address'),
  });
  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      repassword: '',
      phone: '',
      address: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };
  const { isSubmitting } = form.formState;
  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress />}
      <Typography className={classes.title} component="h3" variant="h4">
        Đăng ký
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" placeholder="Full Name" form={form} />
        <InputField name="email" placeholder="Email" form={form} />
        <PasswordField name="password" form={form} placeholder="Mật khẩu" />
        <PasswordField name="repassword" form={form} placeholder="Nhập lại Mật khẩu" />
        <InputField name="phone" placeholder="Số điện thoại" form={form} />
        <InputField name="address" placeholder="Địa chỉ" form={form} />
        <Button
          // disabled={isSubmitting}
          type="submit"
          className={classes.submit}
          variant="contained"
          fullWidth
        >
          Đăng ký
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
