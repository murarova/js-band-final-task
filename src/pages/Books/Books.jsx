/* eslint-disable react/require-default-props */
import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import BooksList from '../../components/BooksList/BooksList';
import * as booksActions from '../../redux/actions/booksActions';
import {
    getBooks,
    getLoader,
    getListings,
} from '../../redux/selectors/selectors';

import Filter from '../../components/Filter/Filter';

import {
    fetchBooksType,
    loaderType,
    listingsType,
    loadMoreType,
    matchType,
} from '../../constants/types';

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const { fetchBooks } = this.props;
        fetchBooks();
    }

    render() {
        const { match, loader, listings, loadMore } = this.props;
        return (
            <>
                <Header match={match} />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xs-10 col-sm-12">
                            <Filter />
                            <div className="book-list">
                                {loader ? (
                                    <div className="loader">
                                        <Loader
                                            type="Oval"
                                            color="#284060"
                                            height={35}
                                            width={35}
                                            timeout={3000}
                                        />
                                    </div>
                                ) : (
                                    <>
                                        <BooksList books={listings} />
                                        <button
                                            type="button"
                                            className="btn btn-warning"
                                            onClick={loadMore}
                                        >
                                            Load More
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

Books.propTypes = {
    match: matchType,
    fetchBooks: fetchBooksType,
    loader: loaderType,
    listings: listingsType,
    loadMore: loadMoreType,
};

const mapStateToProps = state => ({
    books: getBooks(state),
    loader: getLoader(state),
    listings: getListings(state),
});

const mapDispatchToProps = dispatch => ({
    fetchBooks: () => dispatch(booksActions.fetchBooks()),
    loadMore: () => dispatch(booksActions.loadMore()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Books);
