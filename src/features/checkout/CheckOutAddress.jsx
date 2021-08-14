import React from 'react';
import PropTypes from 'prop-types';
import RoomIcon from '@material-ui/icons/Room';
CheckOutAddress.propTypes = {};

function CheckOutAddress(props) {
  return (
    <div className="checkout__address">
      <div className="checkout__address--border-top"></div>
      <div className="checkout__address-content">
        <div className="checkout__address-label">
          <RoomIcon />
          Địa Chỉ Nhận Hàng
        </div>
        <div className="checkout__address-info">
          <div className="checkout__address-info-user">Đào Trí Thiện (+84) 858849533</div>
          <div className="checkout__address-info-address">
            Đại học nông lâm thành phố hồ chí minh, khu phố 6, phường linh trung, quận thủ đức, thành phố hồ
            chí minh, Phường Linh Trung, Thành Phố Thủ Đức, TP. Hồ Chí Minh
          </div>
          <div className="checkout__address-info-default">Mặc định</div>
        </div>
      </div>
    </div>
  );
}

export default CheckOutAddress;
