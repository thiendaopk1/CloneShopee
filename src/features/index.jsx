import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ListProduct from './product/pages/ListProduct';
import ProductDetail from './product/pages/ProductDetail';
ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={match.url} component={ListProduct} exact />
        <Route path={`${match.url}/:productId`} component={ProductDetail} />
      </Switch>
    </div>
  );
}

export default ProductFeature;
