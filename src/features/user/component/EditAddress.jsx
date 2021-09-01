import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setStateAddress } from './AddressSlice';
import EditAddressForm from './EditAddressForm';
import { useSnackbar } from 'notistack';
EditAddress.propTypes = {
  closeDialog: PropTypes.func,
  address: PropTypes.object,
  onSubmitEdit: PropTypes.func,
};

function EditAddress({ closeDialog = null, address = {}, onSubmitEdit = null }) {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const handleEditAddress = async (data) => {
    const action = setStateAddress({
      id: address.id,
      status: data.status,
      name: data.name,
      phone: data.phone,
      address: data.address,
    });
    dispatch(action);
    enqueueSnackbar('bạn đã chỉnh sửa địa chỉ', { variant: 'success' });

    if (closeDialog) {
      closeDialog();
    }
  };
  return (
    <div>
      <EditAddressForm onSubmitEdit={handleEditAddress} closeDialog={closeDialog} address={address} />
    </div>
  );
}

export default EditAddress;
