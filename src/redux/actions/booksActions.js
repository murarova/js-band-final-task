import { url } from '../../utils/entyPoints';
import { logout } from './authActions';

export const booksTypes = {
    FETCH_BOOKS_REQUEST: 'FETCH_BOOKS_REQUEST',
    FETCH_BOOKS_SUCCESS: 'FETCH_BOOKS_SUCCESS',
    FETCH_BOOKS_ERROR: 'FETCH_BOOKS_ERROR',
    FETCH_ONE_BOOK_REQUEST: 'FETCH_ONE_BOOK_REQUEST',
    FETCH_ONE_BOOK_SUCCESS: 'FETCH_ONE_BOOK_SUCCESS',
    FETCH_ONE_BOOK_ERROR: 'FETCH_ONE_BOOK_ERROR',
    LOAD_MORE: 'LOAD_MORE',
    SEARCH_BY_TITLE: 'SEARCH_BY_TITLE',
    FILTER_BY_PRICE: 'FILTER_BY_PRICE',
    EMPTY_FILTER: 'EMPTY_FILTER',
};

export const searchByTitle = search => ({
    type: booksTypes.SEARCH_BY_TITLE,
    payload: {
        search,
    },
});

export const filterByPrice = filter => ({
    type: booksTypes.FILTER_BY_PRICE,
    payload: {
        filter,
    },
});

export const fetchBooksSuccess = books => ({
    type: booksTypes.FETCH_BOOKS_SUCCESS,
    payload: {
        books,
    },
});

export const fetchBooksError = error => ({
    type: booksTypes.FETCH_BOOKS_ERROR,
    payload: error.message,
});

export const fetchBooks = () => ({
    type: booksTypes.FETCH_BOOKS_REQUEST,
    payload: {
        request: {
            method: 'GET',
            url: url.books(),
        },

        options: {
            onSuccess({ dispatch, response }) {
                dispatch(fetchBooksSuccess(response.data));
            },
            onError({ dispatch, error }) {
                dispatch(logout());
                dispatch(fetchBooksError(error));
            },
        },
    },
});

export const fetchOneBookSuccess = book => ({
    type: booksTypes.FETCH_ONE_BOOK_REQUEST,
    payload: {
        book,
    },
});

export const fetchOneBookError = error => ({
    type: booksTypes.FETCH_ONE_BOOK_ERROR,
    payload: error.message,
});

export const fetchOneBook = id => ({
    type: booksTypes.FETCH_ONE_BOOK_REQUEST,
    payload: {
        request: {
            method: 'GET',
            url: url.oneBook(id),
        },

        options: {
            onSuccess({ dispatch, response }) {
                dispatch(fetchOneBookSuccess(response.data));
            },
            onError({ dispatch, error }) {
                dispatch(fetchOneBookError(error));
            },
        },
    },
});

export const loadMore = () => ({
    type: booksTypes.LOAD_MORE,
});
