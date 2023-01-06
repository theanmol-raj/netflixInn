import axios from "../axios";
import React, { useEffect, useState } from "react";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState(null);
  const base_url = "https://image.tmdb.org/t/p/original";
  
  const authcheck = "hjbgbfuhsgfshgf8959" ;

  useEffect(() => {
    async function fetchData(){
      await axios.get(fetchUrl)
      .then(response => {
        setMovies(response.data.results)
      }).catch(err => console.log(err))
    }

    fetchData() ;
  }, [fetchUrl]);

  // console.log(movies)
  // https://www.youtube.com/watch?v=
  // https://vimeo.com/

  return (
    <div className=" bg-black">
      <h1 className=" text-white text-2xl font-semibold">{title}</h1>
      
      <div className=" flex overflow-x-scroll scrollbar-hide overflow-y-hidden py-4 space-x-4 ">
      <div className={` bg-gradient-to-l from-black via-transparent to-transparent absolute z-10 right-0 w-12 ${isLargeRow?"h-[250px]":"h-[150px]"} `}>.</div>
        {movies?.map((movie ,index) => (
            <div key={index} className={` ${isLargeRow ? "h-[250px] hover:scale-110" : "h-[150px] hover:scale-105"} w-[350px]  object-contain transition transform hover:scale-105 cursor-pointer duration-300 ease-in-out  `}>
              <a href={`/watch/${movie?.id}/${authcheck}`}>
              <img className={` ${isLargeRow ? "h-[250px] hover:scale-110" : "h-[150px] hover:scale-105"} w-[350px]  object-contain transition transform hover:scale-105 cursor-pointer duration-300 ease-in-out  `}  src={base_url + movie.poster_path || movie.backdrop_path
}  />
              </a>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
