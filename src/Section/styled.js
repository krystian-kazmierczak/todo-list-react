import styled from "styled-components";

export const StyledSection = styled.section`
  margin: 10px 0;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 5px ${({ theme }) => theme.colors.alto};
`;

export const StyledHeader = styled.header`
  border-bottom: solid 1px ${({ theme }) => theme.colors.alto};
  padding: 20px;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: space-between;
  grid-gap: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledBody = styled.div`
  padding: 20px;
`;

export const SectionHeader = styled.h2`
  margin: 0;
`;
