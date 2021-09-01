import React from 'react';
import PropTypes from 'prop-types';
import NewAddressCheckOutForm from './NewAddressCheckOutForm';
import addressApi from '../../../api/addressApi';
import { addAddress } from '../../user/component/AddressSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
NewAddressCheckOut.propTypes = {
  closeDialog: PropTypes.func,
  onSubmitNew: PropTypes.func,
};

function NewAddressCheckOut({ closeDialog = null, onSubmitNew = null }) {
  const { enqueueSnackbar } = useSnackbar();
  let listAddress = JSON.parse(localStorage.getItem('address'));
  const loggedInUser = useSelector((state) => state.user.current);
  const dispatch = useDispatch();
  const handleNewAddress = async (data) => {
    if (listAddress === null) {
      const action = addAddress({
        name: data.name,
        address: data.address,
        phone: data.phone,
        status: data.status,
        id: 1,
        user: loggedInUser.id,
      });
      dispatch(action);
      enqueueSnackbar('bạn đã thêm địa chỉ mới', { variant: 'success' });
      if (closeDialog) {
        closeDialog();
      }
    } else if (listAddress !== null) {
      const action = addAddress({
        name: data.name,
        address: data.address,
        phone: data.phone,
        status: data.status,
        id: listAddress.pop().id + 1,
      });
      dispatch(action);
      enqueueSnackbar('bạn đã thêm địa chỉ mới', { variant: 'success' });
      if (closeDialog) {
        closeDialog();
      }
    }
  };

  return (
    <div>
      <NewAddressCheckOutForm onSubmitNew={handleNewAddress} closeDialog={closeDialog} />
    </div>
  );
}

export default NewAddressCheckOut;
