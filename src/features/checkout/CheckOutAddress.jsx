import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import DeliveryAddress from './Address/DeliveryAddress';
import DeliveryAddressList from './Address/DeliveryAddressList';
import DeliveryAddressMobileList from './Address/DeliveryAddressMobileList';
CheckOutAddress.propTypes = {
  addressList: PropTypes.array,
  addressChecked: PropTypes.object,
  onChange: PropTypes.object,
};

CheckOutAddress.defaultProps = {
  addressList: [],
};

function CheckOutAddress({ onChange = null, addressList, addressChecked = {} }) {
  const [view, setView] = useState(true);
  console.log('addressChecked', addressChecked);
  const handleChangeView = (state) => {
    setView(state);
  };

  const handleChangeAddress = async (value) => {
    console.log(value);
    if (onChange) {
      await onChange(value);
    }
  };

  return (
    <div>
      <div className="checkout__address">
        <div className="checkout__address--border-top hide-on-mobile"></div>
        <div className="checkout__address-content">
          {view === true && <DeliveryAddress onClick={handleChangeView} address={addressChecked} />}
          {view === false && (
            <>
              <DeliveryAddressList
                onClickChange={handleChangeView}
                addressList={addressList}
                addressChecked={addressChecked}
                onChange={handleChangeAddress}
              />
              <DeliveryAddressMobileList
                onClickChange={handleChangeView}
                addressList={addressList}
                addressChecked={addressChecked}
                onChange={handleChangeAddress}
              />
            </>
          )}
        </div>
        <div className="checkout__address--border-bottom"></div>
      </div>
    </div>
  );
}

export default CheckOutAddress;
