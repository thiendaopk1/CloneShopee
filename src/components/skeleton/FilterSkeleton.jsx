import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

FilterSkeleton.propTypes = {
  length: PropTypes.number,
};
FilterSkeleton.defaultProps = {
  length: 4,
};
const useStyles = makeStyles((theme) => ({
  root: {},

  top: {
    marginBottom: '10px',
  },

  bottom: {},
}));

function FilterSkeleton({ length }) {
  const classes = useStyles();
  return (
    <Box>
      {Array.from(new Array(length)).map((x, index) => (
        <Box padding={1}>
          <Typography variant="body1">
            <Skeleton width="100%" />
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default FilterSkeleton;
