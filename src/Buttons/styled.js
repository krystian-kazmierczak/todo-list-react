import styled from "styled-components";

export const Wraper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.teal};
  border: none;
  margin: 0 0 0 20px;
  transition: color 0.5s;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-basis: 100%;
    margin: 10px;
  }
  &:hover {
    filter: brightness(110%);
  }
  &:active {
    filter: brightness(120%);
  }
  &:disabled {
    color: ${({ theme }) => theme.colors.silver};
    cursor: not-allowed;
  }
`;
