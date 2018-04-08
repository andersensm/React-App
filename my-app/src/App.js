import React, { Component } from "react";
import movieCard from "./components/movieCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
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

  // Map over this.state.marvelMovies and render a movieCard component for each movie object
  render() {
    return (
      <Wrapper>
        <Title>marvelMovies List</Title>
        {this.state.marvelMovies.map(movie => (
          <movieCard
            removeMovie={this.removeMovie}
            id={movie.id}
            key={movie.id}
            name={movie.name}
            image={movie.image}
            occupation={movie.occupation}
            location={movie.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
