import React from "react";
import ShelfItem from "./ShelfItem";

const Shelves = ({ savedBooks, adjustBookShelf }) => {
	const currentlyReadingBooks = savedBooks.filter(
		(book) => book.shelf === "currentlyReading"
	);
	const wantToReadBooks = savedBooks.filter(
		(book) => book.shelf === "wantToRead"
	);
	const readBooks = savedBooks.filter((book) => book.shelf === "read");
	return (
		<div>
			<ShelfItem
				title="Currently Reading"
				savedBooks={currentlyReadingBooks}
				adjustBookShelf={adjustBookShelf}
			/>
			<ShelfItem
				title="Want to Read"
				savedBooks={wantToReadBooks}
				adjustBookShelf={adjustBookShelf}
			/>
			<ShelfItem
				title="Read"
				savedBooks={readBooks}
				adjustBookShelf={adjustBookShelf}
			/>
		</div>
	);
};

export default Shelves;
