import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import phones from './phones';

const createRootReducer = (history) =>
  combineReducers({
    phones,
    router: connectRouter(history),
  });

export default createRootReducer;
