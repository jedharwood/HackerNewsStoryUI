

import React, { lazy, useCallback, useState, Suspense } from "react";
import { Stories } from './components/Stories';
import styled from 'styled-components';

const Main = styled.main`
  min-height: 100vh;
`;

const Section = styled.section`
  min-height: 100vh;
`;

const App = () => {
  return (
    <Main>
      <Section>
        <h1>The stories</h1>
        <Stories />
      </Section>
    </Main>
  );
};
export default App;