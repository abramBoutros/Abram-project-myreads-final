import React from "react";
import ShelfItem from "./ShelfItem";

const Shelves = ({ books, adjustBookShelf }) => {
	const currentlyReadingBooks = books.filter(
		(book) => book.shelf === "currentlyReading"
	);
	const wantToReadBooks = books.filter((book) => book.shelf === "wantToRead");
	const readBooks = books.filter((book) => book.shelf === "read");
	return (
		<div>
			<ShelfItem
				title="Currently Reading"
				books={currentlyReadingBooks}
				adjustBookShelf={adjustBookShelf}
			/>
			<ShelfItem
				title="Want to Read"
				books={wantToReadBooks}
				adjustBookShelf={adjustBookShelf}
			/>
			<ShelfItem
				title="Read"
				books={readBooks}
				adjustBookShelf={adjustBookShelf}
			/>
		</div>
	);
};

export default Shelves;
