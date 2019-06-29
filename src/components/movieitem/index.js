import React from "react";
import styled from "styled-components";
import * as colors from "../../colors";

export default class MovieItem extends React.Component {
  render() {
    const Movie = this.props.movie;
    return (
      //The MovieItemWrapper must be linked to the movie details popup
      <MovieItemWrapper>
        <LeftCont>
          <img src={`http://image.tmdb.org/t/p/w185${Movie.poster_path}`} />
        </LeftCont>
        <RightCont>
          <MovieItemHeader>
            <MovieItemTitle>{Movie.title}</MovieItemTitle>
            <MovieItemScore>{Movie.vote_average}</MovieItemScore>
          </MovieItemHeader>
          <MovieItemGenre>Action | Comedy | Drama</MovieItemGenre>
          <MovieItemText>{Movie.overview}</MovieItemText>
          <MovieItemYear>{Movie.release_date}</MovieItemYear>
        </RightCont>
      </MovieItemWrapper>
    );
  }
}

const MovieItemWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: white;
  border-radius: 3px;
  margin-bottom: 15px;
  padding: 20px;
`;

const LeftCont = styled.div``;

const RightCont = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  max-height: 278px;
  align-items: stretch;
`;

const MovieItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const MovieItemTitle = styled.div`
  font-size: 1.6em;
  font-weight: 800;
`;

const MovieItemScore = styled.div`
  background-color: ${colors.primaryColor};
  border-radius: 3px;
  color: white;
  width: 1.6em;
  height: 1.2em;
  padding: 0.4em;
  text-align: center;
`;

const MovieItemGenre = styled.div`
  color: ${colors.primaryColor};
  font-weight: bold;
  margin-bottom: 20px;
`;

const MovieItemText = styled.div`
  overflow: hidden;
  margin-bottom: 20px;
`;

const MovieItemYear = styled.div`
  margin-top: auto;
  color: ${colors.primaryColor};
  font-weight: 300;
`;
