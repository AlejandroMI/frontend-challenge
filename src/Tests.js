import React, { Component } from "react";
import { getPopularMovies } from "./fetcher";

class Tests extends Component {
  render() {
    getPopularMovies();
    return <p>Testing...</p>;
  }
}

export default Tests;
