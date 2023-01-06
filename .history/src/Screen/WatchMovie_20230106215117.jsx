import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { useParams } from 'react-router-dom'
import axios from '../axios';

function WatchMovie() {
    const authcheck = "hjbgbfuhsgfshgf8959" ;
    const {movieid , auth} = useParams()

    

    useEffect(()=>{
        async function getMovie(){
            await axios.get()
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