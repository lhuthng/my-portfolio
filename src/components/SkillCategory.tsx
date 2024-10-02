import React from 'react';
import styled from 'styled-components';
import SkillEntity from './SkillEntity';
import { SkillCategoryProps, VContainer } from '../types';

const Container = styled(VContainer)<{$isLeft: boolean}>`
    padding: 1rem;
    border: 3px solid black;
    border: none;
    border-bottom-left-radius: ${({ $isLeft }) => $isLeft ? '0px' : '15px'};
    border-bottom-right-radius: ${({ $isLeft }) => $isLeft ? '15px' : '0px'};
    border-top-left-radius: ${({ $isLeft }) => $isLeft ? '15px' : '0px'};
    border-top-right-radius: ${({ $isLeft }) => $isLeft ? '0px' : '15px'};
    align-items: ${({ $isLeft }) => $isLeft ? 'flex-end' : 'flex-start'};
    background-color: rgba(255, 249, 207, 0.7);
    filter: drop-shadow(${({ $isLeft }) => $isLeft ? '0.5' : '-0.5'}rem 0.5rem 0.5rem purple);
    p {
        margin: 0;
        white-space: nowrap; 
    }
    &: before {
        content: '';
        position: absolute;
        width: 100%;
        top: 0;
        height: 2.8rem;
        right: ${({ $isLeft }) => $isLeft ? '0' : 'auto'};
        left: ${({ $isLeft }) => !$isLeft ? '0' : 'auto'};
        border-top-left-radius: ${({ $isLeft }) => $isLeft ? '15px' : '0px'};
        border-top-right-radius: ${({ $isLeft }) => $isLeft ? '0px' : '15px'};
        background: linear-gradient(to bottom, rgba(255, 0, 255, 0), rgba(127, 17, 224, 0.5));
    }
`;

const Title = styled.p`
    font-family: Omori2;
    filter: drop-shadow(0 0 3rem black);
    font-size: 2rem;
    transform: translateY(-12px);
    color: black;
`;

const SkillCategory: React.FC<SkillCategoryProps> = ({name, skills, isLeft}) => {
    return (
        <Container $isLeft={isLeft}>
            <Title><b>{name}</b></Title>
            {skills.map((skill, index) => <SkillEntity key={index} name={skill[0]} icon={skill[1]} isLeft={isLeft}></SkillEntity>)}
        </Container>
    );
};

export default SkillCategory;