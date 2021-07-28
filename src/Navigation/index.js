import { toAuthor, toTasks } from "../routes";
import { Item, List, StyledNav, StyledNavLink } from "./styled";

const Navigation = () => (
    <StyledNav>
        <List>
            <Item>
                <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
            </Item>
            <Item>
                <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
            </Item>
        </List>
    </StyledNav>
);

export default Navigation