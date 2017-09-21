import React from 'react';
import styled, { keyframes } from 'styled-components';

const Menu = () => {
  return (
    <MenuTile
      width="100%"
      height="100%"
      viewBox="0 0 75 18"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <TopRect x="60.301" y="0" width="13.956" height="2.329" />
        <MidRect x="50.791" y="7.071" width="23.465" height="2.329" />
        <LowRect x="55.557" y="14.434" width="18.7" height="2.329" />
      </g>
      <g>
        <Mtext d="M3.161,7.525l2.866,5.731l2.852,-5.731l0,5.352l2.276,0l0,-9.37l-2.67,0l-2.458,5.043l-2.487,-5.043l-2.655,0l0,9.37l2.276,0l0,-5.352Z" />
        <Etext d="M15.496,5.347l3.09,0l0,-1.84l-5.366,0l0,9.37l5.366,0l0,-1.84l-3.09,0l0,-1.939l3.09,0l0,-1.84l-3.09,0l0,-1.911Z" />
        <Ntext d="M23.068,7.539l3.414,5.338l2.275,0l0,-9.37l-2.275,0l0,5.268l-3.414,-5.268l-2.276,0l0,9.37l2.276,0l0,-5.338Z" />
        <Utext d="M33.379,3.507l-2.275,0l0,5.352c0,1.461 0.267,2.36 0.871,3.035c0.674,0.744 1.728,1.166 2.894,1.166c1.123,0 2.121,-0.394 2.753,-1.082c0.646,-0.703 0.969,-1.742 0.969,-3.119l0,-5.352l-2.275,0l0,5.45c0,0.675 -0.071,1.068 -0.239,1.377c-0.211,0.365 -0.703,0.618 -1.222,0.618c-0.478,0 -0.914,-0.21 -1.152,-0.533c-0.225,-0.324 -0.324,-0.759 -0.324,-1.462l0,-5.45Z" />
      </g>
    </MenuTile>
  );
};

const textAnimM = keyframes`
    0% {
        opacity: 0;
    }
    60% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const textAnimE = keyframes`
    0% {
        opacity: 0;
    }
    65% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const textAnimN = keyframes`
    0% {
        opacity: 0;
    }
    70% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const textAnimU = keyframes`
    0% {
        opacity: 0;
    }
    75% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const topLineAnim = keyframes`
    0% {
        transform: scale(0);
    }
    25% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`;

const midLineAnim = keyframes`
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`;

const lowLineAnim = keyframes`
    0% {
        transform: scale(0);
    }
    75% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`;

const MenuTile = styled.svg`
  fill-rule: evenodd;
  clip-rule: evenodd;
  stroke-linejoin: round;
  stroke-miterlimit: 1.41421;
  width: 6rem;
  height: auto;
  cursor: pointer;
`;

const TopRect = styled.rect`
  fill: #bc8e9d;
  animation: ${topLineAnim} 1.5s;
`;

const MidRect = styled.rect`
  fill: #a96698;
  animation: ${midLineAnim} 1.5s;
`;

const LowRect = styled.rect`
  fill: #963f94;
  animation: ${lowLineAnim} 1.5s;
`;

const Mtext = styled.path`
  fill: #65667f;
  opacity: 1;
  fill-rule: nonzero;
  animation: ${textAnimM} 2s;
  transition: opacity 0.5s ease-in;
`;

const Etext = styled.path`
  fill: #65667f;
  fill-rule: nonzero;
  animation: ${textAnimE} 2s;
  opacity: 1;
  transition: opacity 0.5s ease-in;
`;

const Ntext = styled.path`
  fill: #65667f;
  fill-rule: nonzero;
  animation: ${textAnimN} 2s;
  opacity: 1;
  transition: opacity 0.5s ease-in;
`;

const Utext = styled.path`
  fill: #65667f;
  fill-rule: nonzero;
  animation: ${textAnimU} 2s;
  opacity: 1;
  transition: opacity 0.5s ease-in;
`;

export default Menu;
