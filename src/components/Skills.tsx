import React from 'react';
import styled from 'styled-components';
import { VContainer, HContainer } from '../types';

const Layout = styled(VContainer)`
    font-family: Omori2;
    font-size: 2.2rem;
    width: 100%;
`;

const MainContainer = styled(HContainer)`
    gap: 2rem;
`;

const SkillsContainer = styled(VContainer)`
    width: 45%;
    background-color: 'red';
`;

const DevContainer = styled(SkillsContainer)`
    align-items: flex-end;
`;

const ArtistContainer = styled(SkillsContainer)`
    align-items: flex-start;
`;

const Title = styled(VContainer)`
    
`;

const Skills: React.FC = () => {
    return (
        <Layout>
            <Title>
                <h1 style={{fontFamily: 'Omori1', marginTop: 0, marginBottom: 0}}>Skills</h1>
                <text>as A/An</text>
            </Title>
            <MainContainer>

                <DevContainer>
                    <div>Developer</div>
                </DevContainer>
                <ArtistContainer> 
                    <div>Artist</div>
                </ArtistContainer>
            </MainContainer>
        </Layout>
    );
};

export default Skills;