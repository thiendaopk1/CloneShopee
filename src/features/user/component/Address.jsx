import { Button, Dialog, DialogContent, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AddressList from './AddressList';
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

  const addressList = useSelector((state) => {
    return state.address.addressItems;
  });
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.id;
  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }
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
        <AddressList addressList={addressList} />
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
          <NewAddress closeDialog={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Address;
