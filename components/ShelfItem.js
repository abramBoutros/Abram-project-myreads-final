import React from "react";

import BooksList from "./BooksList";
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
