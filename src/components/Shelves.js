import React from "react";
import ShelfItem from "./ShelfItem";

const Shelves = ({ savedBooks, adjustBookShelf }) => {
	// filter the book to three shelves
	// each shelf contain its books
	// each book contain a shelf property so the filter is based on that

	// this var saves the books on the Currently Reading shelf
	const currentlyReadingBooks = savedBooks.filter(
		(book) => book.shelf === "currentlyReading"
	);
	// this var saves the books on the Want to Read shelf
	const wantToReadBooks = savedBooks.filter(
		(book) => book.shelf === "wantToRead"
	);
	// this var saves the books on the Read shelf
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
