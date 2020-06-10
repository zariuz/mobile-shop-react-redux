import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import phones from './phones';
import phonesPage from './phonesPage';
import phonePage from './phonePage';
import basket from './basket';
import categories from './categories';

const createRootReducer = (history) =>
  combineReducers({
    phones,
    phonesPage,
    phonePage,
    basket,
    categories,
    router: connectRouter(history),
  });

export default createRootReducer;
