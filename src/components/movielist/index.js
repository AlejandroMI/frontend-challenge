import React from "react";
import styled from "styled-components";

import MovieItem from "../movieitem";

export default class MovieList extends React.Component {
  render() {
    const { movies, genres } = this.props; //Movies is the result state

    return (
      <MoviesWrapper>
        {/* Finish the MovieItem component and use it here to display the movie results */}
        {movies.map(m => (
          <div key={m.title}>{<MovieItem movie={m} />}</div>
        ))}
      </MoviesWrapper>
    );
  }
}

const MoviesWrapper = styled.div`
  position: relative;
`;
