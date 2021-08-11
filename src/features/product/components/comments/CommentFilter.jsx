import React from 'react';
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';
import commentApi from '../../../../api/commentApi';
import CommentRateFilter from './CommentRateFilter';
CommentFilter.propTypes = {
  id: PropTypes.number,
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};
const useStyle = makeStyles((theme) => ({
  rate: {
    color: '#ee4d2d',
    stroke: '#ee4d2d',
    fontSize: '20px',
  },
}));
function CommentFilter({ id, filters, onChange = null }) {
  const classes = useStyle();
  const [rateList, setRateList] = useState([]);
  const [active, setactive] = useState(filters.rate);

  useEffect(() => {
    (async () => {
      try {
        const list = await commentApi.getAllRate(id);

        setRateList(
          list.map((x) => ({
            id: x.id,
            value: x.value,
            status: x.status,
            sumCmt: x.sumCmt,
          })),
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleRateChange = (newRateId) => {
    if (!onChange) return;

    const newFilters = {
      ...filters,
      rate: newRateId,
    };

    onChange(newFilters);
    setactive(newRateId);
  };
  return (
    <div className="product__rating-overview">
      <div className="product__rating-briefing">
        <div className="product__rating-briefing-wapper">
          <span className="product__rating-briefing-score">4.9</span>
          <span>trên 5</span>
        </div>
        <div className="product__rating-briefing-start">
          <Rating name="half-rating-read" value={4.9} precision={0.1} readOnly className={classes.rate} />
        </div>
      </div>
      <div className="product__rating-filter">
        <CommentRateFilter id={id} onChange={handleRateChange} rateList={rateList} active={active} />
      </div>
    </div>
  );
}

export default CommentFilter;
