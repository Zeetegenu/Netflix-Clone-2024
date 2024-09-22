import React from 'react'
import Row from '../Row/Row'
import requests from '../../utils/requests'

const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals} 
        isLargeRow={true}
        />
      <Row title="Trending Now" fetchUrl={requests.fetchTreading} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanticMovies} />
      <Row title="TV Shows" fetchUrl={requests.fetchTvShow} />
      <Row title="Documenteries" fetchUrl={requests.fetchDocumentaries}/>
    
    </>
  )
}

export default RowList
