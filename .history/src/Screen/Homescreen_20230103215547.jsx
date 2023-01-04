import React, { useEffect } from 'react'
import Banner from '../Components/Banner'
import Navbar from '../Components/Navbar'
import Row from '../Components/Row'
import requests from '../Requests'
import axios from 'axios'

function Homescreen() {
  useEffect(()=>{
    axios.get()
  } ,[])


  return (
    <div>
        <Navbar />
        <Banner />
        <div className=' max-w-[100rem] mx-auto py-12'>
        <Row title={"Netflix Orignals"} fetchUrl={requests.fetchNetflixOriginals}   />
        <Row title={"Trending"} fetchUrl={requests.fetchTrending}  />
        <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
        <Row title={"Action"} fetchUrl={requests.fetchActionMovies} />
        <Row title={"Romance"} fetchUrl={requests.fetchRomanceMovies} />
        <Row title={"Comedy"} fetchUrl={requests.fetchComedyMovies} />
        <Row title={"Documentries"} fetchUrl={requests.fetchDocumentaries} />
        <Row title={"Horror"} fetchUrl={requests.fetchHorrorMovies} />
        {/* <Row title={"Sci-Fi"} fetchUrl={requests.} /> */}
        </div>

    </div>
  )
}

export default Homescreen