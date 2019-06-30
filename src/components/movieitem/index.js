import React from "react";
import styled from "styled-components";
import * as colors from "../../colors";

export default class MovieItem extends React.Component {
  render() {
    const { movie, genres } = this.props;
    console.log(genres);
    return (
      //The MovieItemWrapper must be linked to the movie details popup
      <MovieItemWrapper>
        <LeftCont>
          <MoviePoster
            src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`}
          />
        </LeftCont>
        <RightCont>
          <MovieItemHeader>
            <MovieItemTitle>{movie.title}</MovieItemTitle>
            <MovieItemScore>{movie.vote_average}</MovieItemScore>
          </MovieItemHeader>

          <MovieItemGenre>
            {movie.genre_ids.map(g => (
              <span key={g}>
                {g == movie.genre_ids[0]
                  ? genres.find(x => x.id == g).name
                  : " | " + genres.find(x => x.id == g).name}
              </span> //Fuck that was tough
            ))}
          </MovieItemGenre>

          <MovieItemText>{movie.overview}</MovieItemText>
          <MovieItemYear>{movie.release_date}</MovieItemYear>
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
  @media (max-width: 600px) {
    font-size: 0.8em;
  }
`;

const LeftCont = styled.div`
  flex-basis: auto;
  min-width: 100px;
`;

const MoviePoster = styled.img`
  max-width: 100%;
`;

const RightCont = styled.div`
  flex-basis: 100%;
  flex-grow: 2;
  margin-left: 20px;
  min-witdh: 400px;
  display: flex;
  flex-direction: column;
`;

const MovieItemHeader = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
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
  font-size: 0.8em;
  font-weight: bold;
  margin-bottom: 20px;
`;

const MovieItemText = styled.div`
  overflow: hidden;
  display: block;
  margin-bottom: 5px;
  text-overflow: ellipsis;
  max-height: 10vw;
  @media (max-width: 769px) {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const MovieItemYear = styled.div`
  margin-top: auto;
  color: ${colors.primaryColor};
  font-weight: 300;
`;
