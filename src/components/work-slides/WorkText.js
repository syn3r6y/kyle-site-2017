import React from 'react';
import styled, { keyframes } from 'styled-components';

const WorkText = ({ title, content }) => (
  <Container>
    <TextWrapper>
      <h3>{title}</h3>
      {content}
    </TextWrapper>
  </Container>
);

export default WorkText;

const fadeIn = keyframes`
  0%{
    filter: blur(20px);
    opacity: 0;
  }
  100%{
    filter: blur(0);
    opacity: 1;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4em;
  animation: 0.75s ${fadeIn} ease-in-out;

  @media (min-width: 48em) {
    padding: 0.5em 8em;
  }
`;

const TextWrapper = styled.div`
  h3 {
    color: #9394a6;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 1rem;
    font-weight: 700;
    &::after {
      content: '';
      height: 1px;
      width: 100%;
      margin-top: 1rem;
      margin-bottom: 1.25rem;
      background-color: #ebebee;
      display: block;
    }

    @media (min-width: 62em) {
      font-size: 2em;
    }
  }

  p {
    color: #9394a6;
    letter-spacing: 0.05em;
  }

  @media (min-width: 62em) {
    width: 32em;
  }
`;
