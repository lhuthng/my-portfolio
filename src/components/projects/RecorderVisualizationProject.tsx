import React, { useEffect, useState, ReactNode } from 'react';
import styled from 'styled-components';
import ProjectEntity from './ProjectEntity';
import RVThumbnail from '../../images/R-V-thumbnail.png';
import { VContainer } from '../../types';

const Layout = styled(VContainer)`
    text-align: left;
`;

const RecorderVisualizationProject: React.FC = () => {

    return (
        <ProjectEntity 
            name='Recorder-Visualization'
            image={RVThumbnail}
            glow='teal'
            description={<Layout>
                <span>The recorder visualization is an application guiding recorder fingerings visually, just like <a href="https://synthesiagame.com/">Synthesia</a> but for recorder.</span>
            </Layout>}
            skills={['Pixel Art', '2D Animation', 'Visualization', 'Audio Handling', 'Music Theory']}
            category='program'
            link='www.github.com/lhuthng/RecorderVisualization'
            demo='https://thangvps.duckdns.org/apps/Recorder-Visualization'
        />
    )
};

export default RecorderVisualizationProject;