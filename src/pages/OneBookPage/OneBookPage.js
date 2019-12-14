/* eslint-disable react/require-default-props */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import Header from '../../components/Header/Header';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';

import {
    matchType,
    fetchOneBookType,
    bookType,
    loaderType,
    addToCartStartType,
} from '../../constants/types';
import { getOneBook, getLoader } from '../../redux/selectors/selectors';
import * as booksActions from '../../redux/actions/booksActions';
import * as cartActions from '../../redux/actions/cartActions';

class OneBookPage extends Component {
    constructor(props) {
        super(props);
        const { match, fetchOneBook } = props;
        fetchOneBook(match.params.id);
    }

    render() {
        const { match, book, loader, addToCartStart } = this.props;

        return (
            <>
                <Header match={match} />
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
                    book && (
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <img
                                                src={book.cover}
                                                alt="book cover"
                                            />
                                        </div>
                                        <div className="col-sm-6">
                                            <p className="book-title title">
                                                {book.title}
                                            </p>
                                            <p className="book-author text">
                                                {book.author}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <p className="book-description">
                                            {book.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <ShoppingCart
                                        book={book}
                                        onClick={addToCartStart}
                                    />
                                </div>
                            </div>
                        </div>
                    )
                )}
            </>
        );
    }
}

OneBookPage.propTypes = {
    match: matchType,
    book: bookType,
    loader: loaderType,
    fetchOneBook: fetchOneBookType,
    addToCartStart: addToCartStartType,
};

const mapStateToProps = state => ({
    book: getOneBook(state),
    loader: getLoader(state),
});

const mapDispatchToProps = dispatch => ({
    fetchOneBook: id => dispatch(booksActions.fetchOneBook(id)),
    addToCartStart: (title, quantity, totalPrice) =>
        dispatch(cartActions.addToCartStart(title, quantity, totalPrice)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OneBookPage);
