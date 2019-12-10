import { url } from '../../utils/entyPoints';

export const booksTypes = {
    FETCH_BOOKS_REQUEST: 'FETCH_BOOKS_REQUEST',
    FETCH_BOOKS_SUCCESS: 'FETCH_BOOKS_SUCCESS',
    FETCH_BOOKS_ERROR: 'FETCH_BOOKS_ERROR',
    LOAD_MORE: 'LOAD_MORE',
    SEARCH_BY_TITLE: 'SEARCH_BY_TITLE',
    FILTER_BY_PRICE: 'FILTER_BY_PRICE',
};

export const searchByTitle = search => ({
    type: booksTypes.SEARCH_BY_TITLE,
    payload: {
        search,
    },
});

export const filterByPrice = search => ({
    type: booksTypes.FILTER_BY_PRICE,
    payload: {
        search,
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
                dispatch(fetchBooksError(error));
            },
        },
    },
});

export const loadMore = () => ({
    type: booksTypes.LOAD_MORE,
});
