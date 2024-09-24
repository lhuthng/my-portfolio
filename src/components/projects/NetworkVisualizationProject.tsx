import React, { useEffect, useState, ReactNode } from 'react';
import styled from 'styled-components';
import ProjectEntity from './ProjectEntity';
import NVThumbnail from '../../images/N-V-thumbnail.png';
import netVisGif from '../../images/net-vis.gif';
import { VContainer } from '../../types';

const Layout = styled(VContainer)`
    text-align: left;
`;

const NetworkVisualizationProject: React.FC = () => {

    return (
        <ProjectEntity 
            name='Network-Visualization'
            image={NVThumbnail}
            glow='yellow'
            description={<Layout>
                <span>A network visualization tool that displays network devices, their connections, and packet flow for basic protocols, providing a clear view of network structure and activity.</span>
            </Layout>}
            skills={['Tkinter (Python)', 'Visualization', 'Networking']}
            category='simple'
            demo={netVisGif}
            link='www.github.com/thnglhu/NetVis'
        />
    )
};

export default NetworkVisualizationProject;