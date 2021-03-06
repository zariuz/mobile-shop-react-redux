import React from 'react';
import { Switch, Route } from 'react-router';

import Phones from './containers/phones';
import Phone from './containers/phone';
import Basket from './containers/basket';

export const routes = (
  <Switch>
    <Route path="/" component={Phones} exact />
    <Route path="/categories/:id" component={Phones} exact />
    <Route path="/phones/:id" component={Phone} exact />
    <Route path="/basket" component={Basket} exact />
  </Switch>
);
