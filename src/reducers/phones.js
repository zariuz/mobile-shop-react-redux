import * as R from 'ramda';
import {
  fetchPhones as fetchPhonesApi,
  loadMorePhones as loadMorePhonesApi,
} from './../api';

import { getRenderedPhonesLength } from './../selectors';

import {
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_START,
  FETCH_PHONES_FAILURE,
  LOAD_MORE_PHONES_START,
  LOAD_MORE_PHONES_SUCCESS,
  LOAD_MORE_PHONES_FAILURE,
} from './../actionTypes';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      const newValues = R.indexBy(R.prop('id'), payload);
      return R.merge(state, newValues);
    case LOAD_MORE_PHONES_SUCCESS:
      const moreValues = R.indexBy(R.prop('id'), payload);
      return R.merge(state, moreValues);
    default:
      return state;
  }
};

export const fetchPhones = () => async (dispatch) => {
  dispatch({ type: FETCH_PHONES_START });

  try {
    const phones = await fetchPhonesApi();
    dispatch({ type: FETCH_PHONES_SUCCESS, payload: phones });
  } catch (err) {
    dispatch({ type: FETCH_PHONES_FAILURE, payload: err, error: true });
  }
};

export const loadMorePhones = () => async (dispatch, getState) => {
  const offset = getRenderedPhonesLength(getState());
  dispatch({ type: LOAD_MORE_PHONES_START });

  try {
    const phones = await loadMorePhonesApi(offset);
    dispatch({ type: LOAD_MORE_PHONES_SUCCESS, payload: phones });
  } catch (err) {
    dispatch({ type: LOAD_MORE_PHONES_FAILURE, payload: err, error: true });
  }
};
