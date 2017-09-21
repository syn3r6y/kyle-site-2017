import React from 'react';
import styled, { keyframes } from 'styled-components';

import LogoDribbble from '../components/LogoDribbble';
import LogoTwitter from '../components/LogoTwitter';
import LogoEmail from '../components/LogoEmail';

import { greyPurple } from '../colors';

const Contact = ({ menuOpen }) => (
  <Container className={menuOpen ? 'blurred' : null}>
    <TitleText>Contact Me</TitleText>
    <ImageWrapper>
      <a href="https://twitter.com/CoderMcCodeface">
        <LogoTwitter color={greyPurple} />
      </a>
      <a href="malito:hello@kyle-erickson.com">
        <LogoEmail color={greyPurple} />
      </a>
      <a href="https://dribbble.com/kyle_erickson">
        <LogoDribbble color={greyPurple} />
      </a>
    </ImageWrapper>
  </Container>
);

export default Contact;

const fadeIn = keyframes`
    0% {
        filter: blur(20px);
    }
    100% {
        filter: blur(0px);
    }
`;

const Container = styled.div`
  animation: ${fadeIn} 0.5s linear;
  transition: 2s filter lienar;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 28em;
`;

const TitleText = styled.h2`
  font-size: 1.5em;
  font-weight: 800;
  text-transform: uppercase;
  color: ${greyPurple};
  text-align: center;
  &::after {
    content: '';
    height: 1px;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 2rem;
    background-color: #ebebee;
    display: block;

    @media (min-width: 48em) {
      margin-bottom: 1rem;
    }
  }

  @media (min-width: 48em) {
    width: 100%;
    font-size: 2.5em;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    width: 30%;
    padding: 1.5em;
    height: auto;

    @media (min-width: 48em) {
      width: 20%;
    }
  }

  @media (min-width: 48em) {
    flex-direction: row;
    justify-content: space-around;
    margin-top: 1em;
  }
`;
