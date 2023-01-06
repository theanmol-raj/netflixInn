import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { useParams } from 'react-router-dom'
import axios from '../axios';

function WatchMovie() {
    const authcheck = "hjbgbfuhsgfshgf8959" ;
    const {movieid , auth} = useParams()
    const [videos ,setVideos] = useState(null)
    

    useEffect(()=>{
        async function getMovie(){
            await axios.get(`/movie/${movieid}/videos?api_key=a93b322b42e053f2037296980a90a436&language=en-US`)
            .then((res)=>{
                setVideos(res.data.results)

            })
            .catch(err => console.log(err))
        }
        getMovie() ;
    },[movieid , auth])  
    
    
    if (authcheck !== auth) return <h1>Bad request</h1> ;

  return (
    <div className=' bg-black h-screen'>
        <Navbar />



    </div>
  )
}

export default WatchMovie