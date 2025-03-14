import React from 'react'
import { movies } from '../data/dataMovies' 
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'
import { useWatchlistContext } from '../contexts/watchlistContext'


const Home = () => {
    
    const{ watchlist, addToWatchlist} = useWatchlistContext()
    console.log('watchlist -->', watchlist);
    
    return (
        <>
            {/* Page */}
            <div className="min-h-screen bg-gray-800 text-white">
                
                {/* header */}
                <Header/>

                {/* body */}
                <Body
                    movies={movies}
                />

                {/* footer */}
                <Footer/>
            </div>
        </>
    )
}

export default Home