import React from "react";
import Button from "./Button";
import { Trash2, X } from "lucide-react";

const WatchlistModal = ({ watchlist, removeFromWatchlist, setIsOpen, clearList }) => {

    console.log('watchlist -->', watchlist);
    

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 opacity-90 shadow-md">
            <div className="bg-white text-black p-6 rounded-lg shadow-lg w-96 relative">
                
                {/* Button Close */}
                <Button
                    style={'absolute top-2 right-2 text-gray-600 hover:text-gray-800 cursor-pointer'}
                    action={setIsOpen}
                    name={<X className="w-5 h-5" />}
                />

                {/* Title */}
                <h2 className="text-xl font-bold text-center mb-5">Watchlist 🎬</h2>

                {/* Movies List */}
                <ul className="max-h-60 overflow-y-auto border-t border-b">
                    {
                        watchlist.length > 0 ?
                            (
                                watchlist.map((movie) =>(
                                    <li 
                                        key={movie.id}
                                        className="px-4 py-2 flex items-center gap-2 border-b last:border-none hover:bg-gray-100"
                                    >
                                        <div className="flex items-center gap-3 w-full">
                                            <img 
                                                src={movie.image} 
                                                alt={movie.title}
                                                className="w-10 h-10 rounded-md"
                                            />
                                            <span> {movie.title} </span>
                                        </div>
                                        
                                        <div>
                                            {/* Button delete for id */}
                                            <Button
                                                style={'text-red-700 hover:text-red-600 cursor-pointer'}
                                                action={removeFromWatchlist}
                                                name={<Trash2 className="w-5 h-5"/>}
                                                param={movie.id}
                                            />
                                        </div>
                                    </li>
                                ))
                            ) : (<p className="text-center text-gray-500 m-3">No hay películas</p>)
                    }
                </ul>

                {watchlist.length > 0 && (
                    <Button
                        style={'w-full mt-4 bg-red-700 text-white py-2 rounded-lg hover:bg-red-600 transition cursor-pointer'}
                        action={clearList}
                        name={'Vacir Lista'}
                    />
                )}

            </div>
        </div>
    );
};

export default WatchlistModal;
