import React from "react";

type MovieProps = {
	movie: {
		Title: string;
		Year: string;
		imdbID: string;
		Type: string;
		Poster: string;
	};
};

const MovieCard = ({ movie }: MovieProps) => {
	return (
		<div className="movie">
			<div>
				<p>{movie.Year}</p>
			</div>
			<div>
				<img
					src={
						movie.Poster !== "N/A"
							? movie.Poster
							: "https://via.placeholder.com/400"
					}
					alt={movie.Title}
				/>
			</div>
			<div>
				<span>{movie.Type}</span>
				<h3>{movie.Title}</h3>
			</div>
		</div>
	);
};

export default MovieCard;
