import React from 'react';
import styled, { keyframes } from 'styled-components';
import { greyPurple } from '../colors';
import brain from '../images/brain.svg';

const Home = ({ menuOpen }) => (
  <InnerWrapper className={menuOpen ? 'blurred' : null}>
    <TopText>Hi, I'm Kyle.</TopText>
    <BottomText>I Build Things</BottomText>
    <ImageWrapper>
      <span>&lt;</span> {<Image src={brain} alt="brain logo" />}{' '}
      <span>&gt;</span>
    </ImageWrapper>
    <FloorShadow />
  </InnerWrapper>
);

export default Home;

const brainBob = keyframes`
    0% {
        transform: translate3d(0, 0, 0) rotate(0deg);
        animation-timing-function: ease-in-out;
    }

    15% {
        transform: translate3d(0.1rem, 0.5rem, 0) rotate(4deg);
        animation-timing-function: ease-in-out;
    }

    30% {
        transform: translate3d(-0.05rem, -0.1rem, 0) rotate(-2.5deg);
        animation-timing-function: ease-in-out;
    }

    50% {
        transform: translate3d(-0.1rem, 0.5rem, 0) rotate(0.5deg);
        animation-timing-function: ease-in-out;
    }

    70% {
        transform: translate3d(0.1rem, -0.25rem, 0) rotate(4deg);
        animation-timing-function: ease-in-out;
    }

    85% {
        transform: translate3d(-0.1rem, 0.5rem, 0) rotate(-2deg);
        animation-timing-function: ease-in-out;
    }

    100% {
        transform: translate3d(0, 0, 0) rotate(0deg);
        animation-timing-function: ease-in-out;
    }
`;

const ShadowAdjust = keyframes`
    0% {
        opacity: 0.5;
    }
    15% {
        opacity: 0.75;
    }
    30% {
        opacity: 0.5;
    }
    50% {
        opacity: 0.75;
    }
    70% {
        opacity: 0.5;
    }
    85% {
        opacity: 0.75;
    }
    100% {
        opacity: 0.5;
    }
`;

const fadeIn = keyframes`
    0% {
        filter: blur(20px);
    }
    100% {
        filter: blur(0px);
    }
`;

const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 2s filter lienar;
  animation: ${fadeIn} 0.5s linear;
  @media (min-width: 48em) {
    text-align: left;
    max-width: 38em;
  }
`;

const TopText = styled.h2`
  color: ${greyPurple};
  font-weight: 800;
  font-size: 1.5em;
  margin-bottom: 1rem;
  text-transform: none;

  @media (min-width: 48em) {
    font-size: 2.5em;
    align-self: flex-start;
  }
`;

const BottomText = styled.h1`
  color: ${greyPurple};
  font-size: 2.25em;
  line-height: 1em;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 0.031em;
  margin-bottom: 2rem;
  text-shadow: 0 0.25rem 0.4rem rgba(0, 0, 0, 0.2);
  text-align: center;
  @media (min-width: 48em) {
    text-align: left;
    font-size: 5em;
    align-self: flex-start;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  span {
    font-size: 5em;
    font-family: 'N';
    font-weight: 800;
    color: ${greyPurple};
    display: block;
    height: 3.5rem;

    @media (min-width: 48em) {
      font-size: 6em;
    }
  }

  @media (min-width: 48em) {
    width: 32em;
  }
`;

const Image = styled.img`
  width: 7.5rem;
  height: auto;
  margin: 0 1rem;
  position: relative;
  animation: ${brainBob} 6s infinite;

  @media (min-width: 48em) {
    width: 12rem;
    margin: 0 2rem;
  }
`;

const FloorShadow = styled.div`
  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  height: 3rem;
  width: 16rem;
  border-radius: 50%;
  margin-top: 2.5em;
  opacity: 0.5;
  animation: ${ShadowAdjust} 6s infinite;
`;
