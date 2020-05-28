import React from 'react';
import { Switch, Route } from 'react-router';
import Phones from './containers/phones/index';

export const routes = (
  <Switch>
    <Route path="/" component={Phones} exact />
  </Switch>
);
