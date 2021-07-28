import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "active";

export const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme.colors.teal};
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 20px;
  justify-content: center;
`;

export const Item = styled.li`
  padding: 0 5px;
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.9px;
    user-select: none;
    background-color: ${({ theme }) => theme.colors.white};
    transform: scale(0, 1);
    transition: transform 0.3s ease;
    transform-origin: 0% 100%;
  }

  &:hover::after {
    transform: scale(1, 1);
  }
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({ activeClassName }))`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  user-select: none;

  &.${activeClassName} {
    font-weight: bold;
  }
`;
