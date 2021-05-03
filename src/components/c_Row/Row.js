import React, {useState, useEffect} from 'react';
import './Row.scss';
import tmdbURL from '../../modules/tools/tmdbURL';
import requests from '../../modules/tools/requests'
import YouTube from 'react-youtube'
const imageURL = 'https://image.tmdb.org/t/p/w500/';

function Row({title, fetchURL, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerURL, setTrailer] = useState("");

    useEffect(()=>{ 
        async function fetcData() {
        const request = await tmdbURL.get(fetchURL);
        setMovies(request.data.results)
        return request
        }fetcData()
    }, [fetchURL]);    

    // const mapMovies = (param) => {movies.map(movie=> {
    //     return movie
    //     })};mapMovies(movie)
        

    const showTrailer = async(movie) => {
        if (trailerURL){setTrailer('')} 
        else {const trailerURL = `http://api.themoviedb.org/3/movie/${movie.id}/videos?${requests.trailerKey}`
        await fetch (trailerURL).then(res => res.json()).then((trailer) => {
        const video = trailer.results[0]?.key || '' 
        console.log(movie.name)
        setTrailer(video)}).catch(error => console.log(error))}}
        
    
const opts = {
    height: '500px',
    width: '100%',
    playerVars: {
        autoplay:1
    }
}

    return (
        <div className="row__">
        <div className='trailer'> {trailerURL && <YouTube videoId={trailerURL} opts={opts}/>}</div>
            <h2 className='row__title'>{title}</h2>
            <div className="row__posters">
                {movies.map(movie =>(
                    <img 
                    key={movie?.id}
                    onClick={()=> showTrailer(movie)}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`${imageURL}${isLargeRow ? movie?.poster_path : movie?.backdrop_path }`} 
                    alt={movie?.name || ""}/>
                    ))}
            </div>  
        </div>
    )
}

export default Row



//useEffect(()=>{}, [fetchURL]); FetchURL is an external variable to 
//useEffect, thus we need to keep it updated with any changes to 
//therefore run the function again