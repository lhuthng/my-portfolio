import React, { useEffect, useState } from 'react';
import { HContainer, VContainer, Layout, Title } from '../types';
import LGameProject from './projects/LGameProject';
import styled from 'styled-components';
import RecorderVisualizationProject from './projects/RecorderVisualizationProject';
import NetworkVisualizationProject from './projects/NetworkVisualizationProject';
import Square1HelperProject from './projects/Square1HelperProject';
import VMWareProject from './projects/VMWareProject';
import ArtGallery from './projects/ArtGallery';

const StyledLayout = styled(Layout)`
    font-size: 1.8rem;
    gap: 2rem;
`

const Galery = styled.div`
    background-color: rgba(230, 213, 255, 0.6);
`;

const Projects: React.FC = () => {
    return (
        <StyledLayout>
            <Title>
                <h1>~Projects~</h1>
            </Title>
            <LGameProject />
            <RecorderVisualizationProject />
            <Square1HelperProject />
            <NetworkVisualizationProject />
            <VMWareProject />
            <ArtGallery />
            
        </StyledLayout>
    )
};

export default Projects;