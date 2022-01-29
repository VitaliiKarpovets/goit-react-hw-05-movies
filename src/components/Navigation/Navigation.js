import { Nav, NavigationLink } from "./Navigation.styled";

const Navigation = () => (
  <Nav>
    <NavigationLink to="/">Home</NavigationLink>
    <NavigationLink to="/movies">Movies</NavigationLink>
  </Nav>
);

export default Navigation;
