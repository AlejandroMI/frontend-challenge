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
      activeSideBar: false
    };
    this.openSideBar = this.openSideBar.bind(this);
    this.closeSideBar = this.closeSideBar.bind(this);
  }

  //Merge into toggle sidebar
  openSideBar(activeSideBar) {
    this.setState({
      activeSideBar: true
    });
  }

  closeSideBar(activeSideBar) {
    this.setState({
      activeSideBar: false
    });
  }

  render() {
    return (
      <Router>
        <PageContainer>
          <SideNavClose
            activeSideBar={this.state.activeSideBar}
            onClick={this.closeSideBar}
          />
          <SideNavBar
            {...this.props}
            activeSideBar={this.state.activeSideBar}
          />
          <ContentWrapper>
            <Switch>
              <Route
                path="/discover"
                render={props => (
                  <Discover {...props} openSideBar={this.openSideBar} />
                )}
              />
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

const SideNavClose = styled.div`
  position: fixed;
  display: none;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  top: 0px;
  right: 0px;
  height: 100%;
  @media (max-width: 768px) {
    display: ${props => (props.activeSideBar ? "inherit" : "none")};
  }
`;

const PageContainer = styled.main``;
