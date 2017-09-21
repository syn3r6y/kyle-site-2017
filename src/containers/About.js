import React from 'react';
import styled, { keyframes } from 'styled-components';
import { greyPurple } from '../colors';

import headshot from '../images/headshot.svg';

const About = ({ menuOpen }) => (
  <Container className={menuOpen ? 'blurred' : null}>
    <ContentWrapper>
      <MainHeading>About Me</MainHeading>
      <ContentText>
        I’m Kyle, I’m a Designer and Developer specializing in front end
        development and mobile applications. I have experience with all stages
        of development life cycle, from discovery to deployment and testing.
        Currently, I focus primarily on JavaScript, component-based libraries
        and front end frameworks, and Atomic/component-based design
        methodologies. I’m always learning new techniques and technologies.
      </ContentText>
    </ContentWrapper>
    <ImageWrapper>
      <Headshot src={headshot} alt="head shot" />
    </ImageWrapper>
  </Container>
);

export default About;

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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;

  @media (min-width: 48em) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 62em;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  overflow: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 23em) {
    justify-content: center;
  }

  @media (min-width: 48em) {
    justify-content: flex-start;
    align-items: flex-start;
    flex: 0.7;
  }
  @media (min-width: 62em) {
    flex: 0.5;
  }
`;

const MainHeading = styled.h2`
  font-size: 1.5em;
  font-weight: 800;
  text-transform: uppercase;
  color: ${greyPurple};
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

const ContentText = styled.p`
  color: #9394a6;
  letter-spacing: 0.05em;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4em;
  margin-bottom: 2em;

  @media (min-width: 48em) {
    margin-top: 0;
    margin-bottom: 0;
    flex: 0.3;
    padding: 4em;
  }

  @media (min-width: 62em) {
    padding: 6em;
    flex: 0.25;
  }
`;

const Headshot = styled.img`
  width: 25%;
  height auto;

  @media(min-width: 48em) {
    width: 100%;
  }
`;
