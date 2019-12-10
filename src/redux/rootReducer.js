import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './reducers/authReducer';
import { booksReducer } from './reducers/booksReducer';

const sessionPersistConfig = {
    key: 'session',
    storage,
};

const rootReducer = combineReducers({
    session: persistReducer(sessionPersistConfig, authReducer),
    books: booksReducer,
});

export default rootReducer;
