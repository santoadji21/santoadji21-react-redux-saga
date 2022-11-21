import { ADD_TO_CART, REMOVE_FROM_CART } from '../../constants/index.js';

export const cartItems = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log('Reducer Adding to card', action);
      return [...state, action.data];

    case REMOVE_FROM_CART:
      console.log('Reducer Removing from card', action);
      return state.filter((item) => item.id !== action.data.id);
    default:
      return state;
  }
};
