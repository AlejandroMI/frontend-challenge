import React from "react";
import styled from "styled-components";

export default class CheckBox extends React.Component {
  // Create a custom checkbox component

  render() {
    const filter = this.props.filter;
    return (
      <CheckboxCont>
        <p>{filter.name}</p>
      </CheckboxCont>
    );
  }
}

const CheckboxCont = styled.div`
  position: relative;
`;
