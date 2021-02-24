import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// styled navigation wrapper
const Wrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.orange};

  & > ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

// styled list item to wrap NavLink
const NavItemWrapper = styled.li`
  display: inline-block;

  a {
    display: flex;
    box-sizing: border-box;
    height: 70px;
    padding: 0 2.5em;
    justify-content: center;
    place-items: center;
    color: ${({ theme }) => theme.background};
    text-decoration: none;

    &.active-nav-item {
      background: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.text};
    }
  }
`;

/**
 * Styled list item component containing a router navigation link
 *
 * @param props: {
 *  to: string --> route to navigate
 *  children: any --> NavLink label
 *  neverActive?: boolean --> disables active route higlighting
 * }
 */
const NavItem = (props: {
  to: string;
  children: any;
  neverActive?: boolean;
}) => (
  <NavItemWrapper>
    <NavLink
      to={props.to}
      exact
      activeClassName={props.neverActive ? '' : 'active-nav-item'}
    >
      {props.children}
    </NavLink>
  </NavItemWrapper>
);

/**
 * Top-level navigation for the application
 */
const Nav = () => (
  <Wrapper>
    <NavItem to="/" neverActive>
      DisCourse
    </NavItem>
    <ul>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about">About</NavItem>
    </ul>
  </Wrapper>
);

export default Nav;
