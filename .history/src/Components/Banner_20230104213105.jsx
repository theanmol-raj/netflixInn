import axios from "../axios";
import React, { useEffect, useState } from "react";
import requestss from "../Requests";

function Banner() {
  const [movies, setMovies] = useState(null);

  useEffect(()=>{
    async function fetchData(){
      await axios.get(requestss.fetchNetflixOriginals)
      .then(response => {
        setMovies(response.data.results[Math.floor(Math.random() * (response.data.results.length -1))])
      }).catch(err => console.log(err))
      
    }

    fetchData() ;
  },[])

  function truncate(description , n){
    return description?.length > n ? description.substr(0,n) : description ;

  }

  console.log(movies)


  return (
    <div className=" bgbanner bg-no-repeat bg-cover bg-center">
      <div className="h-[450px] absolute  w-full bg-gradient-to-t from-red-500 via-transparent to-transparent " />
      <div className=" h-[450px]  relative text-white object-contain max-w-[100rem] mx-auto">
        <div className=" text-left pt-[140px] h-[190px]">
          <h1 className=" text-6xl  pb-2 font-black font-serif">
            {movies?.}
          </h1>
          <p>Lorejbhjvghjbknljnhbgcfghgvbhjnjklnhgbjfhxv cvb,</p>
          <div className=" flex space-x-3 mt-4">
            <button className=" bg-white text-gray-700 px-6 py-1 font-bold">
              Play
            </button>
            <button className=" bg-gray-800 px-6 py-1 font-bold">
              My list
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
