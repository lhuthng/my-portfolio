import React from 'react';
import styled from 'styled-components';
import { SkillEntityProps, HContainer } from '../types';
import { squiggle, squiggleDuration, squiggleRandomDelay } from '../common';

const Entity = styled(HContainer)<{$isLeft: boolean}>`
    flex-direction: ${({ $isLeft }) => $isLeft ? 'row' : 'row-reverse'};
    gap: 1rem;
    p {
        color: black;
        filter: drop-shadow(0 0 0.1rem white);
    }
`;

const ImageContainer = styled.div<{ $delay: string }>`
    display: flex;
    animation: ${squiggle} ${squiggleDuration} linear infinite;
    animation-delay: ${({ $delay }) => $delay};
    img: hover {
        filter: brightness(1.05);
        filter: drop-shadow(0 0 0.2rem purple);
        transform: scale(1.1);
        transition: filter scale 0.3s ease;
    }
    img {
        filter: drop-shadow(0 0 0.2rem purple);
        transition: all 0.1s ease;
    }
`

const SkillEntity: React.FC<SkillEntityProps> = ({ name, icon, isLeft }) => {
    return (
        <Entity $isLeft={isLeft}>
            <p><b>{name}</b></p>
            <ImageContainer $delay={squiggleRandomDelay()}>
                <img src={icon}></img>
            </ImageContainer>

        </Entity>
    );
};

export default SkillEntity;