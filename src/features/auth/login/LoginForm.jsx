import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  LinearProgress,
  makeStyles,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../components/form-control/InputField';
import PasswordField from '../../../components/form-control/PasswordField';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 0, 2, 0),
  },

  title: {
    display: 'flex',
    float: 'left',
    color: '#222',
    padding: '15px 0px',
  },
  submit: {
    margin: theme.spacing(2, 0, 1, 0),
  },
  link: {
    textDecoration: 'none',
    color: 'rgb(0, 85, 170)',
    marginTop: '10px',
  },
  submit: {
    // margin: theme.spacing(2, 0,1, 0)
    color: '#fff',
    backgroundColor: '#ee4d2d',
    padding: '0px 10px',
    height: '40px',
    marginTop: '20px',
  },
  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
  opendangky: PropTypes.func,
};

function LoginForm(props) {
  const handleClickOpen = () => {
    handleOncloseLogin();
  };
  const handleClickOpenRegister = () => {
    const open = props.opendangky;
    open();
  };
  const handleOncloseLogin = () => {
    const onClose1 = props.onClose;
    onClose1();
  };
  const classes = useStyles();
  const schema = yup.object().shape({
    email: yup.string().required('please enter your email').email('please enter a valid email address'),
    password: yup
      .string()
      .required('please enter your password')
      .matches
      // '(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{4,}',
      // 'Password must contain at least 8 characters, including upper case letters, lower case letters, numbers and a special character',
      (),
  });
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    console.log('values', values);
    const onSubmit1 = props.onSubmit;
    await onSubmit1(values);
  };
  const { isSubmitting } = form.formState;
  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress />}

      <Typography className={classes.title} component="h3" variant="h4">
        Đăng nhập
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
        <Button type="submit" className={classes.submit} variant="contained" fullWidth>
          Đăng nhập
        </Button>
        <Grid container>
          <Grid item xs>
            <Button onClick={handleClickOpen} style={{ marginRight: 24 }} className={classes.link}>
              Quên mật khẩu?
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={handleClickOpenRegister} className={classes.link}>
              Chưa có tài khoản? Đăng ký
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default LoginForm;
