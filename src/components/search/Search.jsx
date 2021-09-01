import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CheckIcon from '@material-ui/icons/Check';
import classNames from 'classnames';
import productApi from '../../api/productApi';
import queryString from 'query-string';
import { useHistory, useLocation } from 'react-router-dom';
import InputForm from './InputForm';
import ProductsSearch from './ProductsSearch';
Search.propTypes = {};
const useStyles = makeStyles((theme) => ({
  icon: {
    color: '#4A4A4A',
    margin: '0px 16px 0px 8px',
    fontSize: '1.4rem',
    position: 'relative',
    top: '3px',
  },

  btn_search: {
    backgroundColor: '#fb5533',
    height: '34px',
    minWidth: '60px',
    maxWidth: '190px',
    marginRight: '3px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#fb6f53',
    },
  },

  btn_search_icon: {
    color: '#fff',
    height: '19px',
    width: '19px',
  },

  check_icon: {
    color: '#fb5533',
    fontSize: '1.4rem',
    display: 'none',
  },
}));
function Search(props) {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [viewProducts, setViewProduct] = useState(false);
  // const [pagination, setPagination] = useState({
  //   limit: 5,
  //   total: 5,
  //   page: 1,
  // });
  useHistory();

  useLocation();
  const [filters, setFilters] = useState({
    _limit: 5,
    _page: 1,
  });
  console.log('filters', filters);
  useEffect(() => {
    (async () => {
      try {
        const paramsString = queryString.stringify(filters);

        const res = await productApi.search(paramsString);
        const { products } = res;
        setProductList(products);
        // setPagination(pagination);
      } catch (error) {
        console.log('error', error);
      }
    })();
  }, [filters]);

  const handleFiltersChange = (newFilters) => {
    console.log('newFilters', newFilters);
    if (newFilters.searchTerm === '') {
      setFilters({
        _page: 1,
        _limit: 5,
      });
    } else {
      setFilters({
        ...filters,
        _page: 1,
        title_like: newFilters.searchTerm,
      });
    }
  };

  const handleChangeVPOpen = () => {
    setViewProduct(true);
  };
  const handleChangeVPClose = () => {
    setViewProduct(false);
  };
  return (
    <div className="header__search ">
      <div className="header__search-input-wrap">
        <InputForm
          onsubmit={handleFiltersChange}
          changeVPO={handleChangeVPOpen}
          changeVPC={handleChangeVPClose}
        />
        {/* search history */}
        {viewProducts && <ProductsSearch products={productList} />}
      </div>
      <div className="header__search-select hide-on-mobile">
        <span className="header__search-select-label">Trong Shop</span>
        <ExpandMoreIcon className={classes.icon} />

        <ul className="header__search-option">
          <li className="header__search-option-item header__search-option-item-active">
            <span>Trong Shop</span>
            <CheckIcon className={(classes.check_icon, classNames('checked'))} />
          </li>
          <li className="header__search-option-item">
            <span>Ngoài Shop</span>
            <CheckIcon className={classes.check_icon} />
          </li>
        </ul>
      </div>
      <Button className={classes.btn_search}>
        <SearchIcon className={classes.btn_search_icon} />
      </Button>
    </div>
  );
}

export default Search;
