import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./app.css";

const API_URL = "http://www.omdbapi.com/?apikey=c8757789";

const App = () => {
	const [movies, setMovies] = useState<any[]>([]);
	const [searchTerm, setSearchTerm] = useState("");

	const searchMovies = async (title: string) => {
		const response = await fetch(API_URL + "&s=" + title);
		const data = await response.json();

		setMovies(data.Search);
	};

	useEffect(() => {
		searchMovies("Spiderman");
	}, []);

	return (
		<div className="app">
			<h1>MovieLand</h1>

			<div className="search">
				<input
					placeholder="Search for movies"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<svg
					width="42"
					height="42"
					viewBox="0 0 42 42"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					onClick={() => searchMovies(searchTerm)}
					style={{ cursor: "pointer" }} // Optional: Add cursor pointer for better UX
				>
					<path
						d="M29.8594 29.8594L39.4219 39.4219"
						stroke="#D88769"
						strokeWidth="4.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M17.9062 33.0469C26.2682 33.0469 33.0469 26.2682 33.0469 17.9062C33.0469 9.54431 26.2682 2.76562 17.9062 2.76562C9.54431 2.76562 2.76562 9.54431 2.76562 17.9062C2.76562 26.2682 9.54431 33.0469 17.9062 33.0469Z"
						stroke="#D88769"
						strokeWidth="4.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>

			{movies?.length > 0 ? (
				<div className="container">
					{movies.map((movie) => (
						<MovieCard key={movie} movie={movie} />
					))}
				</div>
			) : (
				<div>
					<h2>No movies found</h2>
				</div>
			)}
		</div>
	);
};

export default App;
