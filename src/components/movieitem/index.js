import React from "react";
import styled from "styled-components";

export default class MovieItem extends React.Component {
  render() {
    const { Movie } = this.props;
    return (
      //The MovieItemWrapper must be linked to the movie details popup
      <MovieItemWrapper>
        <p>I am a movie</p>
        <LeftCont />
        <RightCont />
      </MovieItemWrapper>
    );
  }
}

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 3px;
`;

const LeftCont = styled.div`
  display: inline-block;
`;

const RightCont = styled.div`
  display: inline-block;
`;
