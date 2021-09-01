import React from 'react';
import PropTypes from 'prop-types';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@material-ui/icons/ArrowDropUpOutlined';
import { createTheme, makeStyles, Tab, Tabs, ThemeProvider } from '@material-ui/core';
ProductSortTablet.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onChangePagi: PropTypes.func,
};
const useStyle = makeStyles((theme) => ({
  icon: {
    marginLeft: '2px',
    fontSize: '15px',
  },

  tabTab3: {
    padding: '0px',
    '&.MuiTab-root': {
      width: '20%',
      '&.MuiTab-textColorPrimary': {
        '&.Mui-selected': {
          color: '#ee4d2d ',
          backgroundColor: '#fff ',
        },
      },
    },
    '&>span': {
      '&.MuiTab-wrapper': {
        paddingTop: '6px',
        paddingBottom: '6px',
        borderRight: '1px solid #eae9ea',
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
  },

  tabTab31: {
    padding: '0px',
    '&.MuiTab-root': {
      width: '20%',
      '&.MuiTab-textColorPrimary': {
        '&.Mui-selected': {
          color: '#ee4d2d ',
          backgroundColor: '#fff ',
        },
      },
    },
    '&>.Mui-selected': {
      color: '#ee4d2d',
    },
    '&>span': {
      '&.MuiTab-wrapper': {
        paddingTop: '6px',
        paddingBottom: '6px',
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
  },

  [theme.breakpoints.up('sm')]: {
    tabTab3: {
      '&.MuiTab-root': {
        minWidth: '110px',
        borderRadius: '2px',
      },
    },
    tabTab31: {
      '&.MuiTab-root': {
        minWidth: '110px',
        borderRadius: '2px',
      },
    },
  },

  tabsTabs3: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '48px',
  },
}));
const theme1 = createTheme({
  overrides: {
    MuiTab: {
      root: {
        backgroundColor: 'white',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      textColorPrimary: {
        color: 'black',
        '&.Mui-selected': {},
      },
    },
  },
});
function ProductSortTablet({ currentSort, onChange, onChangePagi }) {
  const classes = useStyle();
  const handleSortChange = (event, newValue) => {
    if (onChange) onChange(newValue);
    console.log(newValue);
  };
  return (
    <div className="product__sort-tablet-mobile">
      <ThemeProvider theme={theme1}>
        <Tabs
          value={currentSort}
          variant="standard"
          indicatorColor="none"
          textColor="primary"
          onChange={handleSortChange}
          aria-label="disabled tabs example"
          className={classes.tabsTabs3}
        >
          <Tab label="Phổ biến" value="pop" className={classes.tabTab3} />
          <Tab label="Bán chạy" value="sales" className={classes.tabTab3} />
          <Tab label="Mới nhất" value="ctimes" className={classes.tabTab3} />
          <Tab label="Giá" value="asc" className={classes.tabTab3} icon={<ArrowDropUpOutlinedIcon />} />
          <Tab label="Giá" value="desc" className={classes.tabTab31} icon={<ArrowDropDownOutlinedIcon />} />
        </Tabs>
      </ThemeProvider>
    </div>
  );
}

export default ProductSortTablet;
