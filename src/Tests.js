import React, { Component } from "react";
import * as fetcher from "./fetcher";

class Tests extends Component {
  render() {
    fetcher.getPopularMovies();
    return <p>Testing...</p>;
  }
}

export default Tests;
