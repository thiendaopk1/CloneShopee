// import './App.css';
import './assets/css/reset.css';
import './assets/css/base.css';
import './assets/css/grid.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import ProductFeature from './features/index';
function App() {
  return (
    <div className="App">
      <Header />
      {/* body */}
      <Switch>
        <Route path="/" component={ProductFeature} exact />
      </Switch>
    </div>
  );
}

export default App;
