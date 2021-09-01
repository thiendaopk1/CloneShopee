import { Paper } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import '../../assets/css/user.css';
import Address from './component/Address';
import EditInfo from './component/EditInfo';
import Purchase from './component/Purchase';
import UserMenu from './component/UserMenu';
UserFeature.propTypes = {};

function UserFeature(props) {
  const { url } = useRouteMatch();
  return (
    <div className="user__container">
      <div className="grid wide">
        <div className="row">
          <div className="col l-2 m-0 c-0">
            <UserMenu />
          </div>
          <div className="col l-10 m-12 c-12">
            <Switch>
              <div className="user__content">
                <Paper elevation={0}>
                  <Route exact path={url}>
                    <EditInfo />
                  </Route>

                  <Route exact path={`${url}/address`}>
                    <Address />
                  </Route>

                  <Route exact path={`${url}/purchase`}>
                    <Purchase />
                  </Route>
                </Paper>
              </div>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserFeature;
