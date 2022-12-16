import React from 'react';
import styled from 'styled-components';
import Popup from 'reactjs-popup';

interface Props {
  author: string;
  score: number;
  comments: number[];
}

const SvgContainer = styled.div`
  height: 32px;
  width: 32px;
  padding: 0px 20px;
`;

const ToolTipContent = styled.div`
  background-color: #e28743;
  color: #eeeee4;
  padding: 10px;
  border-radius: 6px;
`;

const infoSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
    />
  </svg>
);

export const InfoSvg = (props: Props): JSX.Element => {
  const { author, score, comments } = props;
  const commentCount = comments ? comments.length : 0;

  return (
    <SvgContainer>
      <Popup trigger={infoSvg} position={'bottom right'} on="hover">
        <ToolTipContent>
          <p>Author: {author}</p>
          <p>Comments: {commentCount}</p>
          <p>Score: {score}</p>
        </ToolTipContent>
      </Popup>
    </SvgContainer>
  );
};
