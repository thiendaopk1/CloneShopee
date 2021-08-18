import React from 'react';
import PropTypes from 'prop-types';
import AddressDetail from './AddressDetail';
import addressApi from '../../../api/addressApi';

AddressList.propTypes = {
  addressList: PropTypes.array,
  onSubmitEdit: PropTypes.func,
  onSubmitDefault: PropTypes.func,
  onSubmitDelete: PropTypes.func,
};

AddressList.defaultProps = {
  addressList: [],
};

function AddressList({ addressList, onSubmitEdit = null, onSubmitDefault = null, onSubmitDelete = null }) {
  const handleEditAddress = async (data) => {
    if (onSubmitEdit) onSubmitEdit(data);
  };

  const handleAddressDefault = async (data) => {
    console.log('data', data);
    try {
      const res = await addressApi.editStatus(data);
      console.log('res', res);
      onSubmitDefault(res);
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleDeleteAddress = async (id) => {
    console.log(id);
    try {
      const res = await addressApi.delete(id);
      onSubmitDefault(res);
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <div>
      {addressList.map((address) => (
        <div key={address.id}>
          {address.id && (
            <AddressDetail
              address={address}
              onSubmitEdit={handleEditAddress}
              onSubmitDefault={handleAddressDefault}
              onSubmitDelete={handleDeleteAddress}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default AddressList;
