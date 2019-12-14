import React from 'react';
import { Link } from 'react-router-dom';
import {
    idType,
    titleType,
    authorType,
    descriptionType,
    coverType,
    priceType,
} from '../../constants/types';

const Book = ({ title, price, author, description, cover, id }) => (
    <div className="book">
        <Link to={`/books/${id}`}>
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
        </Link>
    </div>
);

Book.propTypes = {
    id: idType.isRequired,
    title: titleType.isRequired,
    price: priceType.isRequired,
    author: authorType.isRequired,
    description: descriptionType.isRequired,
    cover: coverType.isRequired,
};

export default Book;
