import React from "react";

const SelectShelf = ({ book, books, foundBooks, adjustBookShelf }) => {
	// set current shelf to none as default
	let storedShelf = "none";

	// this component is used for search and home page
	// so i made this switch to make it useable for both components
	if (books) {
		for (let item of books) {
			if (item.id === book.id) {
				storedShelf = book.shelf;
				break;
			}
		}
	} else {
		for (let item of foundBooks) {
			if (item.id === book.id) {
				storedShelf = book.shelf;
				break;
			}
		}
	}

	return (
		<div className="book-shelf-changer">
			<select
				defaultValue={storedShelf}
				onChange={(e) => adjustBookShelf(book, e.target.value)}
			>
				<option value="move" disabled>
					Move to...
				</option>
				<option value="currentlyReading">Currently Reading</option>
				<option value="wantToRead">Want to Read</option>
				<option value="read">Read</option>
				<option value="none">None</option>
			</select>
		</div>
	);
};

export default SelectShelf;
