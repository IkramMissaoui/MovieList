import React, { Component } from 'react';
import MovieList from "./components/MovieList";
import './App.css';

class APP extends Component {
 
  render() { 
    return (
      <div className="App">
      <MovieList />
      </div>
      );
  }
}
 
export default APP;


