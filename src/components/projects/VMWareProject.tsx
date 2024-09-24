import React from 'react';
import styled from 'styled-components';
import ProjectEntity from './ProjectEntity';
import mulIpThumbnail from '../../images/multiple-ips-thumbnail.png';
import { VContainer } from '../../types';

const Layout = styled(VContainer)`
    text-align: left;
`;

const VMWareProject: React.FC = () => {

    return (
        <ProjectEntity 
            name='Multiple-Public-IPs'
            image={mulIpThumbnail}
            glow='lightgreen'
            description={<Layout>
                <span>This project takes advantage of virtual machines to connect to multiple VPNs simultaneously, without interrupting any existing connections when joining another network. (**Ahem**, I did't use this for logging like 15 accounts, I didn't)</span>
            </Layout>}
            skills={['VMWare', 'Linux', 'Network Configuration', 'Bash']}
            category='program'
            link='github.com/lhuthng/multiple-public-ips'
        />
    )
};

export default VMWareProject;