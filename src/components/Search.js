import React, { useState } from "react";
import * as BooksAPI from "../BooksAPI";

import SearchBar from "./SearchBar";
import FoundBooks from "./FoundBooks";

const Search = ({ books, adjustBookShelf }) => {
	const [query, setQuery] = useState("");
	const [foundBooks, setFoundBooks] = useState([]);
	const [searchErr, setSearchErr] = useState(false);

	const onNewEntry = async (term) => {
		const res = await BooksAPI.search(term);

		// I know the search is always one letter late but i can't find that issue
		// It could be from the api itself
		setQuery(res);

		// if user input => run the search
		if (term) {
			BooksAPI.search(term.trim()).then((foundBooks) => {
				if (foundBooks.length > 0) {
					setFoundBooks(foundBooks);
					setSearchErr(false);
				} else {
					setFoundBooks([]);
					setSearchErr(true);
				}
			});

			// if term is empty => reset state to default
		} else {
			setFoundBooks([]);
			setSearchErr(false);
		}
	};

	return (
		<div className="search-books">
			<SearchBar onNewEntry={onNewEntry} />

			<div className="search-books-results">
				{foundBooks.length > 0 && (
					<ol className="books-grid">
						<h3>Found {foundBooks.length} books </h3>
						<FoundBooks
							books={books}
							foundBooks={foundBooks}
							adjustBookShelf={adjustBookShelf}
							query={query}
						/>
					</ol>
				)}
			</div>
			{searchErr && <h3>No matched books were found!</h3>}
		</div>
	);
};

export default Search;
