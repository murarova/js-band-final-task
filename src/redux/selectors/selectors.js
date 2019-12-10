export const getToken = state => state.session.token;
export const getSession = state => state.session;
export const getUsername = state => state.session.username;
export const getAvatar = state => state.session.avatar;
export const getError = state => state.session.error;

export const getBooks = state => state.books.books;
export const getLoader = state => state.books.loader;
export const getListings = state => state.books.listings;
