import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import PurchaseFilter from './PurchaseFilter';
import PurchaseList from './PurchaseList';
import { useState } from 'react';
import { useEffect } from 'react';
import purchaseApi from '../../../api/purchaseApi';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import queryString from 'query-string';
import { useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Box } from '@material-ui/core';
Purchase.propTypes = {};
const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '20px',
  },

  progress: {
    '&.MuiCircularProgress-colorPrimary': {
      color: '#ee4d2d',
    },
  },
}));
function Purchase(props) {
  const classes = useStyle();
  const history = useHistory();
  const location = useLocation();
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);

    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 10,
      status: Number.parseInt(params.status) || 1,
    };
  }, [location.search]);

  const [purchaseList, setPurchaseList] = useState([]);
  const [loading, setLoading] = useState([true]);
  const [pagination, setPagination] = useState({
    _limit: 10,
    _total: 10,
    _page: 1,
  });
  useEffect(() => {
    (async () => {
      try {
        const params2 = { ...queryParams };
        const list = await purchaseApi.getAll(params2);
        console.log(list);
        const { data, pagination } = list;

        setPurchaseList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('error', error);
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

  // const handleComent
  const handleComment = (list) => {
    const { data, pagination } = list;
    setPurchaseList(data);
    setPagination(pagination);
  };

  const handleCancel = (list) => {
    const { data, pagination } = list;
    setPurchaseList(data);
    setPagination(pagination);
  };
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.id;
  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <div className="user__purchase">
      <div className="user__purchase-filter">
        <PurchaseFilter
          onChange={handleFilterChange}
          currentFillter={queryParams.status}
          filters={queryParams}
        />
      </div>
      {loading ? (
        <Box className={classes.root}>
          <CircularProgress color="primary" className={classes.progress} />
        </Box>
      ) : (
        <PurchaseList purchaseList={purchaseList} onSubmitComment={handleComment} onClick={handleCancel} />
      )}
    </div>
  );
}

export default Purchase;
