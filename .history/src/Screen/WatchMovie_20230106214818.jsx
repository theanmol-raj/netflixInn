import React from 'react'
import Navbar from '../Components/Navbar'
import { useParams } from 'react-router-dom'

function WatchMovie() {
    const authcheck = "hjbgbfuhsgfshgf8959" ;
    const {movieid , auth} = useParams()

    if (authcheck !== auth) return <h1>Bad request</h1> ;

    

  return (
    <div className=' bg-black h-screen'>
        <Navbar />



    </div>
  )
}

export default WatchMovie