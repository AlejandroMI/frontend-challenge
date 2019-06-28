import React from "react";
import styled from "styled-components";

export default class CheckBox extends React.Component {
  // Create a custom checkbox component

  render() {
    return (
      <CheckboxCont>
        <p>I am a checkbox, wo!</p>
      </CheckboxCont>
    );
  }
}

const CheckboxCont = styled.div`
  position: relative;
`;
