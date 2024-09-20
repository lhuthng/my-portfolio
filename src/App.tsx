import React, { useRef } from 'react';
import logo from './logo.svg';
import Home from './components/Home';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import { SectionInfo } from './types';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 
`;

const Section = styled.section`
  margin-bottom: 4rem;
  text-align: center;
`;

const App: React.FC = () => {
  const sectionReferences: SectionInfo[] = [
    {
      ref: useRef<HTMLDivElement>(null),
      name: "Home",
      component: Home
    },{
      ref: useRef<HTMLDivElement>(null),
      name: "Home",
      component: Home
    },{
      ref: useRef<HTMLDivElement>(null),
      name: "Home",
      component: Home
    },
  ];
  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <PageContainer>
      <Header infos={sectionReferences} scrollTo={scrollTo}></Header>
      {sectionReferences.map((section) => (
        <Section ref={section.ref}><section.component /></Section>
      ))}
    </PageContainer>
  );
}

export default App;
