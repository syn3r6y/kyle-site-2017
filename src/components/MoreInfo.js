import React from 'react';
import styled from 'styled-components';

const MoreInfo = () => (
  <Wrapper
    viewBox="0 0 30 5"
    version="1.1"
    height="100%"
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <MidCir cx="14.988" cy="2.496" r="2.496" />
      <RightCir cx="2.496" cy="2.496" r="2.496" />
      <LeftCir cx="27.479" cy="2.496" r="2.496" />
    </g>
  </Wrapper>
);

export default MoreInfo;

const Wrapper = styled.svg`
  width: 1.5em;
  height: auto;
  fill-rule: evenodd;
  clip-rule: evenodd;
  stroke-linejoin: round;
  stroke-miterlimit: 1.41421;
`;

const LeftCir = styled.circle`fill: #963f94;`;

const MidCir = styled.circle`fill: #a96698;`;

const RightCir = styled.circle`fill: #bc8e9d;`;
