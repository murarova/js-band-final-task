import * as notify from '../../utils/notification';
import { url } from '../../utils/entyPoints';

export const cartTypes = {
    ADD_BOOK_SUCCESS: 'ADD_BOOK_SUCCESS',
    ADD_BOOK_ERROR: 'ADD_BOOK_ERROR',
    PURCHASE_REQUEST: 'PURCHASE_REQUEST',
    PURCHASE_SUCCESS: 'PURCHASE_SUCCESS',
    PURCHASE_ERROR: 'PURCHASE_ERROR',
};

export const purchaseSuccess = () => ({
    type: cartTypes.PURCHASE_SUCCESS,
});

export const purchaseError = () => ({
    type: cartTypes.PURCHASE_ERROR,
});

export const purchaseRequest = data => ({
    type: cartTypes.PURCHASE_REQUEST,
    payload: {
        request: {
            method: 'POST',
            url: url.purchase(),
            data,
        },

        options: {
            onSuccess({ dispatch }) {
                dispatch(purchaseSuccess());
            },
            onError({ dispatch, error }) {
                dispatch(purchaseError(error));
            },
        },
    },
});

const addToCartSuccsess = (id, title, quantity, totalPrice) => ({
    type: cartTypes.ADD_BOOK_SUCCESS,
    payload: {
        id,
        title,
        quantity,
        totalPrice,
    },
});

const addToCartError = () => ({
    type: cartTypes.ADD_BOOK_ERROR,
});

export const addToCartStart = (title, quantity, totalPrice) => (
    dispatch,
    getState,
) => {
    const { id } = getState().books.book;
    const { count } = getState().books.book;

    if (count >= quantity) {
        notify.success(`${quantity} book(s) added to the shopping cart`);
        dispatch(addToCartSuccsess(id, title, quantity, totalPrice));
    } else {
        notify.error(`There are only ${count} books in stock`);
        dispatch(addToCartError());
    }
};
