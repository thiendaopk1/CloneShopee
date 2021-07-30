import React from 'react';
import PropTypes from 'prop-types';
import ListIcon from '@material-ui/icons/List';
import { makeStyles } from '@material-ui/core';
ProductFilter.propTypes = {};
const useStyle = makeStyles((theme) => ({
  icon: {
    fontSize: '18px',
    marginRight: '8px',
  },
}));
function ProductFilter(props) {
  const classes = useStyle();
  return (
    <nav className="category">
      <h3 className="category__heading" style={{ display: 'flex' }}>
        <ListIcon className={classes.icon} />
        Danh mục
      </h3>
      <ul className="category-list">
        <li className="category-item category-item--active">Trang điểm mặt</li>
        <li className="category-item">Trang điểm mặt</li>
        <li className="category-item">Trang điểm mặt</li>
      </ul>
    </nav>
  );
}

export default ProductFilter;
