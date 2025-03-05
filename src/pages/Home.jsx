import React from 'react'
import { useWatchlist } from '../hooks/useWatchlist'
import { movies } from '../data/dataMovies' 
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'


const Home = () => {
    const { watchlist, addToWatchlist, removeFromWatchlist, clearList } = useWatchlist();

    // console.log('watchlist -->', watchlist);
    
    return (
        <>
            {/* Page */}
            <div className="min-h-screen bg-gray-800 text-white">
                
                {/* header */}
                <Header
                    watchlist={watchlist}
                    removeFromWatchlist={removeFromWatchlist}
                    clearList={clearList}
                />

                {/* body */}
                <Body
                    movies={movies}
                    addToWatchlist={addToWatchlist}
                />

                {/* footer */}
                <Footer/>
            </div>
        </>
    )
}

export default Home