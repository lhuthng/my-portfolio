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
  display: flex;
  justify-content: center;
  background: linear-gradient(to bottom, #6B0BFD, black);
`;

const SectionContainer = styled(VContainer)`
  width: 90rem;
  background: linear-gradient(to bottom, rgba(230, 213, 255, 0.4), rgba(230, 213, 255, 0.8));
`

const Section = styled.section`
  max-width: 75rem;
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
      <StarBackground 
        starCount={1000}
        speedFactor={0.01}
        backgroundColor="black" />
      <SectionContainer>
        <Header infos={sectionReferences} scrollTo={scrollTo}></Header>
        {sectionReferences.map((section, index) => (
          <Section key={index} ref={section.ref}><section.component /></Section>
        ))}
        <Footer> </Footer>
      </SectionContainer>
    </PageContainer>
  );
}

export default App;
