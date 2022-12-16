export interface Story {
  by: string;
  id: number;
  kids: number[];
  score: number;
  title: string;
  url: string;
  order: number;
}

export const getStories = async (): Promise<Story[]> => {
  const storyIds = await fetch(
    'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
  ).then((res) => res.json());
  const stories: any = await Promise.all(
    storyIds
      .slice(0, 100)
      .map(async (id: number, idx: number): Promise<Story> => {
        const story: Story = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
        ).then((res) => res.json());
        story.order = idx + 1;
        return story;
      })
  );
  return stories.sort((a: Story, b: Story) => a.order - b.order);
};
