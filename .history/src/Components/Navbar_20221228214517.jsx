import React, { useEffect, useState } from 'react'

function Navbar() {
    const [show ,setShow] = useState(false) ;

    function transition(){
        if(window.scrollY > 250){
            setShow(true)
        }
        else{
            setShow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll" , transition);

    
        return ()=>window.removeEventListener("scroll" ,transition)


    },[])




  return (
    <div className={` ${show ? "fixed":"relative"} w-full bg-black`}>
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