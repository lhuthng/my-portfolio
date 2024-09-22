import React from 'react';
import styled from 'styled-components';
import SkillEntity from './SkillEntity';
import { SkillEntityProps, SkillCategoryProps, VContainer } from '../types';

const Container = styled(VContainer)<{$isLeft: boolean}>`
    padding: 1rem;
    border: 3px solid black;
    border-top: none;
    border-left: ${({ $isLeft }) => $isLeft ? '0px' : '3px solid black'};
    border-right: ${({ $isLeft }) => $isLeft ? '3px solid black' : '0px'};
    border-bottom-left-radius: ${({ $isLeft }) => $isLeft ? '0px' : '10px'};;
    border-bottom-right-radius: ${({ $isLeft }) => $isLeft ? '10px' : '0px'};
    align-items: ${({ $isLeft }) => $isLeft ? 'flex-end' : 'flex-start'};
    p {
        margin: 0;
        white-space: nowrap; 
    }
`;

const SkillCategory: React.FC<SkillCategoryProps> = ({name, skills, isLeft}) => {
    return (
        <Container $isLeft={isLeft}>
            <p style={{fontFamily: 'Omori1', filter: 'drop-shadow(0 0 0.2rem black)'}}>{name}</p>
            {skills.map((skill, index) => <SkillEntity key={index} name={skill[0]} icon={skill[1]} isLeft={isLeft}></SkillEntity>)}
        </Container>
    );
};

export default SkillCategory;