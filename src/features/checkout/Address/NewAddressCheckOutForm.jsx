import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Checkbox, FormControlLabel, makeStyles, Typography } from '@material-ui/core';
import InputField from '../../../components/form-control/InputField';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
NewAddressFormCheckOut.propTypes = {
  onSubmitNew: PropTypes.func,
  closeDialog: PropTypes.func,
  onSubmitNewAddress1: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  box1: {
    display: 'flex',
    width: '100%',
    marginBottom: '15px',
    marginTop: '15px',
  },

  box2: {
    display: 'flex',
    float: 'right',
    marginTop: '15px',
    paddingBottom: '15px',
  },

  box3: {
    marginBottom: '15px',
    marginTop: '15px',
  },

  formCtrol: {
    '&.MuiFormControlLabel-root .MuiTypography-root': {
      fontSzie: '14px',
    },
  },

  checkbox: {
    '&.MuiCheckbox-colorSecondary.Mui-checked': {
      color: '#ee4d2d',
    },
  },

  title: {
    display: 'block',
    float: 'left',
    color: '#222',
    padding: '15px 0px',
  },

  back: {
    '&.MuiButton-root': {
      border: 'none',
      width: '140px',
      boxSizing: 'border-box',
      background: 'none',
      marginRight: '6px',
      lineHeight: '1',
      color: '#555',
      height: '34px',
      padding: '0 15px',
    },

    '&.MuiButton-text': {
      fontSize: '14px',
    },
  },

  submit: {
    '&.MuiButton-root': {
      // margin: theme.spacing(2, 0,1, 0)
      color: '#fff',
      backgroundColor: '#ee4d2d',
      width: '140px',
      boxSizing: 'border-box',
      lineHeight: '1',
      height: '34px',
      borderRadius: '2px',
      padding: '0 15px',
    },

    '&.MuiButton-text': {
      fontSize: '14px',
    },

    '&.Mui-disabled': {
      background: '#facac0!important',
      boxShadow: 'none',
      cursor: 'not-allowed',
    },
  },
}));
function NewAddressFormCheckOut({ onSubmitNew = null, closeDialog = null }) {
  const classes = useStyles();
  const schema = yup.object().shape({
    name: yup
      .string()
      .required('please enter your full name')
      .test('should has at least two words', 'please enter at least two words', (value) => {
        return value.split(' ').length >= 2;
      }),
    phone: yup
      .string()
      .required('please enter your phone number')
      .length(10, 'please enter a valid phone number')
      .matches('((09|03|07|08|05)+([0-9]{8}))', 'please enter a valid phone number'),
    address: yup
      .string()
      .required('please enter your address')
      .test('should has at least two words', 'please enter at least two words', (value) => {
        return value.split(' ').length >= 2;
      }),
  });
  const form = useForm({
    defaultValues: {
      name: '',
      phone: '',
      address: '',
    },
    resolver: yupResolver(schema),
  });

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleClose = () => {
    if (closeDialog) closeDialog();
  };

  const handleSubmitNewAddress = async (values) => {
    const data = {
      name: values.name,
      phone: values.phone,
      address: values.address,
      status: checked,
    };
    if (onSubmitNew) {
      await onSubmitNew(data);
    }
  };

  return (
    <Box className={classes.root}>
      <Typography className={classes.title} component="h3" variant="h4">
        Địa chỉ mới
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmitNewAddress)}>
        <Box className={classes.box1}>
          <InputField name="name" placeholder="Họ và tên" form={form} />
          <InputField name="phone" placeholder="Số điện thoại" form={form} />
        </Box>
        <InputField name="address" placeholder="Địa chỉ" form={form} />
        <Box className={classes.box3}>
          <FormControlLabel
            control={<Checkbox checked={checked} onChange={handleChange} className={classes.checkbox} />}
            label="Đặt làm địa chỉ mặt định"
            className={classes.formCtrol}
          />
        </Box>
        <Box className={classes.box2}>
          <Button className={classes.back} onClick={handleClose}>
            Trở lại
          </Button>
          <Button className={classes.submit} type="submit">
            Hoàn thành
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default NewAddressFormCheckOut;
