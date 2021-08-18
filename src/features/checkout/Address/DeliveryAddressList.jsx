import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Button, makeStyles } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import AddIcon from '@material-ui/icons/Add';
DeliveryAddressList.propTypes = {
  addressList: PropTypes.array,
  addressChecked: PropTypes.object,
};
DeliveryAddressList.defaultProps = {
  addressList: [],
};

const useStyles = makeStyles((theme) => ({
  addNewAddress: {
    marginRight: '15px',
    '&.MuiButton-root': {
      display: 'flex',
      alignItems: 'center',
      alignSelf: 'flex-start',
      background: '#fff',
      border: '1px solid rgba(0,0,0,.09)',
      boxShadow: '0 1px 1px 0 rgb(0 0 0 / 3%)',
      borderRadius: '2px',
      color: '#555',
      textTransform: 'capitalize',
    },

    '&.MuiButton-text': {
      fontSize: '14px',
    },
  },

  icon: {
    fontSize: '20px',
  },

  backToAddress: {
    '&.MuiButton-root': {
      display: 'flex',
      alignItems: 'center',
      alignSelf: 'flex-start',
      background: '#fff',
      border: '1px solid rgba(0,0,0,.09)',
      boxShadow: '0 1px 1px 0 rgb(0 0 0 / 3%)',
      borderRadius: '2px',
      color: '#555',
      textTransform: 'capitalize',
    },

    '&.MuiButton-text': {
      fontSize: '14px',
    },
  },

  complete: {
    '&.MuiButton-root': {
      background: '#ee4d2d',
      color: '#fff',
      border: '1px solid rgba(0,0,0,.09)',
      boxShadow: '0 1px 1px 0 rgb(0 0 0 / 3%)',
      borderRadius: '2px',
      textTransform: 'capitalize',
    },
    '&.MuiButton-text': {
      fontSize: '14px',
    },
  },

  back: {
    marginLeft: '20px',
    '&.MuiButton-root': {
      display: 'flex',
      alignItems: 'center',
      alignSelf: 'flex-start',
      background: '#fff',
      border: '1px solid rgba(0,0,0,.09)',
      boxShadow: '0 1px 1px 0 rgb(0 0 0 / 3%)',
      borderRadius: '2px',
      color: '#555',
      textTransform: 'capitalize',
      paddingLeft: '20px',
      paddingRight: '20px',
    },

    '&.MuiButton-text': {
      fontSize: '14px',
    },
  },
}));

function DeliveryAddressList({ addressList, addressChecked = {} }) {
  const classes = useStyles();
  const [value, setValue] = useState(addressChecked);
  console.log('value', value);
  const handleChange = (address) => {
    console.log('address', address);
  };
  return (
    <div>
      <div className="checkout__address-header">
        <div className="checkout__address-label1">
          <RoomIcon />
          Địa Chỉ Nhận Hàng
        </div>
        <div className="checkout__address-header-buttons">
          <Button className={classes.addNewAddress}>
            <AddIcon className={classes.icon} />
            Thêm địa chỉ mới
          </Button>
          <Button className={classes.backToAddress}>Thiết lập địa chỉ</Button>
        </div>
      </div>
      <div>
        <ul className="address__radio-group-list">
          {addressList.map((address) => (
            <li key={address.id} className="address__radio-group-item" htmlFor={address.id}>
              <input
                type="radio"
                name="address"
                id={address.id}
                value={address.id}
                checked
                onClick={() => handleChange(address)}
                className="address__radio-group-item-input"
              />
              <label htmlFor={address.id} className="address__radio-group-item-name">
                {address.name} {address.phone}
                <p className="address__radio-group-item-address">{address.address}</p>
              </label>
              {address.status === true && <div className="address__radio-group-item-default">Mặc định</div>}
            </li>
          ))}
        </ul>
        <div className="address__button">
          <Button className={classes.complete}>Hoàn Thành</Button>
          <Button className={classes.back}>Trở lại</Button>
        </div>
      </div>
    </div>
  );
}

export default DeliveryAddressList;
