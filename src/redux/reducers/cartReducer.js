/* eslint-disable import/prefer-default-export */
import { cartTypes } from '../actions/cartActions';
import * as notify from '../../utils/notification';

const initialState = {
    books: [],
};

export const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case cartTypes.ADD_BOOK_SUCCESS:
            if (state.books.length > 0) {
                const existOrder = state.books.find(el => el.id === payload.id);
                if (existOrder) {
                    return {
                        ...state,
                        books: [
                            ...state.books.filter(el => el.id !== payload.id),
                            {
                                ...payload,
                                quantity:
                                    Number(payload.quantity) +
                                    Number(existOrder.quantity),
                                totalPrice:
                                    Number(payload.totalPrice) +
                                    Number(existOrder.totalPrice),
                            },
                        ],
                    };
                }
                return {
                    ...state,
                    books: [...state.books, payload],
                };
            }
            return {
                ...state,
                books: [payload],
            };

        case cartTypes.ADD_BOOK_ERROR:
            return { ...state };

        case cartTypes.PURCHASE_REQUEST:
            return { ...state, loader: true };

        case cartTypes.PURCHASE_SUCCESS:
            notify.success('Thank you for yor order!');
            return {
                ...state,
                books: [],
                loader: false,
            };
        case cartTypes.PURCHASE_ERROR:
            notify.error('Something went wrong');
            return { ...state, error: payload, loader: false };

        default:
            return state;
    }
};
