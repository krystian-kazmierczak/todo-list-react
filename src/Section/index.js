import {
  SectionHeader,
  StyledBody,
  StyledHeader,
  StyledSection,
} from "./styled";

const Section = ({ title, body, extraContent }) => (
  <StyledSection>
    <StyledHeader>
      <SectionHeader>{title}</SectionHeader>
      {extraContent}
    </StyledHeader>
    <StyledBody>{body}</StyledBody>
  </StyledSection>
);

export default Section;
