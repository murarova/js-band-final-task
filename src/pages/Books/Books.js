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
                        <div className="col-xs-8 col-sm-12">
                            <Filter />
                            {loader ? (
                                <div className="row justify-content-center">
                                    <Loader
                                        className="loader"
                                        type="Oval"
                                        color="#337ab7"
                                        height={55}
                                        width={55}
                                    />
                                </div>
                            ) : (
                                (listings && listings.length && (
                                    <>
                                        <div className="book-list">
                                            <BooksList books={listings} />
                                        </div>
                                        {listings && listings.length > 7 && (
                                            <div className="row justify-content-center">
                                                <div className="">
                                                    <button
                                                        type="button"
                                                        className="btn btn-warning load-more-btn"
                                                        onClick={loadMore}
                                                    >
                                                        Load More
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )) || (
                                    <h2 className="nothing-found">
                                        Nothing found
                                    </h2>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

Books.defaultProps = {
    listings: [],
};

Books.propTypes = {
    match: matchType.isRequired,
    fetchBooks: fetchBooksType.isRequired,
    loader: loaderType.isRequired,
    listings: listingsType,
    loadMore: loadMoreType.isRequired,
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
