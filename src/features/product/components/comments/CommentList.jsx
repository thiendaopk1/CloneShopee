import React from 'react';
import PropTypes from 'prop-types';
import CommentDetail from './CommentDetail';
CommentList.propTypes = {
  commentList: PropTypes.array,
};

CommentList.defaultProps = {
  commentList: [],
};

function CommentList({ commentList }) {
  return (
    <div className="product__rating-list">
      {commentList.map((comment) => (
        <div className="product__comment-list" key={comment.id}>
          <CommentDetail comment={comment} />
        </div>
      ))}
    </div>
  );
}

export default CommentList;
