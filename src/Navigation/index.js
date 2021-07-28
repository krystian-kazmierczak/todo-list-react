import { Item, List, StyledNav, StyledNavLink } from "./styled";

const Navigation = () => (
    <StyledNav>
        <List>
            <Item>
                <StyledNavLink to="/zadania">Zadania</StyledNavLink>
            </Item>
            <Item>
                <StyledNavLink to="/autor">O autorze</StyledNavLink>
            </Item>
        </List>
    </StyledNav>
);

export default Navigation