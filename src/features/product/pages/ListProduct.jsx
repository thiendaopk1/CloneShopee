import React from 'react';
import PropTypes from 'prop-types';
import '../../../assets/css/product.css';
import ProductFilter from '../components/ProductFilter';
import ProductSort from '../components/ProductSort';
import ProductList from '../components/ProductList';
import { ThemeProvider, createTheme, makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
ListProduct.propTypes = {};

const useStyle = makeStyles((theme) => ({
  // root: {
  //   alignItems: 'center',
  // },
}));

const theme = createTheme({
  overrides: {
    MuiPaginationItem: {
      page: {
        fontWeight: '500',
        color: '#999999',
        marginLeft: '15px',
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
      rounded: {
        borderRadius: '2px',
        width: '40px',
        height: '30px',
      },
      sizeLarge: {
        fontSize: '15px',
      },
      icon: {
        marginLeft: '15px',
        marginRight: '15px',
        width: '30px',
        height: '30px',
      },
    },
    Mui: {
      selected: {
        backgroundColor: 'red',
      },
    },
  },
});
function ListProduct(props) {
  const classes = useStyle();
  return (
    <div className="app__container">
      <div className="grid wide content">
        <div className="row">
          <div className="col l-2">
            <ProductFilter />
          </div>
          <div className="col l-10">
            <ProductSort />
            <ProductList />
            <div className="product_pagination">
              <ThemeProvider theme={theme}>
                <Pagination
                  count={10}
                  shape="rounded"
                  size="large"
                  selected="true"
                  className={classes.root}
                />
              </ThemeProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListProduct;
