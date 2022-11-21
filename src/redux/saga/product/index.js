import { put, takeEvery } from 'redux-saga/effects';
import { getProducts as fetchProducts } from '../../../services/products/index.js';
import { GET_PRODUCTS, SET_PRODUCTS } from '../../constants/index.js';

function* getProducts() {
  try {
    const data = yield fetchProducts();
    yield put({ type: SET_PRODUCTS, data: data });
  } catch (error) {
    console.log(error);
  }
}

function* productsSaga() {
  yield takeEvery(GET_PRODUCTS, getProducts);
}

export default productsSaga;
