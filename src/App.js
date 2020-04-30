import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux - Store
import { Provider } from 'react-redux';
import store from './store';

import Layout from './components/Layout';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import OrdersHistory from './pages/OrdersHistory';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/sign-in' component={SignIn} />
            <Route exact path='/orders-history' component={OrdersHistory} />
          </Layout>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
