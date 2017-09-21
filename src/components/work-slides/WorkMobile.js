import React from 'react';
import styled, { keyframes } from 'styled-components';
import MoreInfo from '../MoreInfo';
import backArrow from '../../images/arrow-back.svg';

const WorkMobile = ({
  title,
  job,
  image,
  desc,
  techLogos,
  descActive,
  onMoreInfo
}) => (
  <Container>
    <ImageWrapper>
      <MainImage src={image} alt="featured image" />
      <FloorShadow />
    </ImageWrapper>
    <ContentWrapper>
      <TitleWrapper>
        <Title>{title}</Title>
        <MoreInfoButton onClick={() => onMoreInfo()}>
          <MoreInfo />
        </MoreInfoButton>
      </TitleWrapper>
      <WorkInfo
        display={descActive}
        className={descActive ? '-description' : null}
      >
        <JobText>{job}</JobText>
        <JobDesc>{desc}</JobDesc>
        <TechWrapper>
          <p>Made with:</p>
          <LogoWrapper>
            {techLogos.map((logo, i) => (
              <Logo src={logo} key={i} alt="tech logo" />
            ))}
          </LogoWrapper>
        </TechWrapper>
        <BackArrow
          src={backArrow}
          alt="back arrow"
          onClick={() => onMoreInfo()}
        />
      </WorkInfo>
    </ContentWrapper>
  </Container>
);

export default WorkMobile;

const screenBob = keyframes`
    0% {
        transform: translate3d(0, 0, 0) rotate(0deg);
        animation-timing-function: ease-in-out;
    }

    15% {
        transform: translate3d(0.1rem, 0.5rem, 0) rotate(2deg);
        animation-timing-function: ease-in-out;
    }

    30% {
        transform: translate3d(-0.05rem, -0.1rem, 0) rotate(-1.25deg);
        animation-timing-function: ease-in-out;
    }

    50% {
        transform: translate3d(-0.1rem, 0.5rem, 0) rotate(0.25deg);
        animation-timing-function: ease-in-out;
    }

    70% {
        transform: translate3d(0.1rem, -0.25rem, 0) rotate(2deg);
        animation-timing-function: ease-in-out;
    }

    85% {
        transform: translate3d(-0.1rem, 0.5rem, 0) rotate(-1deg);
        animation-timing-function: ease-in-out;
    }

    100% {
        transform: translate3d(0, 0, 0) rotate(0deg);
        animation-timing-function: ease-in-out;
    }
`;

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

const ShadowAdjust = keyframes`
    0% {
        opacity: 0.4;
    }
    15% {
        opacity: 0.65;
    }
    30% {
        opacity: 0.4;
    }
    50% {
        opacity: 0.65;
    }
    70% {
        opacity: 0.4;
    }
    85% {
        opacity: 0.65;
    }
    100% {
        opacity: 0.4;
    }
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: 0.75s ${fadeIn} ease-in-out;

  @media (min-width: 48em) {
    flex-direction: row;
    padding: 4em;
    width: 100%;
  }

  @media (min-width: 62em) {
    max-width: 62em;
  }
`;

const TitleWrapper = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 48em) {
    flex-direction: row;
    position: relative;
    bottom: 0;

    > div {
      display: none;
    }
  }
`;

const Title = styled.h2`
  text-shadow: 0 5px 5px rgba(57, 58, 86, 0.15);
  font-size: 1.5em;
  line-height: 1;
  align-self: center;
  position: relative;
  top: 2.5rem;

  @media (min-width: 48em) {
    font-size: 2.25em;
    top: 0;
    margin-bottom: 0;
  }
`;

const MoreInfoButton = styled.div`
  align-self: flex-end;
  margin-right: 2em;
  margin-bottom: 0.5em;
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;
  animation: ${screenBob} 12s infinite;
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
  animation: ${ShadowAdjust} 12s infinite;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;

  @media (min-width: 48em) {
    width: 25%;
  }

  @media (min-width: 62em) {
    width: 20%;
  }
`;

const WorkInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  position: fixed;
  height: calc(100% - 4em);
  background: #fff;
  bottom: 0;
  padding: 2em;
  left: -100%;
  opacity: 0;
  transition: all 0.75s ease-in-out;
  filter: blur(20px);

  &.-description {
    z-index: 9;
    left: 0;
    opacity: 1;
    filter: blur(0);
    transition: all 0.75s ease-in-out;
  }

  @media (min-width: 48em) {
    position: relative;
    left: 0;
    padding: 1em 2em 0 0;
    opacity: 1;
    filter: blur(0);
    background: transparent;
    align-items: flex-start;
  }
`;

const JobText = styled.h3`
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
    margin-bottom: 1rem;
    background-color: #ebebee;
    display: block;
  }
`;

const JobDesc = styled.p`
  color: #9394a6;
  text-align: left;
  padding-top: 1em;
  letter-spacing: 0.05em;
`;

const TechWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 3em;
  padding-right: 0.5em;
  p {
    color: #9394a6;
    font-size: 0.875em;
    padding-bottom: 0.5em;
    letter-spacing: 0.05em;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
`;

const Logo = styled.img`
  height: 2em;
  margin-right: 0.5em;
  width: auto;
`;

const BackArrow = styled.img`
  width: auto;
  height: 1.5em;
  position: absolute;
  bottom: 2em;
  right: 2em;

  @media (min-width: 48em) {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  @media (min-width: 48em) {
    width: 75%;
    padding-left: 3em;
  }

  @media (min-width: 62em) {
    width: 80%;
    padding-left: 7em;
  }
`;
