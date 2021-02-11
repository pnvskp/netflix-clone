import React, { useState, useEffect } from "react";
import axios from "../axios";
import YouTube from "react-youtube";
import MoviesDB from "moviedb-wrapper";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import "../CSS/row.css";

const baseURL = "https://image.tmdb.org/t/p/w500/";
const movieinfo = new MoviesDB("0875735bb12ead3992dc1429298f7ac8");

function Row(props) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      console.table(request.data.results);
      let results = shuffleArray(request.data.results);
      setMovies(results);
      return request;
    }
    fetchData();
  }, [props.fetchUrl]);

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };

  const handleClick = movie => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieinfo
        .getTrailer(movie.id, movie.first_air_date ? "tv" : "movie")
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className="row">
      <h3 className="row_title">{props.title}</h3>
      <div className="posters">
        {movies.map(movie => (
          <div className="movie-desc">
            <img
              className={`poster ${props.isLargeRow && "largeposter"}`}
              key={movie.id}
              onClick={() => handleClick(movie)}
              src={`${baseURL}${
                props.isLargeRow
                  ? movie.poster_path
                  : movie.backdrop_path || movie.poster_path
              }`}
              alt={movie.name}
            />
            <div className="movie-name-layer">
              <p onClick={() => handleClick(movie)} className="movie-name">
                {movie.name || movie.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}
export default Row;
