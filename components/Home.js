import React from "react";

import OpenSearch from "./OpenSearch";
import Head from "./Head";
import Shelves from "./Shelves";

const Home = ({ savedBooks, adjustBookShelf }) => {
	return (
		<div className="list-books">
			<Head />
			<Shelves savedBooks={savedBooks} adjustBookShelf={adjustBookShelf} />
			<OpenSearch />
		</div>
	);
};

export default Home;
