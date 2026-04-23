import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import listReducers from './reducers/listReducers';

const store = createStore(listReducers, applyMiddleware(thunk));

export default store;