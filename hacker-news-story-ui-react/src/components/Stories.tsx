import React, { useEffect, useState } from 'react';
import { getStories, Story } from '../api/Fetch';
import { StoryComponent } from './StoryComponent';

export const Stories = (): JSX.Element => {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    const getStoriesAsync = async () => {
      try {
        const result = await getStories();
        setStories(result);
      } catch (e) {
        console.log(e);
      }
    };
    getStoriesAsync();
  }, []);

  return (
    <div>
      {stories.map((story: Story) => {
        return <StoryComponent story={story} key={story.id} />;
      })}
    </div>
  );
};
