/* eslint-disable react/require-default-props */
import React from 'react';
import { bookType } from '../../constants/types';

const BookCard = ({ book }) => {
    return (
        <div className="book-wrapper">
            <div className="book-info">
                <div className="img-wrapper">
                    <img src={book.cover} alt="book cover" />
                </div>
                <p className="book-title title">{book.title}</p>
                <p className="book-author text">{book.author}</p>
                <p className="book-description text">{book.description}</p>
                <span className="price">{book.price} uah</span>
            </div>
        </div>
    );
};

BookCard.propTypes = {
    book: bookType,
};

export default BookCard;
