import React from 'react';
import PropTypes from 'prop-types';
import EditAddressForm from './EditAddressForm';
import addressApi from '../../../api/addressApi';

EditAddress.propTypes = {
  closeDialog: PropTypes.func,
  address: PropTypes.object,
  onSubmitEdit: PropTypes.func,
};

function EditAddress({ closeDialog = null, address = {}, onSubmitEdit = null }) {
  const handleEditAddress = async (data) => {
    console.log('data4', data);
    try {
      data.id = address.id;
      const res = await addressApi.editAddress(data);
      onSubmitEdit(res);
      if (closeDialog) {
        closeDialog();
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <div>
      <EditAddressForm onSubmitEdit={handleEditAddress} closeDialog={closeDialog} address={address} />
    </div>
  );
}

export default EditAddress;
