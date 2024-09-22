import React, { useRef } from 'react';
import Home from './components/Home';
import PageBreaker from './components/PageBreaker';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import { SectionProps, VContainer } from './types';


const PageContainer = styled.div`
  background-color: #6B0BFD;
  display: flex;
  justify-content: center;
`;

const SectionContainer = styled(VContainer)`
  width: 90rem;
  background-color: rgba(230, 213, 255, 0.6);
`

const Section = styled.section`
  max-width: 75rem;
  margin-bottom: 4rem;
  text-align: center;
`;

const App: React.FC = () => {
  const sectionReferences: SectionProps[] = [
    {
      ref: useRef<HTMLDivElement>(null),
      name: "Home",
      component: Home
    },
    {
      ref: useRef<HTMLDivElement>(null),
      name: "Page Breaker",
      component: PageBreaker,
      ignore: true
    },
    {
      ref: useRef<HTMLDivElement>(null),
      name: "Skills",
      component: Skills,
    },
    {
      ref: useRef<HTMLDivElement>(null),
      name: "Page Breaker",
      component: PageBreaker,
      ignore: true
    },
    {
      ref: useRef<HTMLDivElement>(null),
      name: "Projects",
      component: Projects,
    },
  ];
  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <PageContainer>
      <SectionContainer>
        <Header infos={sectionReferences} scrollTo={scrollTo}></Header>
        {sectionReferences.map((section, index) => (
          <Section key={index} ref={section.ref}><section.component /></Section>
        ))}
      </SectionContainer>
    </PageContainer>
  );
}

export default App;
