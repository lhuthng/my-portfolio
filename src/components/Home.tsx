import React from 'react';
import styled from 'styled-components';

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #000; /* Example background color */
  color: #fff; 
`;

const Title = styled.h1`
  font-size: 3rem;
  font-family: 'Press Start 2P', monospace;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  font-family: 'Press Start 2P', monospace;
  margin-bottom: 2rem;
`;

const Home: React.FC = () => {
  return (
    <Hero>
      <Title>Welcome to My Pixel World!</Title>
      <Subtitle>I'm a passionate developer creating awesome things.</Subtitle>
    </Hero>
  );
};

export default Home;