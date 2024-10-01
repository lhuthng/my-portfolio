import React, { ReactNode } from 'react';
import { VContainer, Layout, Title, ProjectEntityProps } from '../types';
import styled from 'styled-components';
import ProjectEntity from './ProjectEntity';
import ArtGallery from './ArtGallery';
import LGameThumbnail from '../images/L-Game-thumbnail.png';
import RVThumbnail from '../images/R-V-thumbnail.png';
import SQ1Thumbnail from '../images/square-1-thumbnail.png';
import NVThumbnail from '../images/N-V-thumbnail.png';
import netVisGif from '../images/net-vis.gif';
import mulIpThumbnail from '../images/multiple-ips-thumbnail.png';
import geneticThumbnail from '../images/genetic-thumbnail.png';
import portfolioThumbnail from '../images/portfolio-thumbnail.png'
import orbtNNThumbnail from '../images/orbt-nn-thumbnail.png';

const StyledLayout = styled(Layout)`
    font-size: 1.8rem;
    gap: 2rem;
    width: 100%;
`;

const ProjectLayout = styled(VContainer)`
    text-align: left;
`;

const assign = (name: string, image: string, description: ReactNode, skills: string[], category: 'program' | 'simple', glow?: string, link?: string, demo?: string) => {
    return {
        name: name, 
        image: image, 
        description: description, 
        skills: skills, 
        category: category, 
        link: link, 
        demo: demo, 
        glow: glow 
    };
}

const projects: ProjectEntityProps[] = [
    assign(
        'This portfolio', portfolioThumbnail, 
        (<>
            <span>A portfolio of mine showing works I have done. This one is also running on a <a href='https://github.com/lhuthng/app-server' >NodeJS/Express</ a> server which hosts and handles connections.</span>
            <span>All images are hand-drawn using <b>Clip Studio Paint</b>. The intire page is strongly inspired by <a href='https://www.omori-game.com/'>Omori</a>'s artstyle.</span>
        </>), 
        ['React (Typescript)', 'NodeJS', 'Web Socket', 'UI Design', 'CSP'], 
        'program', 'yellow',
        'www.github.com/lhuthng/my-portfolio'
    ),
    assign(
        'L-Game', LGameThumbnail, 
        (<span>The L Game is a compact project designed to showcase a variety of game development skills. (A demo may be available below)</span>), 
        ['Pixel Art', '2D Animation', '2D Transition', 'Music Composing', 'Game Programming', 'AI Programming', 'Network Programming'], 
        'program', 'pink',
        'www.github.com/lhuthng/L-Game', 
        'https://thangvps.duckdns.org/apps/L-Game', 
    ),
    assign(
        'Recorder-Visualization', RVThumbnail,
        (<span>The recorder visualization is an application guiding recorder fingerings visually, just like <a href="https://synthesiagame.com/">Synthesia</a> but for recorder. (A demo may be available below)</span>),
        ['Pixel Art', '2D Animation', 'Visualization', 'Audio Handling', 'Music Theory'], 
        'program', 'teal',
        'www.github.com/lhuthng/RecorderVisualization',
        'https://thangvps.duckdns.org/apps/Recorder-Visualization'
    ),
    assign(
        'Square-1-Helper (Bachelor Thesis)', SQ1Thumbnail,
        (<span>The helper is a tool for beginners to solve the shape-shiffting cute puzzle <a href='https://en.wikipedia.org/wiki/Square-1_(puzzle)'>Square-1</a> from any state to the solved state (with a long combination of a few easy moves). The source code is not available anymore but my thesis is.</span>),
        ['Unity', 'Blender', '3D Mathematics', 'Simulation'], 
        'program', 'orange',
        'epub.vgu.edu.vn/handle/dlibvgu/1267'
    ),
    assign(
        'Network-Visualization', NVThumbnail,
        (<span>A network visualization tool that displays network devices, their connections, and packet flow for basic protocols, providing a clear view of network structure and activity.</span>),
        ['Tkinter (Python)', 'Visualization', 'Networking'],
        'simple', 'yellow',
        'www.github.com/thnglhu/NetVis',
        netVisGif
    ),
    assign(
        'Multiple-Public-IPs', mulIpThumbnail,
        (<span>This project takes advantage of virtual machines to connect to multiple VPNs simultaneously, without interrupting any existing connections when joining another network. (*Ahem*, I didn't make this for especially logging like <b>15 video game accounts</b>).</span>),
        ['VMWare', 'Linux', 'Network Configuration', 'Bash'],
        'program', 'lightgreen',
        'github.com/lhuthng/multiple-public-ips'
    ),
    assign(
        'Genetic-Image-Reconstruction', geneticThumbnail,
        (<span>An application that uses many techniques to reconstruct a given image with only polygons.</ span>),
        ['UI Programming', 'Genetic Programming', 'Java', 'Image Processing'],
        'program', 'purple',
        'github.com/lhuthng/genetic-image-reconstruction'
    ),
    assign(
        'Orbt-Trainer', orbtNNThumbnail,
        (<span>A project which is inspired with using genetic programming on a neural network to play a game called <a href='https://store.steampowered.com/app/615610/Orbt_XL/'>OrbtXL</a>. The goal is to maximize scores gaining from surviving a round or nearly touching an asteroid.</ span>),
        ['Genetic Programming', 'Neural Network', 'C# Programming'],
        'program', 'orange',
        'github.com/thnglhu/OrbtNN'
    )
];

const Projects: React.FC = () => {
    return (
        <StyledLayout>
            <Title>
                <h1>~Projects~</h1>
            </Title>
            {projects.map(({
                name, image, glow, description, skills, category, link, demo
            }, index) => <ProjectEntity
                key={index}
                name={name}
                image={image}
                glow={glow}
                description={<ProjectLayout>{description}</ProjectLayout>}
                skills={skills}
                category={category}
                link={link}
                demo={demo}
            />)}
            <ArtGallery />
            
        </StyledLayout>
    )
};

export default Projects;