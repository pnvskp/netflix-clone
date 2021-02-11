import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import AddIcon from "@material-ui/icons/Add";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import "../CSS/banner.css";

function Banner() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      console.log(request);
      let results = shuffleArray(request.data.results);
      setMovies(results);
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  return (
    <div className="header">
      <AliceCarousel autoPlay autoPlayInterval={5000} mouseTracking infinite>
        {movies.map(movie => (
          <header
            className="banner"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
              backgroundPosition: "center center"
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
              <h1 className="banner-description">
                {truncate(movie.overview, 150)}
              </h1>
            </div>
            <div className="banner-fadebottom" />
          </header>
        ))}
      </AliceCarousel>
    </div>
  );
}

export default Banner;
