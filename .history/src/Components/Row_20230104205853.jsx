import axios from "../axios";
import React, { useEffect, useState } from "react";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData(){
      const result = await axios.get(fetchUrl) ;
      console.log(result )
      return result
    }

    fetchData() ;
  }, [fetchUrl]);

  return (
    <div className=" bg-black">
      <h1 className=" text-white text-2xl font-semibold">{title}</h1>
      <div className=" flex overflow-x-scroll overflow-y-hidden p-4 space-x-2 ">
        {movies.map(movie => (
            <img className={` ${isLargeRow ? "max-h-[250px]" : ""} max-h-[100px] object-contain transition transform hover:scale-105 duration-300 ease-in-out  `} />
        ))}
      </div>
    </div>
  );
}

export default Row;
