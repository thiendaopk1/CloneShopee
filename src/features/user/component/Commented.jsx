import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Link, makeStyles } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

Commented.propTypes = {
  closeDialog: PropTypes.func,
  cartItems: PropTypes.array,
};
const useStyle = makeStyles((theme) => ({
  link: {
    display: 'flex',
    padding: '5px 0px',
    '&.MuiLink-root': {
      color: 'rgba(0,0,0,.8)',
    },

    '&.MuiTypography-root': {
      fontSize: '14px',
    },

    '&:hover': {
      cursor: 'pointer',
    },
  },

  rated: {
    stroke: '#b3a98c',
    color: '#febd1a',
    '&.MuiRating-sizeLarge': {
      fontSize: '3.875rem',
    },

    '&.MuiRating-root': {
      '&>label': {
        '&>span': {
          '&.MuiRating-iconEmpty': {
            color: '#fff',
          },
        },
      },
    },

    '&.MuiRating-iconEmpty': {
      color: '#fff',
    },
  },

  btn1: {
    '&.MuiButton-root': {
      padding: '10px 0',
      boxSizing: 'border-box',
      width: '140px',
      color: '#555',
      marginRight: '6px',
      background: 'none',
      border: '1px solid rgba(0,0,0,0.09)',
      transition: 'background-color cubic-bezier(0.4, 0, 0.6, 1) .1s',
      borderRadius: '2px',
    },

    '&.MuiButton-text': {
      fontSize: '14px',
      textTransform: 'uppercase',
      fontWeight: '400',
    },
  },
}));
function Commented({ closeDialog = null, cartItems = [] }) {
  console.log('cartItems', cartItems);
  const classes = useStyle();
  const handleClose = () => {
    if (closeDialog) closeDialog();
  };
  return (
    <div className="commentForm">
      <div className="comment__header">
        <div className="comment__header-title">Đánh giá sản phẩm</div>
      </div>
      <div className="comment__main">
        <div className="comment__main-list">
          {cartItems.map((cartItem) => (
            <div className="comment__main-item">
              <Link underline="none" className={classes.link}>
                <div className="comment__main-product-imgs">
                  <img
                    src={cartItem.newProduct.images[0].path}
                    className="comment__main-product-img"
                    alt=""
                  />
                </div>
                <div className="comment__main-product-info">
                  <div className="comment__main-product-name">{cartItem.newProduct.name}</div>
                  <div className="comment__main-product-type">
                    Phân loại hàng: {cartItem.newProduct.colors.colorName}
                  </div>
                </div>
              </Link>
              {cartItem.newProduct.comment === null && <></>}
              {cartItem.newProduct.comment.length > 0 && (
                <div className="comment__main-commented">
                  <div className="comment__main-commented-left">
                    <div className="comment__main-commented-avatar">
                      <div className="comment__main-commented-placeholder">
                        <svg
                          enable-background="new 0 0 15 15"
                          viewBox="0 0 15 15"
                          x="0"
                          y="0"
                          class="shopee-svg-icon icon-headshot"
                        >
                          <g>
                            <circle cx="7.5" cy="4.5" fill="none" r="3.8" stroke-miterlimit="10"></circle>
                            <path
                              d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6"
                              fill="none"
                              stroke-linecap="round"
                              stroke-miterlimit="10"
                            ></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="comment__main-commented-right">
                    <div className="comment__main-commented-userName">
                      {cartItem.newProduct.comment[0].userName}
                    </div>
                    <Rating
                      name="half-rating-read"
                      value={cartItem.newProduct.comment[0].rate}
                      precision={0.1}
                      readOnly
                      className={classes.rated}
                    />
                    <div className="comment__main-commented-content">
                      <p>{cartItem.newProduct.comment[0].content}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="comment__footer">
        <Button className={classes.btn1} onClick={handleClose}>
          OK
        </Button>
      </div>
    </div>
  );
}

export default Commented;
