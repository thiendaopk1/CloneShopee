import { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import CommentApi from '../../api/commentApi';
import queryString from 'query-string';

export default function useCommentDetail(productId) {
  const [loading, setLoading] = useState(false);
  const [commentList, setComemntList] = useState([]);
  console.log('commentList', commentList);
  const history = useHistory();
  const location = useLocation();

  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);

    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 12,
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

        const rp = await CommentApi.getAll(params2, productId);
        const { comments, pagination } = rp;

        setComemntList(comments);

        setPagination(pagination);
      } catch (error) {
        console.log('failed', error);
      }
    })();
  }, [queryParams]);

  return { productId, loading };
}
