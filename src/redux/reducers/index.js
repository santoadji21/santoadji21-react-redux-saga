import { combineReducers } from 'redux';

import { cartItems } from './carts/index.js';
import { getProductsList } from './products/index.js';

export const rootReducer = combineReducers({
  cartItems,
  getProductsList
});
