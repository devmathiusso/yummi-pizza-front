import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux - Store
import { Provider } from 'react-redux';
import store from './store';

import Layout from './components/Layout';
import Home from './pages/Home';

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Router>
      </Layout>
    </Provider>
  );
};

export default App;
