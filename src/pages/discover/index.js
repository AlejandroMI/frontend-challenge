import React from "react";
import styled from "styled-components";

import * as colors from "../../colors";
import * as fetcher from "../../fetcher";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";

export default class Discover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
      year: 0,
      results: [],
      movieDetails: null,
      totalCount: 0,
      //Filter props
      genreOptions: [],
      ratingOptions: [
        { id: 7.5, name: 7.5 },
        { id: 8, name: 8 },
        { id: 8.5, name: 8.5 },
        { id: 9, name: 9 },
        { id: 9.5, name: 9.5 },
        { id: 10, name: 10 }
      ],
      languageOptions: [
        { id: "GR", name: "Greek" },
        { id: "EN", name: "English" },
        { id: "RU", name: "Russian" },
        { id: "PO", name: "Polish" }
      ]
    };
  }

  // Write a function to preload the popular movies when page loads & get the movie genres
  async componentDidMount() {
    //Fill our genre list with the most up to date information
    const genresList = await fetcher.getGenresList();
    this.setState({ genreOptions: genresList });

    //Display popular movies when the app is launched
    const data = await fetcher.getPopularMovies();
    this.setState({ results: data.results, totalCount: data.total_results }); //{ ...this.state.results, results }
  }

  // Write a function to get the movie details based on the movie id taken from the URL.
  async searchMovies(keyword, year) {
    // Write a function to trigger the API request and load the search results based on the keyword and year given as parameters
    const data = await fetcher.getMoviesByKeyword(keyword, year);
    if (data != undefined) {
      this.setState({
        results: data.results,
        totalCount: data.total_results
      });
    } else {
      this.setState({
        results: [],
        totalCount: 0
      });
    }
  }

  render() {
    const {
      genreOptions,
      languageOptions,
      ratingOptions,
      totalCount,
      results,
      movieDetails
    } = this.state;
    //Are you really using as state year and keyword?

    return (
      <DiscoverWrapper>
        <MobilePageTitle>Discover</MobilePageTitle>
        <MovieFilters>
          <SearchFilters
            genres={genreOptions}
            ratings={ratingOptions}
            languages={languageOptions}
            searchMovies={(keyword, year) => this.searchMovies(keyword, year)}
          />
        </MovieFilters>
        <MovieResults>
          {totalCount > 0 && <TotalCounter>{totalCount} movies </TotalCounter>}
          <MovieList movies={results || []} genres={genreOptions || []} />
          {/* Each movie must have a unique URL and if clicked a pop-up should appear showing the movie details and the action buttons as shown in the wireframe */}
        </MovieResults>
      </DiscoverWrapper>
    );
  }
}

const DiscoverWrapper = styled.div`
  padding: 60px 35px;
`;

const TotalCounter = styled.div`
  font-weight: 900;
`;

const MovieResults = styled.div``;

const MovieFilters = styled.div``;

const MobilePageTitle = styled.header``;
