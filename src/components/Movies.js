import React, { Component } from "react";

import Movie from "./Movie";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Movies extends Component {
  state = {
    movies: [
      {
        title: "Batman VS Superman",
        image:
          "https://cdn1.cinemascomics.com/wp-content/uploads/2015/08/batman-vs-superman-e1482859018981.jpeg"
      },
      {
        title: "Fast and Furious 4",
        image: "https://cyberd.org/img/3/Fast-And-Furious-4-2009.jpg"
      },
      {
        title: "Pirates of the Caribbean 1",
        image:
          "https://lumiere-a.akamaihd.net/v1/images/r_piratesofthecaribbeanthecurseoftheblackpearl_header_m_7295e90c.jpeg?region=0,0,640,400"
      }
    ],
    name: "Raul Almanza",
    starredMovie: {}
  };

  starred = movie => {
    this.setState({
      starredMovie: movie
    });
  };

  render() {
    var pStyle = {
      background: "green",
      color: "white",
      padding: "10px"
    };
    var titleSlider = "Movies section";

    return (
      <div className="movies">
        <React.Fragment>
          <Slider title={titleSlider} size="slider-small" />
          <div className="center">
            <div id="content">
              <h2 className="subheader">Movies list</h2>
              {this.state.starredMovie.title && (
                <p className="starred" style={pStyle}>
                  <strong>Starred film: </strong>
                  <span>{this.state.starredMovie.title}</span>
                </p>
              )}
              <p>{this.state.name}'s favorite movies </p>
              <div id="articles" className="movies">
                {this.state.movies.map((movie, i) => {
                  return <Movie key={i} movie={movie} starred={this.starred} />;
                })}
              </div>
            </div>
            <Sidebar blog="false" />
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default Movies;
