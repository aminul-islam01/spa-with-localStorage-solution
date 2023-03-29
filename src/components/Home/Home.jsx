import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SingleCard from "../SingleCard/SingleCard";

const Home = ({ handleWatchTime }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
      <div className="movie-container row me-2">
        {movies.map((movie) => (
          <SingleCard
            handleWatchTime={handleWatchTime}
            movie={movie}
          ></SingleCard>
        ))}
      </div>
  );
};

export default Home;
