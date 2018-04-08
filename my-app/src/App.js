import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import MovieCard from "./components/MovieCard";
import marvelMovies from "./marvelMovies.json";
import "./App.css";

class App extends Component {
  // Setting this.state.marvelMovies to the marvelMovies json array
  state = {
    marvelMovies
  };

  removeMovie = id => {
    // Filter this.state.marvelMovies for marvelMovies with an id not equal to the id being removed
    const marvelMovies = this.state.marvelMovies.filter(movie => movie.id !== id);
    // Set this.state.marvelMovies equal to the new marvelMovies array
    this.setState({ marvelMovies });
  };

  // Map over this.state.marvelMovies and render a MovieCard component for each movie object
  render() {
    return (
      <Wrapper>
        <Title>marvelMovies List</Title>
        {this.state.marvelMovies.map(movie => (
          <MovieCard
            removeMovie={this.removeMovie}
            id={movie.id}
            key={movie.id}
            name={movie.name}
            image={movie.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
