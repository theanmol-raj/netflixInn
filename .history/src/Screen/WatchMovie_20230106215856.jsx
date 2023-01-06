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
            .catch(err => setVideos(null))
        }
        getMovie() ;
    },[movieid , auth])  
    
    
    if (authcheck !== auth) return <h1>Bad request</h1> ;
console.log(videos)
  return (
    <div className=' bg-black h-screen'>
        <Navbar />
        {videos ? <h1></h1> :<h1 className=' text-white max-w-7xl py-24 text-center text-4xl font-black mx-auto'>No videos found</h1>}


    </div>
  )
}

export default WatchMovie