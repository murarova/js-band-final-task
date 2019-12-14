import PropTypes from 'prop-types';

const { shape, arrayOf, number, string, func, bool } = PropTypes;

// ========= functions =======

export const onSubmitType = func;
export const addToCartStartType = func;
export const onClickType = func;
export const searchByTitleType = func;
export const filterByPriceType = func;
export const purchaseRequestType = func;
export const logoutType = func;
export const fetchOneBookType = func;
export const fetchBooksType = func;
export const loadMoreType = func;

// ========= Books ===========

export const idType = string;
export const titleType = string;
export const priceType = number;
export const authorType = string;
export const descriptionType = string;
export const coverType = string;
export const levelType = string;

export const bookType = shape({
    idType,
    titleType,
    authorType,
    levelType,
    descriptionType,
    coverType,
    tagsType: arrayOf(string),
});

export const booksType = arrayOf(bookType);
export const listingsType = arrayOf(booksType);

// =========== cart ===========

export const orderType = shape({
    idType,
    titleType,
    priceType,
});
export const cartType = arrayOf(orderType);

// =========== else ===========

export const usernameType = string;
export const avatarType = string;
export const loaderType = bool;
export const tokenType = string;
export const iconType = string;
export const errorType = string;
export const matchType = shape({
    path: string,
    url: string,
    isExact: bool,
});
