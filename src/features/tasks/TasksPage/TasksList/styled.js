import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 20px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.alto};

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  padding: 10px 0;
  word-break: break-all;
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  border: none;
  height: 30px;
  width: 30px;
  color: ${({ theme }) => theme.colors.white};
  padding: 0;
  cursor: pointer;
  transition: background 0.5s;
  ${({ done }) =>
    done &&
    css`
      background: ${({ theme }) => theme.colors.green};
      &:hover {
        filter: brightness(110%);
      }
      &:active {
        filter: brightness(120%);
      }
    `}
  ${({ remove }) =>
    remove &&
    css`
      background: ${({ theme }) => theme.colors.red};
      &:hover {
        filter: brightness(110%);
      }
      &:active {
        filter: brightness(120%);
      }
    `}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.teal};
  transition: color 0.3s;

  &:hover {
    filter: brightness(110%);
  }
  &:active {
    filter: brightness(120%);
  }
`;
