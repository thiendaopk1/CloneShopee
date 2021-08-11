import React from 'react';
import PropTypes from 'prop-types';

ProductType.propTypes = {
  color: PropTypes.object,
};

function ProductType({ color }) {
  console.log(color);
  const { sizes } = color;
  return <div></div>;
}

export default ProductType;
