import React from 'react';
import styled from 'styled-components';
import ProjectEntity from './ProjectEntity';
import SQ1Thumbnail from '../../images/square-1-thumbnail.png';
import { VContainer } from '../../types';

const Layout = styled(VContainer)`
    text-align: left;
`;

const Square1HelperProject: React.FC = () => {

    return (
        <ProjectEntity 
            name='Square-1-Helper (Bachelor Thesis)'
            image={SQ1Thumbnail}
            glow='orange'
            description={<Layout>
                <span>The helper is a tool for beginner to solve the shape-shiffting cute puzzle <a href='https://en.wikipedia.org/wiki/Square-1_(puzzle)'>Square-1</a> from any state to the solved state (with a long combination of a few easy moves).</span>
            </Layout>}
            skills={['Unity', 'Blender', '3D Mathematics', 'Simulation']}
            category='program'
            link='epub.vgu.edu.vn/handle/dlibvgu/1267'
        />
    )
};

export default Square1HelperProject;