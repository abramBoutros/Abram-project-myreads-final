import React from "react";
import { Link } from "react-router-dom";

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
