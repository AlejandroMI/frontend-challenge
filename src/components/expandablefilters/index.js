import React from "react";
import styled from "styled-components";
import Plus from "../../images/plus-symbol.svg";
import Minus from "../../images/minus-symbol.svg";
import Checkbox from "../../components/checkbox";

export default class ExpandableFilters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filtersShown: false
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  //Change state of component on click
  onClickHandler() {
    this.setState(prevState => ({
      filtersShown: !prevState.filtersShown
    }));
  }

  render() {
    const { filters, title } = this.props;
    const { filtersShown } = this.state;

    if (filtersShown) {
      //We return our filters chechbox
      return (
        <ExpandableWrapper>
          <ExpandableHeader onClick={this.onClickHandler}>
            <ExpandableIcon src={Minus} alt="Contract" />
            <ExpandableTitle>{title}</ExpandableTitle>
          </ExpandableHeader>
          {filters.map(f => (
            <div key={f.id}>{<Checkbox filter={f} onChange />}</div>
          ))}
        </ExpandableWrapper>
      );
    } else {
      //Just show our title
      return (
        <ExpandableWrapper>
          <ExpandableHeader onClick={this.onClickHandler}>
            <ExpandableIcon src={Plus} alt="Expand" />
            <ExpandableTitle>{title}</ExpandableTitle>
          </ExpandableHeader>
        </ExpandableWrapper>
      );
    }
  }
}

const ExpandableWrapper = styled.div``;

const ExpandableHeader = styled.div`
  margin-bottom: 15px;
  cursor: pointer;
`;

const ExpandableIcon = styled.img`
  display: inline-block;
  width: 1em;
  position: relative;
  margin-bottom: 0.3em;
  vertical-align: middle;
`;

const ExpandableTitle = styled.div`
  display: inline-block;
  font-size: 1em;
  margin-left: 15px;
  font-weight: bold;
`;

const ExpandableList = styled.div``;
