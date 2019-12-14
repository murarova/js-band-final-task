import React from 'react';
import Book from '../Book/Book';
import { booksType } from '../../constants/types';

const BooksList = ({ books }) => {
    return books && books.length ? (
        books.map(book => (
            <Book
                key={book.id}
                id={book.id}
                title={book.title}
                price={book.price}
                author={book.author}
                description={book.description}
                cover={book.cover}
            />
        ))
    ) : (
        <p>Переучет, приходите завтра</p>
    );
};

BooksList.defaultProps = {
    books: [],
};

BooksList.propTypes = {
    books: booksType,
};

export default BooksList;
