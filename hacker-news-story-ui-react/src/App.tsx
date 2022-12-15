import React from "react";
import { Stories } from './components/Stories';
import styled from 'styled-components';
import { Header } from './components/Header';

const Main = styled.main`
  min-height: 100vh;
  background-color: #EEEEE4;
`;

const Section = styled.section`
  min-height: 100vh;
  max-width: 75%;
  margin: auto;
  background-color: #154C79;
  padding: 0px 20px 1px 20px;
`;

export const App = () => {
  return (
    <Main>
      <Section>
        <Header heading={'HackerNews top 100 stories'} />
        <Stories />
      </Section>
    </Main>
  );
};