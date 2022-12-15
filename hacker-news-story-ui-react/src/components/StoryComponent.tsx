import React from 'react';
import { Story } from '../api/Fetch';
import styled from 'styled-components';
import { InfoSvg } from './InfoSvg';

const StoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border: 2px solid #E28743;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 10px 0px;
`;

const Order = styled.div`
  font-size: 32px;
  flex: 0 0 60px;
  text-align: center;
  vertical-align: middle;
  padding: 5px;
`;

const HyperLink = styled.div`
  font-size: 20px;
  align-self: center;
  flex: 1;
`;

interface Props {
  story: Story;
}

export const StoryComponent = (props: Props) => {
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
