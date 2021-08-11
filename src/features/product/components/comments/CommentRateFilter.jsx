import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import commentApi from '../../../../api/commentApi';
import classNames from 'classnames';
CommentRateFilter.propTypes = {
  rateList: PropTypes.array,
  onChange: PropTypes.func,
  active: PropTypes.number,
};

function CommentRateFilter({ rateList, onChange = null, active }) {
  const handleRateClick = (rate) => {
    if (onChange) {
      onChange(rate.id);
    }
  };
  return (
    <ul className="product__rating-filter-list">
      {/* product__rating-filter-item--active  "product__rating-filter-item "*/}
      {rateList.map((rate) => (
        <li
          key={rate.id}
          className={classNames('product__rating-filter-item', {
            'product__rating-filter-item--active': rate.id === active,
          })}
          onClick={() => handleRateClick(rate)}
        >
          {rate.value} ({rate.sumCmt})
        </li>
      ))}
    </ul>
  );
}

export default CommentRateFilter;
