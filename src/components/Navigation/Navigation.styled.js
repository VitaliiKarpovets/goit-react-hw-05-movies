import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  background-color: pink;
`;

export const NavigationLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 18px;
  border-radius: 10px;

  &:focus,
  &.active {
    color: white;
    background-color: blue;
  }
`;
