import React from "react";
import styled from "styled-components";

import Checkbox from "../../components/checkbox";

export default class ExpandableFilters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filtersShown: false
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    console.log(this.state.filtersShown);
    this.setState(prevState => ({
      filtersShown: !prevState.filtersShown
    }));
  }

  render() {
    const { filters, title } = this.props;
    const { filtersShown } = this.state;

    if (filtersShown) {
      return (
        <ExpandableTitle onClick={this.onClickHandler}>{title}</ExpandableTitle>
      );
    } else {
      return (
        <ExpandableWrapper>
          <ExpandableTitle onClick={this.onClickHandler}>
            {title}
          </ExpandableTitle>
          <p>I am expanded</p>
        </ExpandableWrapper>
      );
    }
  }
}

const ExpandableWrapper = styled.div`
  position: relative;
`;

const ExpandableTitle = styled.div`
  font-size: 1em;
`;
