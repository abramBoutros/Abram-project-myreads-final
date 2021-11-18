import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Search from "./components/Search";
import Home from "./components/Home";
import * as BooksAPI from "./BooksAPI";

const App = () => {
	const [isDay, setIsDay] = useState("app");
	/* added extra feature to make my project stand out */
	// when it's between 6pm and 4am give the background dark mode

	useEffect(() => {
		// Create a new date instance dynamically with JS
		let d = new Date().getHours();
		if (d >= 17 || d <= 4) {
			setIsDay("app dark");
		} else {
			// from 4am to 6pm
			setIsDay("app");
		}
	}, []);

	const [books, setBooks] = useState([]);
	const adjustBookShelf = (changedBook, shelf) => {
		BooksAPI.update(changedBook, shelf).then(() => {
			changedBook.shelf = shelf;
			setBooks(
				books
					.filter((book) => book.id !== changedBook.id)
					.concat(changedBook)
			);
		});
	};

	// I didn't make the useEffect cb function an async/await
	//cuz it was giving me an error so I made an IIFE
	useEffect(() => {
		const getBooks = async () => {
			setBooks(await BooksAPI.getAll());
		};
		getBooks();
	}, []);

	return (
		<div className={isDay}>
			<Routes>
				<Route
					path="/search"
					element={
						<Search books={books} adjustBookShelf={adjustBookShelf} />
					}
				/>
				<Route path="/" element={<Navigate to="/home" />} />
				<Route
					path="/home"
					element={
						<Home books={books} adjustBookShelf={adjustBookShelf} />
					}
				/>
			</Routes>
		</div>
	);
};

export default App;
