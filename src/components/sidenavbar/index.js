import React from "react";
import styled, { css } from "styled-components";
import { NavLink as Link } from "react-router-dom";

import * as colors from "../../colors";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";

export default class SideNavBar extends React.Component {
  render() {
    const { activeSideBar } = this.props;

    return (
      <SideNavBarCont activeSideBar={activeSideBar}>
        {/* Implement a hamburger icon slide in effect for mobile devices */}
        <SideNavMainLink
          className="menu_nav_link main_nav_link"
          to="/"
          activeClassName="active"
          exact
        >
          Wesley
          <NavIcon src={Arrow} alt="arrow" />
        </SideNavMainLink>
        <SideNavMainLink
          className="menu_nav_link"
          to="/discover"
          activeClassName="active"
        >
          Discover
          <NavIcon src={SearchWhite} alt="search" />
        </SideNavMainLink>
        <SideNavHeader>
          <HeaderText>Watched</HeaderText>
        </SideNavHeader>
        <NavLink
          className="menu_nav_link"
          to="/watched/movies"
          activeClassName="active"
        >
          Movies
        </NavLink>
        <NavLink
          className="menu_nav_link"
          to="/watched/tv-shows"
          activeClassName="active"
        >
          TV Shows
        </NavLink>
        <SideNavHeader>
          <HeaderText>Saved</HeaderText>
        </SideNavHeader>
        <NavLink
          className="menu_nav_link"
          to="/saved/movies"
          activeClassName="active"
        >
          Movies
        </NavLink>
        <NavLink
          className="menu_nav_link"
          to="/saved/tv-shows"
          activeClassName="active"
        >
          TV Shows
        </NavLink>
      </SideNavBarCont>
    );
  }
}

const SideNavBarCont = styled.div`
  position: fixed;
  z-index: 9;
  overflow: hidden;
  width: 280px;
  height: 100%;
  background-color: ${colors.sideNavBar};
  transition: all 0.3s ease-in-out;
  @media (max-width: 768px) {
    width: ${props => (props.activeSideBar ? "280px" : "0px")};
  }
`;

const SideNavMainLink = styled(Link)`
  position: relative;
  display: flex;
  background-color: ${props =>
    props.exact ? colors.sideNavBar : colors.primaryColor};
  padding: 25px 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
`;

const NavIcon = styled.img`
  margin: auto 0 auto auto;
`;

const SideNavHeader = styled.div`
  position: relative;
  color: white;
  padding: 35px 15px 15px 0px;
  margin-left: 35px;
  border-bottom: solid 1px ${colors.lightBackground};
`;

const HeaderText = styled.div`
  display: block;
  font-size: 1.6em;
  font-weight: 600;
`;

const NavLink = styled(Link)`
  display: block;
  font-size: 1em;
  font-weight: 300;
  color: white;
  padding: 15px 35px;
`;
