import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import SideNavBar from "./components/sidenavbar";

import Discover from "./pages/discover";

import "./css/app.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSideBar: true
    };
  }
  render() {
    return (
      <Router>
        <PageContainer>
          <SideNavBar {...this.props} active={this.state.activeSideBar} />
          <ContentWrapper>
            <Switch>
              <Route path="/discover" component={Discover} {...this.props} />
            </Switch>
          </ContentWrapper>
        </PageContainer>
      </Router>
    );
  }
}

const ContentWrapper = styled.main`
  @media (min-width: 769px) {
    padding-left: 280px;
  }
`;

const PageContainer = styled.main``;
