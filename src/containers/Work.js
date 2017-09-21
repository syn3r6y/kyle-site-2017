import React from 'react';
import styled, { keyframes } from 'styled-components';

import leftArrow from '../images/left-arrow.svg';
import rightArrow from '../images/right-arrow.svg';

const Work = ({ menuOpen, currentSlide, changeSlide, slides }) => (
  <InnerWrapper className={menuOpen ? 'blurred' : null}>
    {slides[currentSlide]}
    <ArrowWrapper>
      <Image
        src={leftArrow}
        alt="left arrow"
        onClick={() => changeSlide('left')}
      />
      <Image
        src={rightArrow}
        alt="right arrow"
        onClick={() => changeSlide('right')}
      />
    </ArrowWrapper>
  </InnerWrapper>
);

export default Work;

const fadeIn = keyframes`
    0% {
        filter: blur(20px);
    }
    100% {
        filter: blur(0px);
    }
`;

const InnerWrapper = styled.div`
  animation: ${fadeIn} 0.5s linear;
  transition: 2s filter lienar;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (min-width: 48em) {
    justify-content: center;
    align-items: center;
  }
`;

const ArrowWrapper = styled.div`
  width: calc(100% - 4em);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  bottom: 50%;

  @media (min-width: 48em) {
    top: calc(50% - 1.5em);
    width: calc(100vw - 8em);
  }
`;

const Image = styled.img`
  width: auto;
  height: 2.5em;
`;
