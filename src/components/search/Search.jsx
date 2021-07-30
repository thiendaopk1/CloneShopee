import React from 'react';
import PropTypes from 'prop-types';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CheckIcon from '@material-ui/icons/Check';
import classNames from 'classnames';
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
  return (
    <div className="header__search">
      <div className="header__search-input-wrap">
        <input type="text" placeholder="Tìm kiếm" className="header__search-input" />

        {/* search history */}
        <div className="header__search-history">
          <h3 className="header__search-history-title">Lịch sử tìm kiếm</h3>
          <ul className="header__search-history-list">
            <li className="header__search-history-item">
              <a href="">Dầu gội đầu</a>
            </li>
            <li className="header__search-history-item">
              <a href="">Dầu gội đầu</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="header__search-select">
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
