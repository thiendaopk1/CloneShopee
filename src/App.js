// import './App.css';
import { Route, Switch } from 'react-router-dom';
import './assets/css/base.css';
import './assets/css/grid.css';
import './assets/css/reset.css';
import Header from './components/header/Header';
import ProductFeature from './features/index';
import ProductDetail from './features/product/pages/ProductDetail';
import ShoppingCartFeature from './features/product/components/shoppingCart/ShoppingCartFeature';
import CheckOutFeature from './features/checkout/CheckOutFeature';
function App() {
  // const { params, path, url } = useRouteMatch();
  // console.log(path);
  // console.log(url);
  // console.log(params);
  return (
    <div className="App">
      <Header />
      {/* body */}
      <Switch>
        {/* <Route path="/123" component={ProductDetail} exact /> */}
        <Route path="/" component={ProductFeature} exact />
        <Route path={`/cart`} component={ShoppingCartFeature} exact />
        <Route path={`/checkout`} component={CheckOutFeature} exact />
        <Route path={`/:productId`} component={ProductDetail} exact />
      </Switch>
    </div>
  );
}

export default App;
