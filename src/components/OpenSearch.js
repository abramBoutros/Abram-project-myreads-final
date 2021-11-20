import React from "react";
import { Link } from "react-router-dom";

// this class responsibility is to return open search btn link jsx which based in the home page
const OpenSearch = () => {
	return (
		<div className="open-search">
			<nav>
				<Link to="/search">
					<button className="close-search" />
				</Link>
			</nav>
		</div>
	);
};

export default OpenSearch;
