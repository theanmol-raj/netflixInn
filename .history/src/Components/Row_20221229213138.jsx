import React, { useEffect, useState } from 'react'

function Row({title , fetchUrl , isLargeRow = false}) {
    const [ movies ,setMovies] = useState([]) ;
    
    
    useEffect(()=>{

    },[fetchUrl])

  return (
    <div>

    </div>
  )
}

export default Row