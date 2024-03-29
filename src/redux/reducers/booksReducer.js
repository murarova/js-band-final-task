/* eslint-disable import/prefer-default-export */
import { booksTypes } from '../actions/booksActions';
import filterBooks from '../../utils/filter';

const initialState = {
    books: [],
    oneBook: undefined,
    pageSize: 8,
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
                        state.pageSize + 8,
                    ),
                ],
                pageSize: state.pageSize + 8,
            };
        case booksTypes.SEARCH_BY_TITLE:
            if (payload.search === '' && state.search.price === 'price') {
                return {
                    ...state,
                    listings: state.books.slice(0, 8),
                    pageSize: 8,
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
                }).slice(0, 8),
                pageSize: 8,
            };

        case booksTypes.FILTER_BY_PRICE:
            if (state.search.title === '' && payload.filter === 'price') {
                return {
                    ...state,
                    listings: state.books.slice(0, 8),
                    pageSize: 8,
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
                }).slice(0, 8),
                pageSize: 8,
            };

        case booksTypes.FETCH_ONE_BOOK_REQUEST:
            return { ...state, loader: true };

        case booksTypes.FETCH_ONE_BOOK_SUCCESS:
            return {
                ...state,
                search: {
                    title: '',
                    price: 'price',
                },
                book: payload.book,
                loader: false,
            };

        case booksTypes.FETCH_ONE_BOOK_ERROR:
            return { ...state, error: payload, loader: false };

        default:
            return state;
    }
};
