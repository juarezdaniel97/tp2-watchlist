import React from 'react'
import MovieList from './MovieList'

const Body = ( { movies }) => {
    return (
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold text-center mb-4">Lista de Películas</h1>
                    <MovieList movies={movies} />
            </div>
    )
}

export default Body