import {configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import {productListReducer, productDetailsReducer} from './reducers/productReducers';

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer
});

export const initialState = {};

const middleWare = [thunk];

const store = configureStore({
    reducer: reducer,
    preloadedState: initialState,
    middleWare: composeWithDevTools(applyMiddleware(...middleWare))
});

export default store;