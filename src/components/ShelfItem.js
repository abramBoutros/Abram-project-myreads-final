import React from "react";

import BooksList from "./BooksList";
const ShelfItem = ({ title, books, adjustBookShelf }) => {
	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{title}</h2>
			<div className="bookshelf-books">
				<BooksList books={books} adjustBookShelf={adjustBookShelf} />
			</div>
		</div>
	);
};

export default ShelfItem;

// <ol className="books-grid">
// 	<BooksList books={books} />
// 	<li>
// 		<div className="book">
// 			<div className="book-top">
// 				<div
// 					className="book-cover"
// 					style={{
// 						width: 128,
// 						height: 192,
// 						backgroundImage:
// 							'url("http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api")',
// 					}}
// 				/>
// 				<SelectBook />
// 			</div>
// 			<div className="book-title">Harry Potter and the Sorcerer's Stone</div>
// 			<div className="book-authors">J.K. Rowling</div>
// 		</div>
// 	</li>
// </ol>;
