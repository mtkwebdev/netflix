import React, {useState, useEffect} from 'react';
import tmdbURL from '../../modules/tools/tmdbURL';
import requests from '../../modules/tools/requests';
import './Banner.scss'


function Banner() {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
           const request = await tmdbURL.get(requests.fetchNetflixOriginals)
           setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length -1)
                ]
            ); 
        return request};  
        fetchData()
      
    }, []); 

   
        // console.log(movie)
   
        return (
        <header className='banner'
        style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,}}>
            <div className="banner__contents">
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">{movie?.overview}</h1>
            </div>
        </header>
    )
}
export default Banner
