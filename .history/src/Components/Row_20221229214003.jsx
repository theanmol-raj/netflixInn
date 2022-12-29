import React, { useEffect, useState } from "react";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {}, [fetchUrl]);

  return (
    <div className=" bg-black">
      <h1>{title}</h1>
      <div className=" flex overflow-x-scroll overflow-y-hidden p-4 space-x-2 ">
        {movies.map(movie => (
            <img className=" max-h-[100px] object-contain transition transform hover:scale-105 duration-300 ease-in-out  " />
        ))}
      </div>
    </div>
  );
}

export default Row;
