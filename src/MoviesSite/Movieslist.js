import React from "react";

class Movielist extends React.Component {
  render() {
    return (
      <>
        <div id="movies-container">
          {this.props.movies.map((movie, i) => {
            return (
              <div className="movie-wrapper ">
                <img
                  className="image-card"
                  src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
                />
                <p className="card-title text-center py-2">{movie.title}</p>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Movielist;
