/* eslint-disable import/prefer-default-export */
import { booksTypes } from '../actions/booksActions';

const initialState = {
    books: [],
    pageSize: 9,
    listings: [],
    loader: false,
    error: null,
    search: {
        title: '',
        price: '',
    },
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
        case booksTypes.SEARCH_BY_TITLE:
            return {
                ...state,
                search: {
                    ...state.search,
                    title: payload,
                },
            };

        case booksTypes.FILTER_BY_PRICE:
            return {
                ...state,
                search: {
                    ...state.search,
                    price: payload,
                },
            };

        default:
            return state;
    }
};
