import { url } from '../../utils/entyPoints';

export const booksTypes = {
    FETCH_BOOKS_REQUEST: 'FETCH_BOOKS_REQUEST',
    FETCH_BOOKS_SUCCESS: 'FETCH_BOOKS_SUCCESS',
    FETCH_BOOKS_ERROR: 'FETCH_BOOKS_ERROR',
    LOAD_MORE: 'LOAD_MORE',
};

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
                dispatch(fetchBooksError(error));
            },
        },
    },
});

export const loadMore = () => ({
    type: booksTypes.LOAD_MORE,
});
