import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import thumbnailFrame from '../../images/thumbnail-frame.png';
import { HContainer, ProjectEntityProps, VContainer } from '../../types';

const Layout = styled(VContainer)`
    width: 70rem;
    align-items: normal;
    background-color: rgba(230, 213, 255, 0.8);
    border: 0.2rem solid purple;
    border-radius: 2rem;
    filter: drop-shadow(0 0 0.2rem purple);
    padding: 2rem;
`;

const MainContainer = styled(HContainer)`
    align-items: normal;
    gap: 2rem;
`;

const DescriptionContainer = styled(VContainer)`
    align-items: baseline;
`;

const ThumbnailContainer = styled.div`
    position: relative;
    display: block;
    justify-content: center;
    cursor: pointer;
    margin: 0;
    padding: 0;
`;


const FrameImage = styled.img`
    position: absolute;
    justify-content: center;
    z-index: 2;
`;

const MainImage = styled.img<{glowingColor: string}>`
    position: relative;
    justify-content: center;
    z-index: 1;
    filter: drop-shadow(0 0.6rem 0.6rem ${({glowingColor}) => glowingColor});
    ${ThumbnailContainer}: hover & {
        filter: brightness(1.2);
    }
`;

const Name = styled.span`
    font-size: 3rem;
`;

const Skills = styled.div`
    text-align: left;
`;

const Skill = styled.span`
    border-radius: 10px;
    padding: 0px 5px;
    color: white;
    background-color: rgb(48, 25, 52);
    display: inline-block;
    white-space: nowrap;
    margin-right: 5px;
    margin-top: 2px;
    &: hover {
        filter: brightness(2);
    }
`;



const ProjectEntity: React.FC<ProjectEntityProps> = ({
    name,
    image,
    description,
    skills,
    category,
    expand
}) => {
    return (
        <Layout>
            <MainContainer>
                <ThumbnailContainer>
                    <FrameImage src={thumbnailFrame}></FrameImage>
                    <MainImage src={image} glowingColor='pink'></MainImage>
                </ThumbnailContainer>
                <DescriptionContainer>
                    <Name><b>{name}</b></Name>
                    {description}
                    <Skills>
                        Skills: {skills.map((skill, index) => <Skill key={index}>{skill}</Skill>)}
                    </Skills>
                </DescriptionContainer>
            </MainContainer>
        </Layout>
    )
};

export default ProjectEntity;