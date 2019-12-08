/* eslint-disable no-use-before-define */
/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import axiosMiddleware from 'redux-axios-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';
import rootReducer from './rootReducer';

// =========== axios instance ===============================

const client = axios.create({
    baseURL: 'https://js-band-api.glitch.me',
    responseType: 'json',
});

// Add a request interceptor

client.interceptors.request.use(function(config) {
    const { token } = store.getState().session;
    config.headers.Authorization = `Bearer ${token}`;

    return config;
});

// ============================================================

const middleWares = [thunk, axiosMiddleware(client)];
const enhancer = composeWithDevTools(applyMiddleware(...middleWares));

const configureStore = () => {
    const store = createStore(rootReducer, enhancer);
    return store;
};

export const store = configureStore();
export const persistor = persistStore(store);
