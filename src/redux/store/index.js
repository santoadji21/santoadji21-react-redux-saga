import createSagaMiddleware from '@redux-saga/core';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { rootReducer } from '../reducers/index.js';
import productsSaga from '../saga/product/index.js';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware]
});

sagaMiddleware.run(productsSaga);
export default store;
