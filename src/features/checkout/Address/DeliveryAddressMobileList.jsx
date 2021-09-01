import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DoneIcon from '@material-ui/icons/Done';
import RoomIcon from '@material-ui/icons/Room';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Button, Dialog, DialogContent, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import NewAddressCheckOut from './NewAddressCheckOut';
DeliveryAddressMobileList.propTypes = {
  addressList: PropTypes.array,
  addressChecked: PropTypes.object,
  onChange: PropTypes.func,
  onClickChange: PropTypes.func,
  onSubmitNew: PropTypes.func,
};

DeliveryAddressMobileList.defaultProps = {
  addressList: [],
};

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: '20px',
    color: '#ee4d2d',
  },
  iconBack: {
    fontSize: '35px',
    color: '#ee4d2d',
  },
  plus: {
    fontSize: '20px',
  },

  btn: {
    '&.MuiButton-root': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      '&.MuiButton-text': {
        fontSize: '14px',
      },
    },
  },
}));

function DeliveryAddressMobileList({
  addressList,
  addressChecked = {},
  onChange = null,
  onClickChange = null,
}) {
  const classes = useStyles();
  const [value, setValue] = useState(addressChecked);

  const handleChange = (address) => {
    setValue(address);
    const state = true;
    if (onChange) {
      onChange(address);
      if (onClickChange) {
        onClickChange(state);
      }
    }
  };

  const handleChangeView = () => {
    const state = true;
    if (onClickChange) {
      onClickChange(state);
    }
  };
  const history = useHistory();
  useRouteMatch();
  useLocation();
  const handleSettingAddress = () => {
    history.push('user/address');
  };

  // dialog
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);

  const handleClickOpenNew = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // end dialog
  return (
    <div className="checkout__address-mobile">
      <div className="checkout__address-mobile-header">
        <KeyboardBackspaceIcon className={classes.iconBack} onClick={handleChangeView} />
        <div className="checkout__address-mobile-header-title">Chọn địa chỉ nhận hàng</div>
        <div className="checkout__address-mobile-header-fix" onClick={handleSettingAddress}>
          Sửa
        </div>
      </div>
      <div>
        <ul className="checkout__address-moblie-list">
          {addressList.map((address) => (
            <li
              key={address.id}
              className="checkout__address-mobile-item"
              onClick={() => handleChange(address)}
            >
              <div className="checkout__address-mobile-name">
                <span className="checkout__address-mobile-name1">{address.name}</span>
                {address.status === true && (
                  <span className="checkout__address-mobile-default">[Mặc định]</span>
                )}
              </div>
              <div className="checkout__address-mobile-phone">{address.phone}</div>
              <div className="checkout__address-mobile-address">
                <div className="checkout__address-mobile-address1">{address.address}</div>
                <div className="checkout__address-mobile-icon">
                  {address.id === value.id && <DoneIcon className={classes.icon} />}
                  <RoomIcon className={classes.icon} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="checkout__address-mobile-btn">
        <Button fullWidth className={classes.btn}>
          <AddIcon className={classes.plus} onClick={handleClickOpenNew} />
          Thêm địa chỉ mới
        </Button>
      </div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        disableBackdropClick
        disableEscapeKeyDown
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <NewAddressCheckOut closeDialog={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default DeliveryAddressMobileList;
