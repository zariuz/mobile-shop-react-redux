import phones from './mockPhones';

export const fetchPhones = async () => {
  return new Promise((resolve, reject) => {
    resolve(phones);
    //reject('error');
  });
};

export const loadMorePhones = async ({ offset }) => {
  return new Promise((resolve) => {
    resolve(phones);
  });
};
