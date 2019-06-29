import React from "react";
import styled, { css } from "styled-components";

import * as colors from "../../colors";
import ExpandableFilters from "../../components/expandablefilters";
import SearchBar from "../../components/searchbar";

export default class SearchFilters extends React.Component {
  render() {
    const { genres, ratings, languages, searchMovies } = this.props;
    return (
      <FiltersWrapper>
        <SearchFiltersCont className="search_inputs_cont" marginBottom>
          <SearchBar searchMovies={searchMovies} />
        </SearchFiltersCont>
        <SearchFiltersCont hideOnMobile>
          <CategoryTitle>Movies</CategoryTitle>
          {/* Implement a component called "ExpandableFilters" and use it for the filter categories */}
          {/* 3 EF components each of them receiving a different prop */}
          <ExpandableFilters filters={genres} title="Select genre(s)" />
          <ExpandableFilters filters={ratings} title="Select min. vote" />
          <ExpandableFilters filters={languages} title="Select language" />
        </SearchFiltersCont>
      </FiltersWrapper>
    );
  }
}

const FiltersWrapper = styled.div``;

const SearchFiltersCont = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
  @media (max-width: 768px) {
    display: ${props => (props.hideOnMobile ? "none" : "")};
    padding: 0px;
  }

  ${props =>
    props.marginBottom &&
    css`
      margin-bottom: 15px;
    `}
`;

const CategoryTitle = styled.div`
  margin-bottom: 15px;
  font-weight: 800;
`;

//${ props => (props.hideOnMobile ? "visibility: visible" : "") }
