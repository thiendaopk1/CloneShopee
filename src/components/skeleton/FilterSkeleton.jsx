import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, makeStyles } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

FilterSkeleton.propTypes = {
  length: PropTypes.number,
};
FilterSkeleton.defaultProps = {
  length: 6,
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
      <Grid container>
        {Array.from(new Array(length)).map((x, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Box>
              <Skeleton
                className={classes.top}
                variant="rect"
                width="240px"
                height={230}
              />
              <Skeleton variant="rect" width="240px" height={100} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default FilterSkeleton;
