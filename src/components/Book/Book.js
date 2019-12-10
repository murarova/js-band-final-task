/* eslint-disable react/require-default-props */
import React from 'react';
import {
    titleType,
    authorType,
    descriptionType,
    coverType,
    priceType,
} from '../../constants/types';

const Book = ({ title, price, author, description, cover }) => (
    <div className="book">
        <div className="img-wrapper">
            <img src={cover} alt="book cover" />
        </div>
        <p className="book-title title">{title}</p>
        <p className="book-author text">{author}</p>
        <p className="book-description text">{description}</p>
        <div className="actions">
            <span className="price">{price} uah</span>
            <button type="button" className="btn btn-success">
                View
            </button>
        </div>
    </div>
);

Book.propTypes = {
    title: titleType,
    price: priceType,
    author: authorType,
    description: descriptionType,
    cover: coverType,
};

export default Book;
