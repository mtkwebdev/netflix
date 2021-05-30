import React from 'react'
import './styles/App.css';
import requests from './modules/tools/requests';
import Row from './components/c_Row/Row'
import Banner from './components/c_Banner/Banner'
import Nav from './components/c_Nav/Nav'
require('dotenv').config();

function App() {
  return (
    <div className='App'>
      <Nav/>
      <Banner />
      <Row isLargeRow={true} title='Trending Now' fetchURL={requests.fetchTrendingWeekly}/>
      <Row title='Netflix Originals' fetchURL={requests.fetchNetflixOriginals} />
      <Row title='Top Rated Movies' fetchURL={requests.fetchTopRatedMovies}/>
      <Row title='Action Movies' fetchURL={requests.fetchActionMovies}/>
      <Row title='Comedy Movies' fetchURL={requests.fetchComedyMovies}/>
      <Row title='Horror Movies' fetchURL={requests.fetchHorrorMovies}/>
      <Row title='Romance Movies' fetchURL={requests.fetchRomanceMovies}/>
      <Row title='Documentaries' fetchURL={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
