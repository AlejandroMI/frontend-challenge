import React from "react";
import styled from "styled-components";

import * as colors from "../../colors";
import SearchIcon from "../../images/search-icon-yellow.png";
import CalendarIcon from "../../images/year-icon.png";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      year: 0
    };
  }

  onChangeHandlerKeyword = async e => {
    console.log(e.target.value);
    this.props.searchMovies(e.target.value, this.state.year);
    this.setState({ keyword: e.target.value });
  };

  onChangeHandlerYear = async e => {
    console.log(e.target.value);
    this.props.searchMovies(this.state.keyword, e.target.value);
    this.setState({ year: e.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.keyword}
          onChange={e => this.onChangeHandlerKeyword(e)}
          placeholder="Search for movies"
        />
        <input
          type="number"
          value={this.state.year}
          onChange={e => this.onChangeHandlerYear(e)}
          placeholder="Search by year"
        />
      </div>
    );
  }
}
