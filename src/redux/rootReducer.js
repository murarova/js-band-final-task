import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './reducers/authReducer';
import { booksReducer } from './reducers/booksReducer';
import { cartReducer } from './reducers/cartReducer';

const sessionPersistConfig = {
    key: 'session',
    storage,
};

const rootReducer = combineReducers({
    session: persistReducer(sessionPersistConfig, authReducer),
    books: booksReducer,
    cart: cartReducer,
});

export default rootReducer;
