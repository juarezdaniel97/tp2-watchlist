import React from 'react'

const MovieCard = ({movie, onAdd}) => {
    return (
        <div className="bg-gray-700 p-4 rounded-lg shadow-lg text-center">
            <img src={movie.image} alt={movie.title} className="w-full h-40 object-cover rounded-md" />
            <h2 className="text-lg font-bold my-2">{movie.title}</h2>
            
            <button
                className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer"
                onClick={() => onAdd(movie)}
            >
                Agregar a mi lista
            </button>
        </div>
    )
}

export default MovieCard