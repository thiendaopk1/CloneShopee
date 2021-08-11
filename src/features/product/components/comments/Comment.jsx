import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import CommentApi from '../../../../api/commentApi';
import CommentFilter from './CommentFilter';
import CommentList from './CommentList';
Comment.propTypes = {
  id: PropTypes.number,
};
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
function Comment({ id }) {
  // comment

  const [commentList, setComemntList] = useState([]);

  const history = useHistory();
  const location = useLocation();

  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);

    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 12,
      rate: Number.parseInt(params.rate) || 1,
    };
  }, [location.search]);

  const [pagination, setPagination] = useState({
    _limit: 15,
    _total: 10,
    _page: 1,
  });
  useEffect(() => {
    (async () => {
      try {
        const params2 = { ...queryParams };

        const rp = await CommentApi.getAll(params2, id);

        const { comments, pagination } = rp;

        setComemntList(comments);

        setPagination(pagination);
      } catch (error) {
        console.log('failed', error);
      }
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
  return (
    <div>
      <div className="product__rating">
        <h2 className="product__rating-header">ĐÁNH GIÁ SẢN PHẨM</h2>

        <CommentFilter id={id} filters={queryParams} onChange={handleFilterChange} />

        <CommentList commentList={commentList} />
        <div className="product__rating-pagination">
          {commentList.length === 0 && <></>}
          {commentList.length !== 0 && (
            <ThemeProvider theme={theme}>
              <Pagination
                shape="rounded"
                size="large"
                // selected="true"
                count={Math.ceil(pagination._total / pagination._limit)}
                _page={pagination._page}
                onChange={handlePageChange}
              ></Pagination>
            </ThemeProvider>
          )}
        </div>
      </div>
    </div>
  );
}

export default Comment;
