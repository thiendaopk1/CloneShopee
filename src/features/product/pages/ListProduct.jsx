import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import '../../../assets/css/product.css';
import ProductFilter from '../components/ProductFilter';
import ProductSort from '../components/ProductSort';
import ProductList from '../components/ProductList';
import { ThemeProvider, createTheme, makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import productApi from '../../../api/productApi';
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
        '&.Mui-selected': {
          backgroundColor: '#ee4d2d',
          color: '#fff',
        },
        '&.Mui-focusVisible': {
          backgroundColor: '#ee4d2d',
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
  },
});
function ListProduct(props) {
  const history = useHistory();
  const location = useLocation();
  // const queryParams = useMemo(() => {
  //   const params = queryString.parse(location.search);

  //   return {
  //     ...params,
  //     _page: Number.parseInt(params._page) || 1,
  //     _limit: Number.parseInt(params._limit) || 15,
  //     _sort: params._sort || '_sortBy=pop',
  //   };
  // }, [location.search]);

  const [productList, setProductList] = useState([]);
  console.log('productList', productList);
  const [pagination, setPagination] = useState({
    limit: 15,
    total: 10,
    page: 1,
  });
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    (async () => {
      try {
        // const params2 = { ...queryParams };

        const rp = await productApi.getAll();
        // const { data, pagination } = rp;
        console.log(rp);
        // console.log('data', data);
        setProductList(rp);

        setPagination(pagination);
      } catch (error) {
        console.log('failed', error);
      }
      setLoading(false);
    })();
  }, []);
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
