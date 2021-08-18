import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import DeliveryAddress from './Address/DeliveryAddress';
import DeliveryAddressList from './Address/DeliveryAddressList';
CheckOutAddress.propTypes = {
  addressList: PropTypes.array,
  onSubmit: PropTypes.func,
};

CheckOutAddress.defaultProps = {
  addressList: [],
};

function CheckOutAddress({ addressList, onSubmit = null }) {
  const [view, setView] = useState(true);

  const handleChangeView = (state) => {
    setView(state);
  };
  // conver array to object
  useEffect(() => {}, []);
  const arrayChecked = addressList.filter((address) => address.status === true);
  var arrayToString = JSON.stringify(Object.assign({}, arrayChecked[0]));
  var res = JSON.parse(arrayToString);
  console.log('res', res);
  // end conver array to object

  const [addressChecked, setAddressChecked] = useState(res);

  const handleChangeAddress = () => {
    setAddressChecked();
  };

  const handleSubmitNewAddress = async () => {};

  return (
    <div className="checkout__address">
      <div className="checkout__address--border-top"></div>
      <div className="checkout__address-content">
        {view === true && <DeliveryAddress onClick={handleChangeView} address={addressChecked} />}
        {view === false && (
          <DeliveryAddressList
            onClick={handleChangeView}
            onSubmit={handleSubmitNewAddress}
            addressList={addressList}
            addressChecked={addressChecked}
            onChange={handleChangeAddress}
          />
        )}
      </div>
    </div>
  );
}

export default CheckOutAddress;
