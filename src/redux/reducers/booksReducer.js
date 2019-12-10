/* eslint-disable import/prefer-default-export */
import { booksTypes } from '../actions/booksActions';

const initialState = {
    books: [],
    pageSize: 9,
    listings: [],
    loader: false,
    error: null,
    search: '',
};

export const booksReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case booksTypes.FETCH_BOOKS_REQUEST:
            return { ...state, loader: true };
        case booksTypes.FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                ...payload,
                loader: false,
                listings: payload.books.slice(0, state.pageSize),
            };
        case booksTypes.FETCH_BOOKS_ERROR:
            return { ...state, error: payload, loader: false };
        case booksTypes.LOAD_MORE:
            return {
                ...state,
                listings: [
                    ...state.listings,
                    ...state.books.slice(state.pageSize, state.pageSize + 9),
                ],
                pageSize: state.pageSize + 9,
            };

        default:
            return state;
    }
};
