import { ButtonBase, createTheme, makeStyles, Tab, Tabs, ThemeProvider } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import PropTypes from 'prop-types';
import React from 'react';
import '../../../assets/css/reponsive.css';

ProductSort.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onChangePagi: PropTypes.func,
  pagination: PropTypes.object,
};
const useStyle = makeStyles((theme) => ({
  btn: {
    padding: '1px 6px',
    width: '37px',
    height: '34px',
    boxShadow: '0 1px 1px 0 rgb(0 0 0 / 5%)',
    borderRadius: '2px',
    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: '#fff',
    },
  },

  btn_1: {
    padding: '1px 6px',
    width: '37px',
    height: '34px',
    marginLeft: '20px',
    borderTopRightRadius: '2px',
    borderBottomRightRadius: '2px',
    borderRight: '1px solid #f2f2f2',
    cursor: 'default',
    backgroundColor: '#f9f9f9',
    '&:hover': {
      backgroundColor: '#f9f9f9',
    },
  },

  btn_3: {
    padding: '1px 6px',
    width: '37px',
    height: '34px',
    boxShadow: '0 1px 1px 0 rgb(0 0 0 / 5%)',
    borderRadius: '2px',
    marginLeft: '20px',
    borderTopRightRadius: '2px',
    borderBottomRightRadius: '2px',
    borderRight: '1px solid #f2f2f2',
    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: '#fff',
    },
  },

  tab: {
    marginRight: '10px',
    padding: '0px',
    '&.MuiTab-root': {},
  },

  [theme.breakpoints.up('sm')]: {
    tab: {
      '&.MuiTab-root': {
        minWidth: '110px',
        minHeight: '35px',
        borderRadius: '2px',
      },
    },
  },

  tabs: {
    display: 'flex',
    alignItems: 'center',
  },
}));
const theme = createTheme({
  overrides: {
    MuiTab: {
      root: {
        backgroundColor: 'white',
        color: 'black',
      },
      textColorPrimary: {
        color: 'black',
        '&.Mui-selected': {
          color: '#fff',
          backgroundColor: '#ee4d2d',
        },
      },
    },
  },
});
function ProductSort({ pagination = {}, currentSort, onChange, onChangePagi }) {
  const classes = useStyle();

  //sort
  const handleSortChange = (event, newValue) => {
    if (onChange) onChange(newValue);
  };

  //pagi
  const handlePageChange = async (e, page) => {
    if (onChangePagi) await onChangePagi(e, page);
  };
  const pageCount = Math.ceil(pagination._total / pagination._limit);
  return (
    <div className="product-sort hide-on-mobile-tablet">
      <span className="product-sort-label">Sắp xếp theo</span>
      <div className="product-sort__options">
        <ThemeProvider theme={theme}>
          <Tabs
            value={currentSort}
            variant="standard"
            indicatorColor="none"
            textColor="primary"
            onChange={handleSortChange}
            aria-label="disabled tabs example"
            className={classes.tabs}
          >
            <Tab label="Phổ biến" value="pop" className={classes.tab} />
            <Tab label="Bán chạy" value="sales" className={classes.tab} />
            <Tab label="Mới nhất" value="ctimes" className={classes.tab} />
            <Tab label="Giá: Thấp đến cao" value="asc" className={classes.tab} />
            <Tab label="Giá: Cao đến thấp" value="desc" className={classes.tab} />
          </Tabs>
        </ThemeProvider>
      </div>
      {/* top pagination */}
      <div className="product-sort__top-pagination">
        <span className="product-sort__num">
          <span className="product-sort__top-pagination--curent-page">{pagination._page}</span>/
          <span className="product-sort__top-pagination--total-page">{pageCount}</span>
        </span>
        <div className="product-sort__top-pagination-control">
          {pagination._page === 1 && (
            <>
              <ButtonBase className={classes.btn_1} disabled>
                <NavigateBeforeIcon style={{ color: '#ccc' }} />
              </ButtonBase>
            </>
          )}
          {pagination._page > 1 && (
            <>
              <ButtonBase className={classes.btn_3} onClick={handlePageChange}>
                <NavigateBeforeIcon />
              </ButtonBase>
            </>
          )}

          <ButtonBase className={classes.btn} onClick={handlePageChange}>
            <NavigateNextIcon />
          </ButtonBase>
        </div>
      </div>
    </div>
  );
}

export default ProductSort;
