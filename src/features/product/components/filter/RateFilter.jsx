import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core';
import rateApi from '../../../../api/rateApi';
RateFilter.propTypes = {
  onChange: PropTypes.func,
};
const useStyle = makeStyles((theme) => ({
  rate: {
    '&.MuiRating-iconEmpty': {
      color: '#fff',
    },
  },
}));
function RateFilter({ onChange }) {
  const classes = useStyle();
  const [rateList, setRateList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const list = await rateApi.getAll();
        setRateList(
          list.map((x) => ({
            id: x.id,
            value: x.value,
          })),
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const handleRateClick = (rate) => {
    if (onChange) {
      onChange(rate.id);
    }
  };

  return (
    <div className="rate__filter">
      <h3 className="rate__label">Đánh giá</h3>
      <ul className="rate__filter-list">
        {rateList.map((rate) => (
          <li key={rate.id} className="rate__filter-item" onClick={() => handleRateClick(rate)}>
            <Rating name="read-only" value={rate.value} readOnly className={classes.rate} />
            <span className="rate-label">trở lên</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RateFilter;
