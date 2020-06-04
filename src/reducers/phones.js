import * as R from 'ramda';
import {
  fetchPhones as fetchPhonesApi,
  loadMorePhones as loadMorePhonesApi,
  fetchPhoneById as fetchPhonesByIdApi,
} from './../api';

import { getRenderedPhonesLength } from './../selectors';

import {
  FETCH_PHONES_START,
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_FAILURE,
  LOAD_MORE_PHONES_START,
  LOAD_MORE_PHONES_SUCCESS,
  LOAD_MORE_PHONES_FAILURE,
  FETCH_PHONES_BY_ID_START,
  FETCH_PHONES_BY_ID_SUCCESS,
  FETCH_PHONES_BY_ID_FAILURE,
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
    case FETCH_PHONES_BY_ID_SUCCESS:
      return R.assoc(payload.id, payload, state);
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

export const fetchPhoneById = (id) => async (dispatch) => {
  dispatch({ type: FETCH_PHONES_BY_ID_START });

  try {
    const phone = await fetchPhonesByIdApi(id);
    dispatch({ type: FETCH_PHONES_BY_ID_SUCCESS, payload: phone });
  } catch (err) {
    dispatch({ type: FETCH_PHONES_BY_ID_FAILURE, payload: err, error: true });
  }
};
