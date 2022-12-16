import React from 'react';
import styled from 'styled-components';
import { Story } from '../api/Fetch';
import { InfoSvg } from './InfoSvg';

const StoryContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #e28743;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 10px 0px;
`;

const Order = styled.div`
  font-size: 32px;
  flex: 0 0 60px;
  text-align: center;
  padding: 5px;
`;

const HyperLink = styled.div`
  font-size: 20px;
  flex: 1;
`;

interface Props {
  story: Story;
}

export const StoryComponent = (props: Props): JSX.Element => {
  const { order, url, title, by, score, kids } = props.story;
  return (
    <StoryContainer>
      <Order>{order}</Order>
      <HyperLink>
        <a href={url} rel="noopener noreferrer" target="_blank">
          {title}
        </a>
      </HyperLink>
      <InfoSvg author={by} score={score} comments={kids} />
    </StoryContainer>
  );
};
