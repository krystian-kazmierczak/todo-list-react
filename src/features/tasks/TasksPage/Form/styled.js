import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.teal};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    filter: brightness(110%);
    transform: scale(1.1);
  }
  &:active {
    filter: brightness(120%);
  }
`;
