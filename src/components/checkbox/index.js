import React from "react";
import styled from "styled-components";
import * as colors from "../../colors";

export default class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  handleCheckboxChange = event => {
    this.setState(prevState => ({
      checked: !prevState.checked
    }));
  };

  render() {
    const filter = this.props.filter;
    const checked = this.state.checked;
    return (
      <CheckboxContainer
        checked={this.state.checked}
        onClick={this.handleCheckboxChange}
      >
        <HiddenCheckbox checked={checked} />
        <StyledCheckbox checked={checked}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
        <span>{filter.name}</span>
      </CheckboxContainer>
    );
  }
}

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin: 5px;
  font-weight: 300;
  user-select: none;
`;

const Icon = styled.svg`
  fill: none;
  stroke: ${colors.primaryColor};
  stroke-width: 4px;
`;

// Hide checkbox visually but remain accessible to screen readers.
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 15px;
  background: ${props => (props.checked ? "#f5f5f5" : "white")};
  border-radius: 3px;
  border: solid 1px ${colors.fontColor};
  transition: all 300ms;
  cursor: pointer;

  :hover {
    background: #f5f5f5;
  }

  ${Icon} {
    visibility: ${props => (props.checked ? "visible" : "hidden")};
  }
`;
