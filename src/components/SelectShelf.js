import React from "react";

// this component is used for search and home routes
// depending on the passed props, the functionality of this component is determined

const SelectShelf = ({ book, savedBooks, foundBooks, adjustBookShelf }) => {
	// set current shelf to none as default
	let storedShelf = "none";

	// this component is used for search and home page
	// so i made this switch to make it useable for both components

	// if the props is coming from the Home(savedBooks)
	if (savedBooks) {
		// loop over the saved books on the home page and select each book's shelf (defaultValue)
		for (let savedBook of savedBooks) {
			if (savedBook.id === book.id) {
				storedShelf = book.shelf;
				break;
			}
		}
	}
	// or if the props are coming from the search page(foundBooks)
	else {
		// loop over the saved books on the search page and select each book's shelf (defaultValue)
		for (let foundBook of foundBooks) {
			if (foundBook.id === book.id) {
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
