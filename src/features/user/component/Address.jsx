import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  IconButton,
  makeStyles,
  useMediaQuery,
  useTheme,
  DialogContent,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import AddressList from './AddressList';
import { useEffect } from 'react';
import { useState } from 'react';
import addressApi from '../../../api/addressApi';
import NewAddress from './NewAddress';
Address.propTypes = {};
const useStyles = makeStyles((theme) => ({
  btnNewAddress: {
    '&.MuiButton-root': {
      height: '40px',
      padding: '0 20px',
      background: '#ee4d2d',
      border: 'none',
      borderRadius: '2px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
    },

    '&.MuiButton-text': {
      fontSize: '14px',
      textTransform: 'capitalize',
    },
  },

  btnIcon: {
    fontSize: '25px',
    fontWeight: '600',
    marginRight: '5px',
    color: '#fff',
  },
}));
function Address(props) {
  const classes = useStyles();
  // dialog
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // end dialog
  const [addressList, setAddressList] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const list = await addressApi.getAll();
        setAddressList(list);
      } catch (error) {
        console.log('error', error);
      }
    })();
  }, []);
  // handleNewAddress
  const handleNewAddress = async (data) => {
    setAddressList(data);
  };
  // handleEditAddress
  const handleEditAddress = async (data) => {
    setAddressList(data);
  };

  // handleAddressDefault
  const handleAddressDefault = async (data) => {
    setAddressList(data);
  };

  const handleDeleteAddress = async () => {};
  return (
    <div className="user__address">
      <div className="user__address-header">
        <div className="user__address-header-label">
          <div>Địa chỉ của tôi</div>
        </div>
        <div className="user__address-header-btnNewAddress">
          <Button className={classes.btnNewAddress} onClick={handleClickOpen}>
            <AddIcon className={classes.btnIcon} />
            Thêm địa chỉ mới
          </Button>
        </div>
      </div>
      <div>
        <AddressList
          addressList={addressList}
          onSubmitEdit={handleEditAddress}
          onSubmitDefault={handleAddressDefault}
          onSubmitDelete={handleDeleteAddress}
        />
      </div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        disableBackdropClick
        disableEscapeKeyDown
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <NewAddress closeDialog={handleClose} onSubmitNew={handleNewAddress} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Address;
