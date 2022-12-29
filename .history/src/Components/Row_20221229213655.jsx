import React, { useEffect, useState } from "react";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {}, [fetchUrl]);

  return (
    <div className=" row">
      <h1>{title}</h1>
      <div className=" row_posters ">
        {movies.map(movie => (
            <img className=" row poster " />
        ))}
      </div>
    </div>
  );
}

export default Row;
