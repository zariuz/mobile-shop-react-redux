import * as R from 'ramda';

export const getPhoneById = (state, id) => R.prop(id, state.phones);

export const getPhones = (state) => {
  const applySearch = (item) =>
    R.includes(state.phonesPage.search, R.prop('name', item));

  const phones = R.compose(
    R.filter(applySearch),
    R.map((id) => getPhoneById(state, id))
  )(state.phonesPage.ids);
  return phones;
};

export const getRenderedPhonesLength = (state) => {
  return R.length(state.phonesPage.ids);
};

export const getTotalBasketCount = (state) => {
  return R.length(state.basket);
};

export const getTotalBasketPrice = (state) => {
  const totalPrice = R.compose(
    R.sum,
    R.pluck('price'),
    R.map((id) => getPhoneById(state, id))
  )(state.basket);

  return totalPrice;
};
