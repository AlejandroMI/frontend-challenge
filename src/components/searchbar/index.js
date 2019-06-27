import React from "react";
import styled from "styled-components";

import * as colors from "../../colors";
import SearchIcon from "../../images/search-icon-yellow.png";
import CalendarIcon from "../../images/year-icon.png";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }

  onChangeHandler = async e => {
    console.log(this.state.keyword);
    this.props.searchMovies(e.target.value);
    this.setState({ keyword: e.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.keyword}
          onChange={e => this.onChangeHandler(e)}
          placeholder="Search for movies"
        />
      </div>
    );
  }
}
