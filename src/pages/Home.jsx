import React from 'react'
import { movies } from '../data/dataMovies' 
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'


const Home = () => {
    
    return (
        <>
            {/* Page */}
            <div className="min-h-screen bg-gray-800 text-white">
                
                {/* header */}
                <Header/>

                {/* body */}
                <Body/>

                {/* footer */}
                <Footer/>
            </div>
        </>
    )
}

export default Home