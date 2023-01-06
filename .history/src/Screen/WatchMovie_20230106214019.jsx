import React from 'react'
import Navbar from '../Components/Navbar'
import { useParams } from 'react-router-dom'

function WatchMovie() {
    const authcheck = "kljnwhw%kjndlknnjhbd#$!6883978964bkewjfxm2dngv" ;
    const x = useParams()
    console.log(x)
  return (
    <div className=' bg-black h-screen'>
        <Navbar />



    </div>
  )
}

export default WatchMovie