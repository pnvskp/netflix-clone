import React from "react";
import Row from "./components/Row";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import requests from "./requests";
import "./CSS/app.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Comedies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Telugu Movies" fetchUrl={requests.fetchTeluguMovies} />
      <Row title="Action Films" fetchUrl={requests.fetchActionMovies} />
      <Row title="Hindi Movies" fetchUrl={requests.fetchHindiMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Footer />
    </div>
  );
}

export default App;
