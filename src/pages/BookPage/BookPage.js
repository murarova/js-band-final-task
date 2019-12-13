/* eslint-disable react/require-default-props */

import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import { matchType, fetchOneBookType } from '../../constants/types';
import BookCard from '../../components/BookCard/BookCard';
import { getBooks } from '../../redux/selectors/selectors';
import * as booksActions from '../../redux/actions/booksActions';

const BookPage = props => {
    const { match, fetchOneBook } = props;

    const book = fetchOneBook(match.params.id);

    return (
        <>
            <Header match={match} />
            <BookCard book={book} />
        </>
    );
};

BookPage.propTypes = {
    match: matchType,
    // book: bookType,
    fetchOneBook: fetchOneBookType,
};

const mapStateToProps = state => ({
    books: getBooks(state),
});

const mapDispatchToProps = dispatch => ({
    fetchOneBook: id => dispatch(booksActions.fetchOneBook(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);
