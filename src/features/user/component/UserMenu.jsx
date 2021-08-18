import React from 'react';
import PropTypes from 'prop-types';
import { Link, makeStyles } from '@material-ui/core';
import { NavLink, useRouteMatch } from 'react-router-dom';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { useState } from 'react';
UserMenu.propTypes = {};
const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    padding: '5px 0px',
    '&.MuiLink-root': {
      color: 'rgba(0,0,0,.8)',
    },

    '&.MuiTypography-root': {
      fontSize: '14px',
    },
    '&:hover': {
      color: '#f06043',
    },
  },

  icon: {
    marginRight: '5px',
    color: '#0547ad',
    fontSize: '20px',
  },
}));
function UserMenu(props) {
  const classes = useStyles();
  const { url } = useRouteMatch();
  const [selected, setSelected] = useState(0);
  return (
    <div className="user__menu">
      <div className="user__userName"></div>
      <ul className="menu__list">
        <li className="menu__item">
          <Link component={NavLink} underline="none" to={url} exact className={classes.link}>
            <PermIdentityIcon className={classes.icon} />
            Tài Khoản của tôi
          </Link>
        </li>
        <li className="menu__item">
          <Link component={NavLink} underline="none" to={`${url}/address`} exact className={classes.link}>
            <HomeIcon className={classes.icon} />
            Địa chỉ
          </Link>
        </li>
        <li className="menu__item">
          <Link component={NavLink} underline="none" to={`${url}/purchase`} exact className={classes.link}>
            <AssignmentIcon className={classes.icon} />
            Đơn mua
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default UserMenu;
