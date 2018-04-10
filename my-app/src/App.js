import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Log from "./components/LogInfo"
import MovieCard from "./components/MovieCard";
import Footer from "./components/Footer"
import marvelMovies from "./marvelMovies.json";
import "./App.css";

class App extends Component {

  state = {
    marvelMovies: marvelMovies,
    score: 0,
    topScore: 0,
    clickedMovies: [],
    text: ""
  };

  clickedMovie = id => {
    console.log(id)
    if (this.state.clickedMovies.includes(id)) {
      this.setState({score:0, clickedMovies: [], text:"You guessed wrong, try again!" })
    } else {
    this.setState({clickedMovies: [...this.state.clickedMovies, id] })
    this.setState({score: this.state.score + 1, text:"You guessed right, pick another marvel brand!"})

        if (this.state.score >= this.state.topScore)
        {
          this.setState({topScore: this.state.score + 1})
        }
      }
  };
  reArrangeMovies = () => {
    this.state.marvelMovies.sort((a,b) => {return 0.5 - Math.random()});
    this.setState({ marvelMovies });
  };
  restart = () => {
    this.state.marvelMovies.sort((a,b) => {return 0.5 - Math.random()});
    this.setState({marvelMovies,score:0,topScore:0,clickMovies:[],text:""})
  };
  render() {
    return (
      <Wrapper>
        <Title restart={this.restart}> Score: {this.state.score} '||' TopScore: {this.state.topScore}</Title>
        <Log text={this.state.text}/>
            {this.state.marvelMovies.map(movie => (
                <MovieCard
                  name={movie.name}
                  image={movie.image}
                  key={movie.id}
                  id={movie.id}
                  reArrangeMovies={this.reArrangeMovies}
                  clickedMovie={this.clickedMovie}
                />
              ))}
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
