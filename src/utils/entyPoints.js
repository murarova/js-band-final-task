/* eslint-disable import/prefer-default-export */
export const url = {
    loginUser: () => '/signin',
    books: () => '/books',
    oneBook: id => `/books/${id}`,
    purchase: () => '/purchase',
};
