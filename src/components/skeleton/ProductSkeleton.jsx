import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import '../../assets/css/grid.css';

ProductSkeleton.propTypes = {
  length: PropTypes.number,
};
ProductSkeleton.defaultProps = {
  length: 15,
};

function ProductSkeleton({ length }) {
  return (
    <Box>
      <div className="row" style={{ marginTop: '25px' }}>
        {Array.from(new Array(length)).map((x, index) => (
          <div key={index} className="col l-2-4 m-4 c-6" style={{ marginBottom: '10px' }}>
            <div>
              <Skeleton variant="rect" width="100%" height={250} />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton width="50%" style={{ display: 'flex', float: 'right' }} />
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
}

export default ProductSkeleton;
