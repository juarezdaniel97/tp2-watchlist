import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, onAdd }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} onAdd={onAdd} />
            ))}
        </div>
    );
};

export default MovieList;
