import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import App from './components/App/App';

import Home from './views/Home/Home';
import MovieDetails from './views/MovieDetails/MovieDetails';

const Routes = routeProps => (
  <App location={routeProps.location}>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path="/:id" component={MovieDetails} />
      <Route exact path="/?q=:searchQuery" component={Home} />>
    </Switch>
  </App>
)

export default withRouter(Routes)
