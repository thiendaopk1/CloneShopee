import React from 'react';
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core';
CommentDetail.propTypes = {
  comment: PropTypes.object,
};
const useStyle = makeStyles((theme) => ({
  rate: {
    color: '#ee4d2d',
    stroke: '#ee4d2d',
    fontSize: '14px',
  },
}));
function CommentDetail({ comment = {} }) {
  const classes = useStyle();

  const { content, date, rate, userName } = comment;
  return (
    <div className="user__comment">
      <div className="user__comment-avatar">
        <div className="user__avatar">
          <div className="user__avatar-placeholder">
            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="icon-headshot">
              <g>
                <circle cx="7.5" cy="4.5" fill="none" r="3.8" stroke-miterlimit="10"></circle>
                <path
                  d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="user__comment-rating-main">
        <div className="user__comment-name">{userName}</div>
        <div className="user__comment-rate">
          <Rating name="half-rating-read" value={rate} precision={0.1} readOnly className={classes.rate} />
        </div>
        <div className="user__comment-content">{content}</div>
        <div className="user__comment-date">{date}</div>
      </div>
    </div>
  );
}

export default CommentDetail;
