import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import {
  Button,
  Dialog,
  IconButton,
  makeStyles,
  useMediaQuery,
  useTheme,
  DialogContent,
} from '@material-ui/core';
import CommentList from './ComentList';
import Commented from './Commented';
import classNames from 'classnames';
import purchaseApi from '../../../api/purchaseApi';
import { addToCart } from '../../product/components/shoppingCart/CartSlice';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { useSnackbar } from 'notistack';
PurchaseItem.propTypes = {
  purchase: PropTypes.object,
  onSubmitComment: PropTypes.func,
  onClick: PropTypes.func,
};

const useStyle = makeStyles((theme) => ({
  icon: {
    fontSize: '20px',
    marginRight: '10px',
  },

  unVisible: {
    display: 'none',
  },

  btn1: {
    margin: '0 0 0 10px',
    '&.MuiButton-root': {
      border: '1px solid transparent',
      minWidth: '150px',
      minHeight: '40px',
      padding: '8px 20px',
      textOverflow: 'ellipsis',
      borderRadius: '2px',
      background: '#ee4d2d',
      color: '#fff',
      '&:hover': {
        border: '1px solid transparent',
        background: '#cd3011',
      },
    },

    '&.MuiButton-label': {
      textTransfrom: 'capitalize',
    },

    '&.MuiButton-text': {
      fontSize: '13px',
    },
  },

  btn2: {
    margin: '0 0 0 10px',
    '&.MuiButton-root': {
      border: '1px solid rgba(0,0,0,.09)',
      minWidth: '150px',
      minHeight: '40px',
      padding: '8px 20px',
      textOverflow: 'ellipsis',
      borderRadius: '2px',
      background: 'white',
      color: '#555',
      '&:hover': {
        border: '1px solid rgba(0,0,0,.09)',
        background: '#f7f4f4',
      },
    },

    '&.MuiButton-text': {
      fontSize: '13px',
    },

    '&.MuiButton-label': {
      textTransfrom: 'capitalize',
    },
  },

  dialog: {
    '&.MuiDialogContent-root': {
      minWidth: '600px',
    },
  },
}));
function PurchaseItem({ purchase = {}, onSubmitComment = null, onClick = null }) {
  const { cartItems, totalBill, status, id } = purchase;
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  useLocation();
  useRouteMatch();
  const history = useHistory();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [openComment, setOpenComment] = useState(false);

  const handleClickOpenComment = () => {
    setOpenComment(true);
  };

  const handleCloseComment = () => {
    setOpenComment(false);
  };
  const [openCommented, setOpenCommented] = useState(false);

  const handleClickOpenCommented = () => {
    setOpenCommented(true);
  };

  const handleCloseCommented = () => {
    setOpenCommented(false);
  };

  const classes = useStyle();

  const handleComment = async (data) => {
    if (onSubmitComment) {
      await onSubmitComment(data);
    }
  };

  const handleCancel = () => {
    (async () => {
      try {
        const list = await purchaseApi.cancelOrder(id);
        enqueueSnackbar('bạn đã hủy đơn hàng', { variant: 'error' });
        if (onClick) {
          onClick(list);
        }
      } catch (error) {
        console.log('error', error);
      }
    })();
  };

  const handleBuyAgaint = () => {
    cartItems.forEach((item) => {
      const action = addToCart({
        idp: item.idp,
        idc: item.idc,
        newProduct: item.newProduct,
        quantity: item.quantity,
      });
      dispatch(action);
    });
    enqueueSnackbar('bạn đã thêm sản phẩm vào giỏ hàng', { variant: 'success' });
    history.push('/cart');
  };
  return (
    <div className="purchase__item">
      <div>
        <div className="purchase__item-content">
          <div className="purchase__item-header">
            {status.name === 'Đã giao' && (
              <div className="purchase__item-header-status1">
                <LocalShippingOutlinedIcon className={classes.icon} />
                Giao hàng thành công
              </div>
            )}
            <div className="purcahse__item-header-status2">{status.name}</div>
          </div>
          <div className="purchase__item-border-header"></div>
          {/* list item */}
          <div className="purchase__item-order-list">
            <div className="purchase__item-order-item">
              <div>
                {/* item */}
                {cartItems.map((cartItem) => (
                  <span className="order-item">
                    <div className="order-item-detail">
                      <img src={cartItem.newProduct.images[0].path} className="order-item-img" alt="" />
                      <div className="order-item-info">
                        <div className="oroder-item-name">{cartItem.newProduct.name}</div>
                        <div>
                          <div className="order-item-type">
                            Phân loại hàng: {cartItem.newProduct.colors.colorName}
                          </div>
                          <div className="order-item-quantity">x{cartItem.quantity}</div>
                        </div>
                      </div>
                    </div>
                    <div className="order-item-price">
                      <span className="order-item-prices">
                        {new Intl.NumberFormat('vi-VN', {
                          style: 'currency',
                          currency: 'VND',
                        }).format(cartItem.newProduct.salePrice * cartItem.quantity)}
                      </span>
                    </div>
                  </span>
                ))}
                {/* end item */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="purchase__item-price">
        <div className="purchase__item-price-detail">
          <div className="purchase__item-price-label">Tổng số tiền:</div>
          <div className="purchase__item-price-total">
            {new Intl.NumberFormat('vi-VN', {
              style: 'currency',
              currency: 'VND',
            }).format(totalBill)}
          </div>
        </div>
      </div>
      <div className="purchase__item-btns">
        <div className="purchase__item-btns-flex">
          {(status.name === 'Đã giao' || status.name === 'Đã hủy') && (
            <Button className={classes.btn1} onClick={handleBuyAgaint}>
              Mua lại
            </Button>
          )}
          {status.name === 'Đã giao' && (
            <Button
              className={classNames(
                classes.btn1,
                cartItems[0].newProduct.comment.length > 0 && classes.unVisible,
              )}
              onClick={handleClickOpenComment}
            >
              Đánh giá
            </Button>
          )}
          {(status.name === 'Đang xác nhận' || status.name === 'Đã xác nhận') && (
            <Button className={classes.btn1} onClick={handleCancel}>
              Hủy đơn
            </Button>
          )}
          {cartItems[0].newProduct.comment.length > 0 && (
            <Button className={classes.btn2} onClick={handleClickOpenCommented}>
              Xem đánh giá
            </Button>
          )}
        </div>
      </div>
      {/* form comment */}
      <Dialog
        fullScreen={fullScreen}
        open={openComment}
        onClose={handleClickOpenComment}
        disableBackdropClick
        disableEscapeKeyDown
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent className={classes.dialog}>
          <CommentList
            closeDialog={handleCloseComment}
            cartItems={cartItems}
            ido={id}
            onSubmitComment={handleComment}
          />
        </DialogContent>
      </Dialog>
      {/* commented */}
      <Dialog
        fullScreen={fullScreen}
        open={openCommented}
        onClose={handleClickOpenCommented}
        disableBackdropClick
        disableEscapeKeyDown
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent className={classes.dialog}>
          <Commented closeDialog={handleCloseCommented} cartItems={cartItems} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default PurchaseItem;
