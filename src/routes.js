import React from 'react';
import { Switch, Route } from 'react-router';
import Phones from './containers/phones';
import Phone from './containers/phone';

export const routes = (
  <Switch>
    <Route path="/" component={Phones} exact />
    <Route path="/phones/:id" component={Phone} exact />
  </Switch>
);
