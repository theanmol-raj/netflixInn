import React, { useState } from 'react'

function Navbar() {
    const [show ,setShow] = useState(false) ;





  return (
    <div className=' fixed w-full bg-black'>
    <div className=' max-w-[100rem] mx-auto flex justify-between py-4 items-center'>
        <div className=' text-red-500 font-bold text-4xl '>
            NETFLIX
        </div>
        <div className=' flex text-white'>
            <p>Movies</p>

        </div>

    </div>

    </div>
  )
}

export default Navbar