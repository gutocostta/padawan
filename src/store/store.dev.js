import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import combinedReducers from '../reducers';

const middleware = [thunk, createLogger()];

export default createStore(combinedReducers, applyMiddleware(...middleware));