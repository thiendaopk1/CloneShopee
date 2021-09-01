import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from '../../../components/form-control/InputField';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
EditInfo.propTypes = {};
const useStyles = makeStyles((theme) => ({
  btn: {
    '&.MuiButton-root': {
      color: '#fff',
      background: '#ee4d2d',
      height: '40px',
      padding: '0px 20px',
      minWidth: '70px',
      maxWidth: '220px',
      borderRadius: '2px',
      boxShadow: '0 1px 1px 0 rgb(0 0 0 / 9%)',
    },

    '&.MuiButton-text': {
      fontSize: '14px',
      textTransform: 'capitalize',
    },
  },
}));
function EditInfo(props) {
  const classes = useStyles();

  const loggedInUser = useSelector((state) => state.user.current);
  const { fullname, email, phone } = loggedInUser;
  const schema = yup.object().shape({
    email: yup.string().required('please enter your email').email('please enter a valid email address'),
    phone: yup
      .string()
      .required('please enter your phone number')
      .length(10, 'please enter a valid phone number')
      .matches('((09|03|07|08|05)+([0-9]{8}))', 'please enter a valid phone number'),
  });

  const form = useForm({
    defaultValues: {
      email: email,
      phone: phone,
    },
    resolver: yupResolver(schema),
  });

  const handleSubmitEditInfo = (values) => {
    const data = {
      email: values.email,
      phone: values.phone,
    };

    console.log(data);
  };

  const isLoggedIn = !!loggedInUser.id;
  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <div className="user__info">
      <div className="user__info-header">
        <h1 className="user__info-header-title">Hồ sơ của tôi</h1>
        <div className="user__info-header-subtitle">Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
      </div>
      <div className="user__info-main">
        <form onSubmit={form.handleSubmit(handleSubmitEditInfo)}>
          <div className="user__info-item">
            <div className="user__info-label">
              <label>Tên tài khoảng</label>
            </div>
            <div className="user__info-username">
              <p>{fullname}</p>
            </div>
          </div>
          <div className="user__info-item">
            <div className="user__info-label">
              <label>Email</label>
            </div>
            <div className="user__info-username">
              <InputField name="email" form={form} />
            </div>
          </div>
          <div className="user__info-item">
            <div className="user__info-label">
              <label>Phone</label>
            </div>
            <div className="user__info-username">
              <InputField name="phone" form={form} />
            </div>
          </div>
          <div className="user__info-btn">
            <Button type="submit" className={classes.btn}>
              Lưu
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditInfo;
