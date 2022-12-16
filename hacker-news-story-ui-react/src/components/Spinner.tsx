import React from 'react';
import styled from 'styled-components';

interface Props {
  visible: boolean;
}

const HEADER_HEIGHT = 48;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - ${HEADER_HEIGHT}px);
`;

const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  width: 75px;
  height: 75px;

  & .path {
    stroke: #e28743;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export const Spinner = (props: Props): JSX.Element | null => {
  return props.visible ? (
    <SpinnerContainer>
      <StyledSpinner viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
        />
      </StyledSpinner>
    </SpinnerContainer>
  ) : null;
};
