import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import phones from './phones';
import phonesPage from './phonesPage';

const createRootReducer = (history) =>
  combineReducers({
    phones,
    phonesPage,
    router: connectRouter(history),
  });

export default createRootReducer;
