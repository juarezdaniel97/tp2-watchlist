import React, { useState } from 'react';
import WatchlistModal from './WatchlistModal';
import logoMovie from '../assets/movie-logo.png';


const Header = ({watchlist, removeFromWatchlist,  clearList}) => {
    
    const [isOpen, setIsOpen] = useState(false)
    //const { watchlist, removeFromWatchlist, vaciarLista } = useWatchlist(); 


    return (
        <>
            <header className="flex justify-between items-center bg-gray-900 p-4 text-white shadow-md">
                {/* Logo */}
                <div className="text-xl font-bold">
                    <img 
                        src={logoMovie}
                        alt="Logo Movie" 
                        className="h-14 w-16"/>
                </div>

                {/* Botón para abrir el modal */}
                <button
                    className="bg-green-700 px-4 py-2 rounded-lg hover:bg-green-600 transition cursor-pointer"
                    onClick={() => setIsOpen(true)}
                >
                    My Watchlist
                </button>
            </header>


            {/* modificar y armar un componente */}
            {
                isOpen && (
                    <WatchlistModal
                        watchlist={watchlist}
                        removeFromWatchlist={removeFromWatchlist}
                        setIsOpen={setIsOpen}
                        clearList={clearList}
                />
                )
            }
        </>
    )
}

export default Header