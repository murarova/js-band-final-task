/* eslint-disable import/prefer-default-export */
import { booksTypes } from '../actions/booksActions';
import filterBooks from '../../utils/filter';

const initialState = {
    books: [],
    pageSize: 6,
    listings: [],
    loader: false,
    error: null,
    search: {
        title: '',
        price: 'price',
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
                listings: filterBooks(payload.books, state.search).slice(
                    0,
                    state.pageSize,
                ),
                loader: false,
            };
        case booksTypes.FETCH_BOOKS_ERROR:
            return { ...state, error: payload, loader: false };
        case booksTypes.LOAD_MORE:
            return {
                ...state,
                listings: [
                    ...state.listings,
                    ...filterBooks(state.books, state.search).slice(
                        state.pageSize,
                        state.pageSize + 6,
                    ),
                ],
                pageSize: state.pageSize + 6,
            };
        case booksTypes.SEARCH_BY_TITLE:
            if (payload.search === '' && state.search.price === 'price') {
                return {
                    ...state,
                    listings: state.books.slice(0, 6),
                    pageSize: 6,
                };
            }
            return {
                ...state,
                search: {
                    ...state.search,
                    title: payload.search,
                },
                listings: filterBooks(state.books, {
                    ...state.search,
                    title: payload.search,
                }).slice(0, 6),
                pageSize: 6,
            };

        case booksTypes.FILTER_BY_PRICE:
            if (state.search.title === '' && payload.filter === 'price') {
                return {
                    ...state,
                    listings: state.books.slice(0, 6),
                    pageSize: 6,
                };
            }
            return {
                ...state,
                search: {
                    ...state.search,
                    price: payload.filter,
                },
                listings: filterBooks(state.books, {
                    ...state.search,
                    price: payload.filter,
                }).slice(0, 6),
                pageSize: 6,
            };

        default:
            return state;
    }
};
