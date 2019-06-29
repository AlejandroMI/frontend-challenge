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
      year: null
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
      <SearchWrapper>
        <SearchBarItem>
          <Icon src={SearchIcon} alt="Search" />
          <Input
            type="text"
            value={this.state.keyword || ""}
            onChange={e => this.onChangeHandlerKeyword(e)}
            placeholder="Search for movies"
          />
        </SearchBarItem>
        <SearchBarItem hideOnMobile>
          <Icon src={CalendarIcon} alt="Calendar" />
          <Input
            type="text"
            value={this.state.year || ""}
            onChange={e => this.onChangeHandlerYear(e)}
            placeholder="Year of release"
          />
        </SearchBarItem>
      </SearchWrapper>
    );
  }
}

const SearchWrapper = styled.div``;

const SearchBarItem = styled.div`
  margin-bottom: 15px;
  border: solid 2px ${colors.primaryColor};
  border-style: none none solid none;
  @media (max-width: 768px) {
    display: ${props => (props.hideOnMobile ? "none" : "")};
    background-color: ${colors.lightBackground};
  }
`;

const Input = styled.input`
  display: inline-block;
  color: ${colors.primaryColor};
  font-weight: 800;
  font-size: 1em;
  padding: 0.6em;
  border: none;
  outline: none;

  ::placeholder {
    color: ${colors.primaryColor};
    font-weight: 200;
  }
`;

const Icon = styled.img`
  display: inline-block;
  padding: 0.4em;
  vertical-align: middle;
`;
