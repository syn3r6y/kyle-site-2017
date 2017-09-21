import React from 'react';
import styled from 'styled-components';
import { greyPurple } from '../colors';

const Navigation = ({ isActive, itemClick }) => {
  return (
    <nav>
      <NavWrapper className={isActive ? '-active' : null}>
        <MenuItem onClick={() => itemClick('home')}>Home</MenuItem>
        <MenuItem onClick={() => itemClick('work')}>Work</MenuItem>
        <MenuItem onClick={() => itemClick('about')}>About</MenuItem>
        <MenuItem onClick={() => itemClick('contact')}>Contact</MenuItem>
      </NavWrapper>
    </nav>
  );
};

export default Navigation;

const NavWrapper = styled.ul`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  flex-direction: column;
  list-style-type: none;
  display: none;
`;

const MenuItem = styled.li`
  display: flex;
  flex: 1;
  align-items: center;
  color: ${greyPurple};
  font-weight: 700;
  font-size: 1em;
  margin-left: 4em;
  opacity: 0;
  transition: opacity 0.5s ease-in;
  cursor: pointer;

  @media (min-width: 48em) {
    font-size: 1.25em;
    margin-left: 6em;
  }
`;
