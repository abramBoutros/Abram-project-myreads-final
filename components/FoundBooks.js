import React from "react";

import BookItem from "./BookItem";
const FoundBooks = ({ foundBooks, savedBooks, adjustBookShelf }) => {
	// make a nested for loop to compare the found books and the stored books
	// loop over the saved books
	for (let i = 0; i < savedBooks.length; i++) {
		// for every saved book compare it to the found books
		for (let y = 0; y < foundBooks.length; y++) {
			if (savedBooks[i].id === foundBooks[y].id) {
				// if there is a match adjust the shelf for the found book
				foundBooks[y].shelf = savedBooks[i].shelf;
			}
		}
	}
	return (
		<ol className="books-grid">
			{foundBooks.map((book) => (
				<BookItem
					book={book}
					key={book.id}
					savedBooks={savedBooks}
					foundBooks={foundBooks}
					adjustBookShelf={adjustBookShelf}
				/>
			))}
		</ol>
	);
};

export default FoundBooks;
