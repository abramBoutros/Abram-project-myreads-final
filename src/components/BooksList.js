import React from "react";

// this component is to generate a list of books for the home page

import BookItem from "./BookItem";
const BooksList = ({ savedBooks, adjustBookShelf }) => {
	return (
		<ol className="books-grid">
			{savedBooks.map((book) => (
				<BookItem
					book={book}
					key={book.id}
					savedBooks={savedBooks}
					adjustBookShelf={adjustBookShelf}
				/>
			))}
		</ol>
	);
};

export default BooksList;

// original script

// <div className="list-books-content">
// 	<div>
// 		<div className="bookshelf">
// 			<h2 className="bookshelf-title">Currently Reading</h2>
// 			<div className="bookshelf-books">
// 				<ol className="books-grid">
// 					{books.map((book) => (
// 						<BookItem book={book} />
// 					))}
// 				</ol>
// 			</div>
// 		</div>
// 		<div className="bookshelf">
// 			<h2 className="bookshelf-title">Want to Read</h2>
// 			<div className="bookshelf-books">
// 				<ol className="books-grid">
// 					<li>
// 						<div className="book">
// 							<div className="book-top">
// 								<div
// 									className="book-cover"
// 									style={{
// 										width: 128,
// 										height: 193	}}
// 								 />
// 								<SelectBook />
// 							</div>
// 							<div className="book-title">1776</div>
// 							<div className="book-authors">David McCullough</div>
// 						</div>
// 					</li>
// 					<li>
// 						<div className="book">
// 							<div className="book-top">
// 								<div
// 									className="book-cover"
// 									style={{
// 										width: 128,
// 										height: 192,
// 									}}
// 								/>
// 								<SelectBook />
// 							</div>
// 							<div className="book-title">
// 								Harry Potter and the Sorcerer's Stone
// 							</div>
// 							<div className="book-authors">J.K. Rowling</div>
// 						</div>
// 					</li>
// 				</ol>
// 			</div>
// 		</div>
// 		<div className="bookshelf">
// 			<h2 className="bookshelf-title">Read</h2>
// 			<div className="bookshelf-books">
// 				<ol className="books-grid">
// 					<li>
// 						<div className="book">
// 							<div className="book-top">
// 								<div
// 									className="book-cover"
// 									style={{
// 										width: 128,
// 										height: 192,}}
// 								/>
// 								<SelectBook />
// 							</div>
// 							<div className="book-title">The Hobbit</div>
// 							<div className="book-authors">J.R.R. Tolkien</div>
// 						</div>
// 					</li>
// 					<li>
// 						<div className="book">
// 							<div className="book-top">
// 								<div
// 									className="book-cover"
// 									style={{
// 										width: 128,
// 										height: 174,}}
// 								/>
// 								<SelectBook />
// 							</div>
// 							<div className="book-title">
// 								The Adventures of Tom Sawyer
// 							</div>
// 							<div className="book-authors">Mark Twain</div>
// 						</div>
// 					</li>
// 				</ol>
// 			</div>
// 		</div>
// 	</div>
// </div>;
