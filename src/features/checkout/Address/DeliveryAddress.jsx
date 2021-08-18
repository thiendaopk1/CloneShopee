import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
DeliveryAddress.propTypes = {
  onClick: PropTypes.func,
  address: PropTypes.object,
};

function DeliveryAddress({ onClick = null, address = {} }) {
  const handleChangeView = () => {
    const state = false;
    if (onClick) {
      onClick(state);
    }
  };

  return (
    <div>
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
          <div className="checkout__address-info-default">Mặc định</div>
        </div>
        <Button onClick={handleChangeView}>Thay đổi</Button>
      </div>
    </div>
  );
}

export default DeliveryAddress;
