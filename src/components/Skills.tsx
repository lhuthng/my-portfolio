import React from 'react';
import styled from 'styled-components';
import { VContainer, HContainer, Layout, Title } from '../types';
import SkillCategory from './SkillCategory';
import comboIcons from '../images/htmlcssjs-icon.png';
import reactIcon from '../images/react-icon.png';
import angularIcon from '../images/angular-icon.png';
import phaserIcon from '../images/phaser-icon.png';
import csharpIcon from '../images/cs-icon.png';
import nodeJSIcon from '../images/nodejs-icon.png';
import postmanIcon from '../images/postman-icon.png';
import mongoDBIcon from '../images/mongodb-icon.png';
import mySQLIcon from '../images/mysql-icon.png';
import oracleSQLIcon from '../images/oracledb-icon.png';
import pythonIcon from '../images/python-icon.png';
import unityIcon from '../images/unity-icon.png';
import gms2Icon from '../images/gms2-icon.png';
import javaIcon from '../images/java-icon.png';
import gitIcon from '../images/git-icon.png';
import vmwareIcon from '../images/vmware-icon.png';
import windowIcon from '../images/window-icon.png';
import linuxIcon from '../images/linux-icon.png';
import cmakeIcon from '../images/cmake-icon.png';
import bashIcon from '../images/bash-icon.png';
import cpsIcon from '../images/cps-icon.png';
import pdnIcon from '../images/pdn-icon.png';
import asepriteIcon from '../images/aseprite-icon.png';
import piskelIcon from '../images/piskel-icon.png';
import blenderIcon from '../images/blender-icon.png';
import filmoraIcon from '../images/filmora-icon.png';
import premierIcon from '../images/premier-icon.png';
import photoshopIcon from '../images/pts-icon.png';
import flstudioIcon from '../images/flstudio-icon.png';


const MainContainer = styled(HContainer)`
    align-items: normal;
    justify-content: center;
    gap: 2rem;
`;

const SubContainer = styled(HContainer)<{$isLeft: boolean}>`
    align-items: normal;
    flex-direction: ${({$isLeft}) => $isLeft ? 'row-reverse' : 'row'};
    gap: 1rem;
    width: 40%;
`;

const SkillsContainer = styled(VContainer)`
    gap: 1rem;
`;

const DevContainer = styled(SkillsContainer)`
    align-items: flex-end;
`;

const ArtContainer = styled(SkillsContainer)`
    align-items: flex-start;
`;

const CommonContainer = styled(SkillsContainer)`
    align-items: center;
`;

const TextOnlySkills = styled.span`
    color: #33069A;
    text-shadow: 1px 1px 2px purple;
`;

const Skills: React.FC = () => {
    const frontEndSkills: [ string, string ][] = [
        ['HTML-CSS-JS', comboIcons],
        ['React', reactIcon],
        ['Angular', angularIcon],
        ['Phaser', phaserIcon],
    ];
    const backEndSkills: [ string, string ][] = [
        ['C#-.NET', csharpIcon],
        ['NodeJS', nodeJSIcon],
        ['Post Man', postmanIcon],
    ];
    const databaseManagementSkills : [ string, string ][] = [
        ['MongoDB', mongoDBIcon],
        ['MySQL', mySQLIcon],
        ['OracleSQL', oracleSQLIcon],
    ];
    const desktopAppDevSkills : [ string, string ][] = [
        ['Tkinter', pythonIcon],
        ['WPF', csharpIcon],
        ['PyGame', pythonIcon],
        ['Unity', unityIcon],
        ['GameMaker Studio 2', gms2Icon],
        ['JavaFX', javaIcon],
    ]
    const OSFamiliar: [ string, string ][] = [
        ['Window', windowIcon],
        ['Linux', linuxIcon],
    ]
    const additionalSkills: [ string, string ][] = [
        ['Git', gitIcon],
        ['VMWare', vmwareIcon],
        ['CMake', cmakeIcon],
        ['Bash', bashIcon],
    ];
    const illustrationSkills: [ string, string ][] = [
        ['Clip Paint Studio', cpsIcon],
        ['Paint.NET', pdnIcon],
        ['Aseprite', asepriteIcon],
        ['Piskel', piskelIcon],
    ];
    const modelingSkills: [ string, string ][] = [
        ['Blender', blenderIcon],
    ]
    const videoEditingSkills: [ string, string ][] = [
        ['Filmora', filmoraIcon],
        ['Adobe Premiere', premierIcon],
    ]
    const imageEditingSkills: [ string, string ][] = [
        ['Adobe Photoshop', photoshopIcon],
    ]
    const musicProductionSkills: [ string, string ][] = [
        ['FLStudio', flstudioIcon]
    ]
    const commonSkills: string[] = [
        "Problem Solving & Creativity",
        "Attention to Details",
        "Adaptability",
        "Passion & Curiosity",
        "Continuous Learning"
    ];
    return (
        <Layout>
            <Title>
                <h1>~Skills~</h1>
                <p>for</p>
            </Title>
            <MainContainer>
                <SubContainer $isLeft={true}>
                    <p>~Software Developer</p>
                </SubContainer>
                <SubContainer $isLeft={false}>
                    <p>Digital Artist~</p>
                </SubContainer>
            </MainContainer>
            <MainContainer>
                <SubContainer $isLeft={true}>    
                    <DevContainer>
                        <SkillCategory name="Front-end dev" skills={frontEndSkills} isLeft={true}></SkillCategory>
                        <SkillCategory name="Back-end dev" skills={backEndSkills} isLeft={true}></SkillCategory>
                        <SkillCategory name="Database management" skills={databaseManagementSkills} isLeft={true}></SkillCategory>
                    </DevContainer> 
                    <DevContainer>
                        <SkillCategory name="Desktop app dev" skills={desktopAppDevSkills} isLeft={true}></SkillCategory>
                        <SkillCategory name="OS" skills={OSFamiliar} isLeft={true}></SkillCategory>
                        <SkillCategory name="Additional" skills={additionalSkills} isLeft={true}></SkillCategory>
                    </DevContainer>
                </SubContainer>
                <SubContainer $isLeft={false}>
                    <ArtContainer>
                        <SkillCategory name="2D Illustation" skills={illustrationSkills} isLeft={false}></SkillCategory>
                        <SkillCategory name="3D Modeling" skills={modelingSkills} isLeft={false}></SkillCategory>
                    </ArtContainer>
                    <ArtContainer>
                        <SkillCategory name="Video editing" skills={videoEditingSkills} isLeft={false}></SkillCategory>
                        <SkillCategory name="Image editing" skills={imageEditingSkills} isLeft={false}></SkillCategory>
                        <SkillCategory name="Music production" skills={musicProductionSkills} isLeft={false}></SkillCategory>
                    </ArtContainer>
                </SubContainer>                
            </MainContainer>
            <CommonContainer>
                <p>~Both~</p>
                {commonSkills.map((skill, index) => <TextOnlySkills key={index}>{skill}</TextOnlySkills>)}
            </CommonContainer>
        </Layout>
    );
};

export default Skills;