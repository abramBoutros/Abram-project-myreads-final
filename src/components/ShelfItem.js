import React from "react";

import BooksList from "./BooksList";
// this component is responsible for creating every shelf in the home page
// in this project it's used 3 times to create 3 shelves
// 1- Currently Reading   2- Want to Read   3- Read
// for each shelf we have title and saved books on this shelf
// adjustBookShelf function is passed as a CB to bookList
const ShelfItem = ({ title, savedBooks, adjustBookShelf }) => {
	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{title}</h2>
			<div className="bookshelf-books">
				<BooksList
					savedBooks={savedBooks}
					adjustBookShelf={adjustBookShelf}
				/>
			</div>
		</div>
	);
};

export default ShelfItem;
