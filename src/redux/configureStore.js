import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import SearchReducer from './search/SearchReducer';
import TransactionReducer from './transaction/TransactionReducer';

const rootReducer = combineReducers({
  SearchReducer,
  TransactionReducer,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;
