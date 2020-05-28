import * as R from 'ramda';

export const getPhonesById = (state, id) => R.prop(id, state.phones);

export const getPhones = (state) => {
  const phones = R.map((id) => getPhonesById(state, id), state.phonesPage.ids);
  return phones;
};

export const getRenderedPhonesLength = (state) => {
  return R.length(state.phonesPage.ids);
};
