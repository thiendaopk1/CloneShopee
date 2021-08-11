import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button, makeStyles, Input } from '@material-ui/core';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';

PriceFilter.propTypes = {
  onChange: PropTypes.func,
};
const useStyle = makeStyles((theme) => ({
  input: {
    border: '1px solid rgba(0,0,0,.26)',
    flex: '1 0 2.5rem',
    width: 'auto',
    paddingLeft: '5px',
    fontSize: '12px',
  },
  btn: {
    marginTop: '20px',
    '&.MuiButton-root': {
      borderRadius: '2px',
      backgroundColor: 'rgb(238, 77, 45)',
      color: '#fff',
      fontSize: '12px',
    },
  },
}));
function PriceFilter({ onChange = null }) {
  const classes = useStyle();
  const [values, setValues] = useState({
    priceMin: 0,
    priceMax: 0,
  });
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    if (onChange) onChange(values);
  };

  const history = useHistory();
  const match = useRouteMatch();
  const location = useLocation();

  const handleDeleteAll = async () => {
    setValues({ priceMin: 0, priceMax: 0 });
    if (onChange) await onChange({ priceMin: undefined, priceMax: undefined });
    history.push('/');
  };

  return (
    <div className="price__filter">
      <h3 className="price__label">KHOẢNG GIÁ</h3>
      <div className="price__filter-list">
        <Input
          name="priceMin"
          value={values.min}
          onChange={handlePriceChange}
          placeholder="₫ TỪ"
          className={classes.input}
          disableUnderline
        />
        <span style={{ margin: '0px 9px' }}>-</span>
        <Input
          name="priceMax"
          value={values.max}
          onChange={handlePriceChange}
          placeholder="₫ ĐẾN"
          className={classes.input}
          disableUnderline
        />
      </div>
      <Button onClick={handleSubmit} className={classes.btn} fullWidth>
        Áp dụng
      </Button>
      <Button className={classes.btn} fullWidth onClick={handleDeleteAll}>
        Xóa tất cả
      </Button>
    </div>
  );
}

export default PriceFilter;
