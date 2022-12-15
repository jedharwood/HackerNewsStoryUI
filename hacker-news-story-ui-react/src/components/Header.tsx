import React from "react";
import styled from "styled-components";

interface Props {
    heading: string;
}

const HeaderContainer = styled.header`
  display: grid;
  justify-content: center;
`;

const Heading = styled.h1`
  margin: 10px;
`;

export const Header = ({ heading }: Props) => (
  <HeaderContainer>
      <Heading>{heading}</Heading>
  </HeaderContainer>
);






