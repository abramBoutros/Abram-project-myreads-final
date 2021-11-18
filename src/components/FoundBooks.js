import React from "react";

import BookItem from "./BookItem";
const BooksList = ({ foundBooks, books, adjustBookShelf }) => {
	for (let i = 0; i < books.length; i++) {
		for (let y = 0; y < foundBooks.length; y++) {
			if (books[i].id === foundBooks[y].id) {
				foundBooks[y].shelf = books[i].shelf;
			}
		}
	}
	return (
		<ol className="books-grid">
			{foundBooks.map((book) => (
				<BookItem
					book={book}
					key={book.id}
					books={books}
					foundBooks={foundBooks}
					adjustBookShelf={adjustBookShelf}
				/>
			))}
		</ol>
	);
};

export default BooksList;
