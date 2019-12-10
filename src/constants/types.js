import PropTypes from 'prop-types';

const { shape, arrayOf, number, string, func, bool } = PropTypes;

export const onSubmitType = func.isRequired;
export const searchByTitleType = func.isRequired;
export const errorType = string;

// ========= Books ===========

export const titleType = string.isRequired;
export const priceType = number.isRequired;
export const authorType = string.isRequired;
export const descriptionType = string.isRequired;
export const coverType = string.isRequired;

export const booksType = arrayOf(
    shape({
        idType: string.isRequired,
        titleType: string.isRequired,
        authorType: string.isRequired,
        levelType: string.isRequired,
        descriptionType: string.isRequired,
        coverType: string.isRequired,
        tagsType: arrayOf(string),
    }),
);

// ============================

export const matchType = shape({
    path: string.isRequired,
    url: string.isRequired,
    isExact: bool.isRequired,
}).isRequired;

export const logoutType = func.isRequired;
export const usernameType = string;
export const avatarType = string;

export const fetchBooksType = func.isRequired;
export const loaderType = bool.isRequired;
export const listingsType = arrayOf(
    shape({
        idType: string.isRequired,
        titleType: string.isRequired,
        authorType: string.isRequired,
        levelType: string.isRequired,
        descriptionType: string.isRequired,
        coverType: string.isRequired,
        tagsType: arrayOf(string),
    }),
).isRequired;

export const loadMoreType = func.isRequired;
export const tokenType = string;
export const iconType = string.isRequired;
// export const
