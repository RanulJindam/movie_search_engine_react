import axios from "axios";
import React from "react";
import Movielist from "./Movieslist";

class Home extends React.Component {
  state = {
    movies: [],
    searchResults: [],
  };

  searchMovies = (query) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=cfe422613b250f702980a3bbf9e90716`
    )
      .then((response) => response.json())
      .then((res2) => {
        this.setState({ searchResults: res2.results });
      });
  };

  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716"
      )
      .then((res) => res.data)
      .then((res2) => {
        this.setState({ movies: res2.results });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <div className="w-50 mx-auto">
          <input
            type="text"
            placeholder="Enter Movie Title"
            onChange={(e) => {
              this.searchMovies(e.target.value);
            }}
            required
          />
        </div>
        <Movielist
          movies={
            this.state.searchResults.length > 0
              ? this.state.searchResults
              : this.state.movies
          }
        />
      </>
    );
  }
}
export default Home;
