import React from 'react'

function Banner() {
  return (
    <div className='bg-black'>
        <div className=' h-[450px]  relative text-white object-contain max-w-[100rem] mx-auto'>
        <div className=' text-left pt-[140px] h-[190px]'>
            <h1 className=' text-6xl  pb-2 font-black font-serif'>Stranger Things</h1>
            <p>Lorejbhjvghjbknljnhbgcfghgvbhjnjklnhgbjfhxv cvb,</p>
            <div className=' flex'>
            <button className=' bg-white text-gray-700 px-4'>Play</button>
            <button className=' bg-gray-800 px-4'>My list</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Banner