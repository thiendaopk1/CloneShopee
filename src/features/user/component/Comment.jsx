import { Link, makeStyles } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import TextArea from '../../../components/form-control/TextArea';
import PropTypes from 'prop-types';
Comment.propTypes = {
  form: PropTypes.object,
  cartItem: PropTypes.object,
  index: PropTypes.number,
};

const useStyle = makeStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
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

  rate: {
    stroke: '#ffca26',
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
function Comment({ form = {}, cartItem = {}, index }) {
  const { newProduct } = cartItem;
  const classes = useStyle();
  const [valueRate, setValueRate] = useState(0);
  const handleChangeRate = (newValues) => {
    setValueRate(newValues);
  };
  return (
    <div>
      <div className="comment__main-item">
        <Link underline="none" className={classes.link}>
          <div className="comment__main-product-imgs">
            <img src={newProduct.images[0].path} className="comment__main-product-img" alt="" />
          </div>
          <div className="comment__main-product-info">
            <div className="comment__main-product-name">{newProduct.name}</div>
            <div className="comment__main-product-type">Phân loại hàng: {newProduct.colors.colorName}</div>
          </div>
        </Link>

        <div className="comment__main-rating">
          <Controller
            name={`rate[${index}]`}
            control={form.control}
            defaultValue={valueRate}
            as={
              <Rating
                key={`rate[${index}]`}
                onChange={(event, newValue) => {
                  console.log('newValue', newValue);
                  handleChangeRate(newValue);
                }}
                className={classes.rate}
                size="large"
              />
            }
          />
        </div>
        {form.watch(`rate[${index}]`) >= 1 && (
          <div className="comment__main-comment">
            <TextArea
              name={`content[${index}]`}
              form={form}
              placeholder="Hãy cho chúng tôi biết đánh giá của bạn về sản phẩm này"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Comment;
