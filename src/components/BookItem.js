import React from "react";
import SelectShelf from "./SelectShelf";

// this component is responsible to generate a book for either search or home page
// depending on the passed props

const BookItem = ({ book, savedBooks, foundBooks, adjustBookShelf }) => {
	return (
		<li>
			<div className="book">
				<div className="book-top">
					<img
						className="book-cover"
						style={{
							width: 128,
							height: 193,
						}}
						src={
							book.imageLinks && book.imageLinks.thumbnail
								? book.imageLinks.thumbnail
								: "https://www.freepik.com/free-vector/error-404-concept-landing-page_5156002.htm#page=1&query=404&position=13&from_view=keyword"
						}
						alt={book.description}
					/>
					<SelectShelf
						book={book}
						savedBooks={savedBooks}
						adjustBookShelf={adjustBookShelf}
						foundBooks={foundBooks}
					/>
				</div>
				<div className="book-title">{book.title}</div>
				{book.authors &&
					book.authors.map((author, index) => (
						<div className="book-authors" key={index}>
							{author}
						</div>
					))}
			</div>
		</li>
	);
};

export default BookItem;
