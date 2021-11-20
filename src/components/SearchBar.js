import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = (props) => {
	const [term, setTerm] = useState("");

	// I tried to set the state by a cb function to avoid latency
	const onInput = (e) => {
		// I tried to add async/await to solve the one entry latency that's happening
		avoidLatency(e);

		props.onNewEntry(e.target.value);
	};

	const avoidLatency = (e) => {
		// set the term state to the new value after last entry
		setTerm(e.target.value);
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
