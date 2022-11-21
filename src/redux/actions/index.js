import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/index.js';

export const addTocart = (item) => {
  console.log('Adding to card', item);
  return {
    type: ADD_TO_CART,
    data: item
  };
};

export const removeFromCart = (item) => {
  console.log('Removing from card', item);
  return {
    type: REMOVE_FROM_CART,
    data: item
  };
};
