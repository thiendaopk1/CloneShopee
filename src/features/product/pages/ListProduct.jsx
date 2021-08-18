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
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);

    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 15,
      brand: Number.parseInt(params.brand) || 1,
      _sortBy: params._sortBy || 'ctimes',
    };
  }, [location.search]);

  const [productList, setProductList] = useState([]);

  const [pagination, setPagination] = useState({
    _limit: 15,
    _total: 10,
    _page: 1,
  });

  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    (async () => {
      try {
        const params2 = { ...queryParams };

        const rp = await productApi.getAll(params2);
        const { products, pagination } = rp;

        setProductList(products);

        setPagination(pagination);
      } catch (error) {
        console.log('failed', error);
      }
      setLoading(false);
    })();
  }, [queryParams]);

  //handle pagination
  const handlePageChange = (e, page) => {
    const filters = {
      ...queryParams,
      _page: page,
    };
    history.push({
      pathName: history.location.pathName,
      search: queryString.stringify(filters),
    });
  };

  //handle sort
  const handleSortChange = (newSortValue) => {
    const filters = {
      ...queryParams,
      _sortBy: newSortValue,
    };
    history.push({
      pathName: history.location.pathName,
      search: queryString.stringify(filters),
    });
  };

  // handle filter
  const handleFilterChange = (newFilter) => {
    const filters = {
      ...queryParams,
      ...newFilter,
    };
    history.push({
      pathName: history.location.pathName,
      search: queryString.stringify(filters),
    });
  };
  const classes = useStyle();
  return (
    <div className="app__container">
      <div className="grid wide content">
        <div className="row">
          <div className="col l-2">
            <ProductFilter filters={queryParams} onChange={handleFilterChange} />
          </div>
          <div className="col l-10">
            <ProductSort
              currentSort={queryParams._sortBy}
              onChange={handleSortChange}
              pagination={pagination}
              onChangePagi={handlePageChange}
            />
            <ProductList productList={productList} />
            <div className="product_pagination">
              <ThemeProvider theme={theme}>
                <Pagination
                  shape="rounded"
                  size="large"
                  // selected="true"
                  count={Math.ceil(pagination._total / pagination._limit)}
                  _page={pagination._page}
                  onChange={handlePageChange}
                  className={classes.root}
                ></Pagination>
              </ThemeProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListProduct;
