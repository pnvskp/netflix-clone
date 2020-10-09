import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import AddIcon from "@material-ui/icons/Add";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import "../CSS/banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      console.log(request);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-fadetop" />
      <div className="banner-contents">
        <h1 className="banner-title">
          {movie.title || movie.original_title || movie.name}{" "}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button play-button">
            <PlayArrowIcon style={{ fontSize: "inherit" }} />
            &nbsp;Play
          </button>
          <button className="banner-button">
            <AddIcon style={{ fontSize: "inherit" }} /> &nbsp;My List
          </button>
        </div>
        <h1 className="banner-description">{truncate(movie.overview, 150)}</h1>
      </div>
      <div className="banner-fadebottom" />
    </header>
  );
}

export default Banner;
