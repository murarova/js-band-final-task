const filterBooks = (books, search) => {
    return books.filter(book => {
        if (search.price === 'price') {
            return (
                book.title.toLowerCase().includes(search.title.toLowerCase()) ||
                ''
            );
        }
        if (search.price === 'low') {
            return (
                (book.price <= 15 &&
                    book.title
                        .toLowerCase()
                        .includes(search.title.toLowerCase())) ||
                ''
            );
        }
        if (search.price === 'medium') {
            return (
                (book.price > 15 &&
                    book.price <= 30 &&
                    book.title
                        .toLowerCase()
                        .includes(search.title.toLowerCase())) ||
                ''
            );
        }
        if (search.price === 'high') {
            return (
                (book.price >= 30 &&
                    book.title
                        .toLowerCase()
                        .includes(search.title.toLowerCase())) ||
                ''
            );
        }
        return false;
    });
};

export default filterBooks;
