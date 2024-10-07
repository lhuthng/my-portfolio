import React, { useRef } from 'react';
import Home from './components/Home';
import Dummy from './components/Dummy';
import PageBreaker from './components/PageBreaker';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import { SectionProps, VContainer } from './types';
import StarBackground from './components/StarBackground';

//  background-color: #6B0BFD;
const PageContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(to bottom, #6B0BFD, black);
  z-index: -999;
`;

const SectionContainer = styled(VContainer)`
  width: 90%;
  max-width: 80rem;
  background: linear-gradient(to bottom, rgba(230, 213, 255, 0.4), rgba(230, 213, 255, 0.8));
  z-index: -777;
`

const Section = styled.section`
  width: 90%;
  text-align: center;

`;

const CreateSectioRef = (name: string, component: React.FC) => {
  return {
    ref: useRef<HTMLDivElement>(null),
    name: name,
    component: component,
    ignore: name[0]==='_'
  };
};

const App: React.FC = () => {
  const sectionReferences: SectionProps[] = [
    CreateSectioRef("Home", Dummy),
    CreateSectioRef("_Home", Home),
    CreateSectioRef("_Breaker", PageBreaker),
    CreateSectioRef("Skills", Dummy),
    CreateSectioRef("_Skills", Skills),
    CreateSectioRef("_Breaker", PageBreaker),
    CreateSectioRef("Projects", Dummy),
    CreateSectioRef("_Projects", Projects),
    CreateSectioRef("_Breaker", PageBreaker),
  ];
  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  return (
    <PageContainer>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="squiggly-0">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="1" result="noise" seed="0"/>
            <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="3" />
          </filter>
          <filter id="squiggly-1">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="1" result="noise" seed="1"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" />
          </filter>          
          <filter id="squiggly-2">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="1" result="noise" seed="2"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>
          <filter id="squiggly-3">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="1" result="noise" seed="3"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" />
          </filter>
          <filter id="squiggly-4">
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="1" result="noise" seed="4"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          </filter>
        </defs> 
      </svg>
      <StarBackground 
        backgroundColor="black" />
      <SectionContainer>
        <Header infos={sectionReferences} scrollTo={scrollTo}></Header>
        {sectionReferences.map((section, index) => (
          <Section key={index} ref={section.ref}><section.component /></Section>
        ))}
        <Footer />
      </SectionContainer>
    </PageContainer>
  );
}

export default App;
