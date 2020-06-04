import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import phones from './phones';
import phonesPage from './phonesPage';
import phonePage from './phonePage';

const createRootReducer = (history) =>
  combineReducers({
    phones,
    phonesPage,
    phonePage,
    router: connectRouter(history),
  });

export default createRootReducer;
