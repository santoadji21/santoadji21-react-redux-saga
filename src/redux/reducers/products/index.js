import { SET_PRODUCTS } from '../../constants/index.js';

export const getProductsList = (state = [], action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      console.log('Reducer Getting products', action);
      return action.data;
    default:
      return state;
  }
};
