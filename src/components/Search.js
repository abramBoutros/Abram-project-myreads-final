import React, { useState } from "react";
import * as BooksAPI from "../BooksAPI";

import SearchBar from "./SearchBar";
import FoundBooks from "./FoundBooks";

const Search = ({ savedBooks, adjustBookShelf }) => {
	const [foundBooks, setFoundBooks] = useState([]);
	const [searchEmpty, setSearchEmpty] = useState(false);

	const onNewEntry = async (term) => {
		// if term exist run the search
		if (term) {
			// use the api search and trim the term from white spaces
			BooksAPI.search(term.trim()).then((foundBooks) => {
				// if any books were found update the found books
				if (foundBooks.length > 0) {
					avoidLatency(foundBooks);
					setSearchEmpty(false);
				} else {
					// else send empty msg
					setFoundBooks([]);
					setSearchEmpty(true);
				}
			});

			// if term is empty dont search and clean the found books array
		} else {
			setFoundBooks([]);
			setSearchEmpty(false);
		}
	};

	// add this function to pass to other functions to avoid the latency in the search
	const avoidLatency = (foundBooks) => {
		setFoundBooks(foundBooks);
	};

	return (
		<div className="search-books">
			<SearchBar onNewEntry={onNewEntry} />

			<div className="search-books-results">
				{foundBooks.length > 0 && (
					<ol className="books-grid">
						<h3>Found {foundBooks.length} books </h3>
						<FoundBooks
							savedBooks={savedBooks}
							foundBooks={foundBooks}
							adjustBookShelf={adjustBookShelf}
						/>
					</ol>
				)}
			</div>
			{searchEmpty && <h3>No matched books were found!</h3>}
		</div>
	);
};

export default Search;
