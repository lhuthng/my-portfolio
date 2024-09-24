import React, { useEffect, useState, ReactNode } from 'react';
import styled from 'styled-components';
import ProjectEntity from './ProjectEntity';
import LGameThumbnail from '../../images/L-Game-thumbnail.png';
import { VContainer } from '../../types';

const Layout = styled(VContainer)`
    text-align: left;
`;

const LGameProject: React.FC = () => {

    return (
        <ProjectEntity 
            name='L-Game'
            image={LGameThumbnail}
            glow='pink'
            description={<Layout>
                <span>The L Game is a compact project designed to showcase a variety of game development skills.</span>
            </Layout>}
            skills={['Pixel Art', '2D Animation', '2D Transition', 'Music Composing', 'Game Programming', 'AI Programming', 'Network Programming']}
            category='program'
            link='www.github.com/lhuthng/L-Game'
            demo='https://thangvps.duckdns.org/apps/L-Game'
        />
    )
};

export default LGameProject;