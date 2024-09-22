import React, { useEffect, useState, ReactNode } from 'react';
import styled from 'styled-components';
import ProjectEntity from './ProjectEntity';
import LGameThumbnail from '../../images/L-Game-thumbnail.png';
import { VContainer } from '../../types';

const Layout = styled(VContainer)`
    text-align: left;
`;

const LGameProject: React.FC = () => {
    const description: ReactNode = (
        <Layout>
            <span>The L Game is a compact project designed to showcase a variety of game development skills.</span>
        </Layout>
    );
    return (
        <ProjectEntity 
            name='L-Game'
            image={LGameThumbnail}
            description={description}
            skills={['pixel art', '2D animation', '2D transition', 'Music Composing', 'Game Programming', 'AI Programming', 'Network Programming']}
            category='program'
        />
    )
};

export default LGameProject;