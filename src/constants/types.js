import PropTypes from 'prop-types';

const { shape, arrayOf, number, string, func, bool } = PropTypes;

export const onSubmitType = func;
export const searchByTitleType = func;
export const filterByPriceType = func;
export const errorType = string;

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

// ============================

export const matchType = shape({
    path: string,
    url: string,
    isExact: bool,
});

export const logoutType = func;
export const usernameType = string;
export const avatarType = string;

export const fetchOneBookType = func;
export const fetchBooksType = func;
export const loaderType = bool;
export const listingsType = arrayOf(booksType);

export const loadMoreType = func;
export const tokenType = string;
export const iconType = string;
