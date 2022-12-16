import React, { useEffect, useState } from 'react';
import { getStories, Story } from './api/Fetch';
import styled from 'styled-components';
import { Header } from './components/Header';
import { Spinner } from './components/Spinner';
import { Stories } from './components/Stories';

const Main = styled.main`
  min-height: 100vh;
  background-color: #eeeee4;
`;

const Section = styled.section`
  min-height: 100vh;
  max-width: 75%;
  margin: auto;
  background-color: #154c79;
  padding: 0px 20px 1px 20px;
`;

export const App = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const getStoriesAsync = async () => {
      try {
        const result = await getStories();
        setStories(result);
        setShowSpinner(false);
      } catch (e) {
        console.log(e);
      }
    };
    getStoriesAsync();
  }, []);

  return (
    <Main>
      <Section>
        <Header heading={'HackerNews top 100 stories'} />
        <Stories stories={stories} />
        <Spinner visible={showSpinner} />
      </Section>
    </Main>
  );
};
