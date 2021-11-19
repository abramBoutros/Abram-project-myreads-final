import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = (props) => {
	const [term, setTerm] = useState("");

	const onInput = (e) => {
		avoidLatency(e);
		props.onNewEntry(term);
	};

	const avoidLatency = (event) => {
		setTerm(event.target.value);
	};

	return (
		<div className="search-books-bar">
			<nav>
				<Link to="/">
					<button className="close-search" />
				</Link>
			</nav>
			<div className="search-books-input-wrapper">
				<input
					placeholder="Search by title or author"
					type="text"
					value={term}
					onChange={onInput}
				/>
			</div>
		</div>
	);
};

export default SearchBar;

/** 
				<div className="search-books-input-wrapper">
					{/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          }
					<input type="text" placeholder="Search by title or author" />
				</div>
 */
