import React from "react";
import styled from "styled-components";

import Checkbox from "../../components/checkbox";

export default class ExpandableFilters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filtersShown: false
    };
  }

  render() {
    return <p>I am the expandable component</p>;
  }
}
