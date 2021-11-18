import React from "react";

import OpenSearch from "./OpenSearch";
import Head from "./Head";
import Shelves from "./Shelves";

const Home = ({ books, adjustBookShelf }) => {
	return (
		<div className="list-books">
			<Head />
			<Shelves books={books} adjustBookShelf={adjustBookShelf} />
			<OpenSearch />
		</div>
	);
};

export default Home;
