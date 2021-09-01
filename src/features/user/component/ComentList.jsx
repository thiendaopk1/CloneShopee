import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button, Link, makeStyles } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { useForm } from 'react-hook-form';
import TextArea from '../../../components/form-control/TextArea';
import Comment from './Comment';
import purchaseApi from '../../../api/purchaseApi';
import { useSnackbar } from 'notistack';
ComentList.propTypes = {
  closeDialog: PropTypes.func,
  cartItems: PropTypes.array,
  ido: PropTypes.number,
  onSubmitComment: PropTypes.func,
};

ComentList.defaultProps = {
  cartItems: [],
};
const useStyle = makeStyles((theme) => ({
  btn1: {
    '&.MuiButton-root': {
      padding: '10px 0',
      boxSizing: 'border-box',
      width: '140px',
      color: '#555',
      marginRight: '6px',
      background: 'none',
      border: 'none',
      transition: 'background-color cubic-bezier(0.4, 0, 0.6, 1) .1s',
    },

    '&.MuiButton-text': {
      fontSize: '14px',
      textTransform: 'uppercase',
      fontWeight: '400',
    },
  },

  btn2: {
    '&.MuiButton-root': {
      borderRadius: '2px',
      boxSizing: 'border-box',
      width: '140px',
      color: '#fff',
      minWidth: '60px',
      maxWidth: '190px',
      background: '#ee4d2d',
      border: 'none',
      transition: 'background-color cubic-bezier(0.4, 0, 0.6, 1) .1s',
      boxShadow: '0 1px 1px 0 rgb(0 0 0 / 9%)',
    },
    '&.MuiButton-text': {
      fontSize: '14px',
      textTransform: 'capitalize',
      fontWeight: '400',
    },
  },
}));
function ComentList({ closeDialog = null, cartItems, ido, onSubmitComment = null }) {
  const classes = useStyle();
  const { enqueueSnackbar } = useSnackbar();
  // form

  const form = useForm({});
  const handleClose = () => {
    if (closeDialog) closeDialog();
  };
  const handleSubmit = async (values) => {
    let rates = values.rate;
    let contents = values.content;
    let data = [];
    let data1 = {
      rate: '',
      content: '',
      idp: 1,
      idc: 1,
    };
    for (let i = 0; i < rates.length; i++) {
      data1 = {
        rate: parseInt(rates[i]),
        content: contents[i],
        idp: cartItems[i].idp,
        idc: cartItems[i].idc,
        ido: ido,
      };
      data.push(data1);
    }

    const list = await purchaseApi.comment(data);
    enqueueSnackbar('bạn đã comment đơn hàng này', { variant: 'success' });

    if (onSubmitComment) {
      onSubmitComment(list);
    }
    if (closeDialog) {
      closeDialog();
    }
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <div className="commentForm">
        <div className="comment__header">
          <div className="comment__header-title">Đánh giá sản phẩm</div>
        </div>
        <div className="comment__main">
          <div className="comment__main-list">
            {/* xét  id product id type */}
            {cartItems.map((cartItem, index) => (
              <Comment form={form} index={index} cartItem={cartItem} />
            ))}
          </div>
        </div>
        <div className="comment__footer">
          <Button className={classes.btn1} onClick={handleClose}>
            Trở lại
          </Button>
          <Button className={classes.btn2} type="submit">
            Hoàn thành
          </Button>
        </div>
      </div>
    </form>
  );
}

export default ComentList;
