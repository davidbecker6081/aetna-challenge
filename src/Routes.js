import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import App from './components/App/App';

import Home from './views/Home/Home';

const Routes = routeProps => (
  <App location={routeProps.location}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </App>
)

export default withRouter(Routes)
