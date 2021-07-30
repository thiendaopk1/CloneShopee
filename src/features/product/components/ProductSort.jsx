import React from 'react';
import PropTypes from 'prop-types';
import { Button, makeStyles, ButtonBase } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import { useState } from 'react';
ProductSort.propTypes = {};
const useStyle = makeStyles((theme) => ({
  btn: {
    padding: '1px 6px',
    width: '37px',
    height: '34px',
    boxShadow: '0 1px 1px 0 rgb(0 0 0 / 5%)',
    borderRadius: '2px',
    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: '#fff',
    },
  },

  btn_1: {
    padding: '1px 6px',
    width: '37px',
    height: '34px',
    marginLeft: '20px',
    borderTopRightRadius: '2px',
    borderBottomRightRadius: '2px',
    borderRight: '1px solid #f2f2f2',
    cursor: 'default',
    backgroundColor: '#f9f9f9',
    '&:hover': {
      backgroundColor: '#f9f9f9',
    },
  },
}));

function ProductSort(props) {
  const classes = useStyle();
  return (
    <div className="product-sort">
      <span className="product-sort-label">Sắp xếp theo</span>
      <div className="product-sort__options">
        <div className="product-sort__options-option product-sort__options-option--selected">
          Phổ biến
        </div>
        <div className="product-sort__options-option">Mới nhất</div>
        <div className="product-sort__options-option">Bán chạy</div>
        <div className="select-input">
          <span className="select-input__label">Giá</span>
          <span className="select-input__icon">
            <ExpandMoreIcon />
          </span>
          {/* list sort */}
          <ul className="select-input__list">
            <li className="select-input__item">Giá: Thấp đến cao</li>
            <li className="select-input__item">Giá: Cao đến thấp</li>
          </ul>
        </div>
      </div>
      {/* top pagination */}
      <div className="product-sort__top-pagination">
        <span className="product-sort__num">
          <span className="product-sort__top-pagination--curent-page">1</span>/
          <span className="product-sort__top-pagination--total-page">3</span>
        </span>
        <div className="product-sort__top-pagination-control">
          <ButtonBase className={classes.btn_1} disabled>
            <NavigateBeforeIcon style={{ color: '#ccc' }} />
          </ButtonBase>

          <ButtonBase className={classes.btn}>
            <NavigateNextIcon />
          </ButtonBase>
        </div>
      </div>
    </div>
  );
}

export default ProductSort;
