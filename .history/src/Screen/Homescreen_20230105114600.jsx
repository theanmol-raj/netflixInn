import React, { useEffect } from 'react'
import Banner from '../Components/Banner'
import Navbar from '../Components/Navbar'
import Row from '../Components/Row'
import requests from '../Requests'
import axios from '../axios'

function Homescreen() {
  useEffect(()=>{
    async function ft(){
      await axios.get("/movie/297762/videos?api_key=a93b322b42e053f2037296980a90a436&language=en-US")
      .then(res=>console.log(res)).catch(er => console.log(er))
    }

    ft() ;
  },[])



  return (
    <div>
        <Navbar />
        <Banner />
        <div className=' max-w-[100rem] mx-auto py-12 relative'>
        <div className=' h-20 bg-red-500 absolute w-25 z-20 right-0' />
        <Row title={"Netflix Orignals"} fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}  />
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