import * as R from 'ramda';

import {
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_START,
  FETCH_PHONES_FAILURE,
} from './../actionTypes';

const initialState = {
  ids: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      return R.merge(state, { ids: R.pluck('id', payload) });

    default:
      return state;
  }
};
