import React from "react";
import styled from "styled-components";

import MovieItem from "../movieitem";

export default class MovieList extends React.Component {
  render() {
    const { movies, genres } = this.props; //Movies is the result state

    return (
      <MoviesWrapper>
        {movies.map(m => (
          <div key={m.id}>{<MovieItem movie={m} />}</div> //Defining the title as key for each movie
        ))}
      </MoviesWrapper>
    );
  }
}

const MoviesWrapper = styled.div`
  position: relative;
`;
