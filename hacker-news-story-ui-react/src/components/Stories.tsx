import React from 'react';
import { Story } from '../api/Fetch';
import { StoryComponent } from './StoryComponent';

interface Props {
  stories: Story[];
}

export const Stories = (props: Props): JSX.Element => {
  return (
    <div>
      {props.stories.map((story: Story) => {
        return <StoryComponent story={story} key={story.id} />;
      })}
    </div>
  );
};
