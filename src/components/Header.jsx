import React, { useState } from 'react'
import { X, Trash2 } from 'lucide-react';
import { useWatchlist } from '../hooks/useWatchlist'


const Header = ({watchlist, removeFromWatchlist,  clearList}) => {
    
    const [isOpen, setIsOpen] = useState(false)
    //const { watchlist, removeFromWatchlist, vaciarLista } = useWatchlist(); 


    return (
        <>
            <header className="flex justify-between items-center bg-gray-900 p-4 text-white shadow-md">
                {/* Logo */}
                <div className="text-xl font-bold">🎬 CineApp</div>

                {/* Botón para abrir el modal */}
                <button
                    className="bg-green-700 px-4 py-2 rounded-lg hover:bg-green-600 transition cursor-pointer"
                    onClick={() => setIsOpen(true)}
                >
                    My Watchlist
                </button>
            </header>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-600 opacity-90 shadow-md">
                    
                    <div className="bg-white text-black p-6 rounded-lg shadow-lg w-96 relative">

                        {/* Botón de cierre */}
                        <button
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <h2 className="text-xl font-bold mb-4 text-center">Películas 🎬</h2>

                        {/* Lista de películas */}
                        <ul className='max-h-60 overflow-y-auto border-t border-b'>
                            {
                                watchlist.length > 0 ? (
                                    watchlist.map((peli) => (
                                        <li
                                            key={peli.id}
                                            className="px-4 py-2 flex items-center gap-2 border-b last:border-none hover:bg-gray-100 cursor-pointer"
                                        >
                                            <div className='flex items-center gap-3 w-full  '>
                                                <img
                                                    src={peli.image}
                                                    alt={peli.title}
                                                    className="w-10 h-10 rounded-md"
                                                />
                                                <span>{peli.title}</span>
                                            </div>

                                            <div className='ml-5'>
                                                <button
                                                    onClick={() => removeFromWatchlist(peli.id)}
                                                    className="text-red-500 hover:text-red-700"
                                                    >
                                                    <Trash2 className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </li>
                                    ))) : (<p className="text-center text-gray-500">No hay películas</p>)
                            }
                        </ul>

                        {/* Botón para vaciar la lista */}
                        {watchlist.length > 0 && (
                        <button
                            className="w-full mt-4 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition cursor-pointer"
                            onClick={() => clearList()}
                        >
                            Vaciar Lista
                        </button>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default Header