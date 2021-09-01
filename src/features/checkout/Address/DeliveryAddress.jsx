import React from 'react';
import PropTypes from 'prop-types';
import { Button, makeStyles } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
DeliveryAddress.propTypes = {
  onClick: PropTypes.func,
  address: PropTypes.object,
};
const useStyle = makeStyles((theme) => ({
  btn: {
    marginLeft: '60px',
    '&.MuiButton-root': {
      color: '#05a',
      textTransform: 'capitalize',
      background: 'none',
    },
    '&.MuiButton-text': {
      fontSize: '14px',
      fontWeight: '500',
    },
  },

  roomIcon: {
    color: '#ee4d2d',
    fontSize: '20px',
  },
}));
function DeliveryAddress({ onClick = null, address = {} }) {
  const classes = useStyle();
  const handleChangeView = () => {
    if (onClick) {
      onClick(false);
    }
  };

  return (
    <div>
      <div className="hide-on-mobile">
        <div className="checkout__address-label">
          <RoomIcon />
          Địa Chỉ Nhận Hàng
        </div>
        <div className="checkout__address-info">
          <div className="checkout__address-info-user-address">
            <div className="checkout__address-info-user">
              {address.name} {address.phone}
            </div>
            <div className="checkout__address-info-address">{address.address}</div>
            {address.status === true && <div className="checkout__address-info-default">Mặc định</div>}
          </div>
          <Button onClick={handleChangeView} className={classes.btn}>
            Thay đổi
          </Button>
        </div>
      </div>
      <div className="view-checkout-on-mobile" onClick={handleChangeView}>
        <div className="checkout__address-mobile-flex">
          <div className="checkout__address-moblie-column">
            <div className="checkout__address-mobile-label">
              <RoomIcon className={classes.roomIcon} />
              Địa Chỉ Nhận Hàng
            </div>
            <div className="checkout__address-mobile-info">
              <div className="checkout__address-info-user-mobile-address">
                <div className="checkout__address-info-user">
                  {address.name} {address.phone}
                </div>
                <div className="checkout__address-info-mobile-address">{address.address}</div>
              </div>
            </div>
          </div>
          <NavigateNextIcon />
        </div>
      </div>
    </div>
  );
}

export default DeliveryAddress;
