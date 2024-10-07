import React from 'react';
import styled from 'styled-components';
import { SkillEntityProps, HContainer } from '../types';
import { squiggle, squiggleDuration, squiggleRandomDelay } from '../common';

const Entity = styled(HContainer)<{$isLeft: boolean}>`
    width: 100%;
    flex-direction: ${({ $isLeft }) => $isLeft ? 'row' : 'row-reverse'};
    justify-content: space-between;
    gap: 1rem;
    p {
        color: black;
        filter: drop-shadow(0 0 0.1rem white);
        z-index: 2;
    }
    &: before {
        content: '';
        position: absolute;
        width: calc(100% + 2rem);
        left: -1rem;
        top: 12px;
        background: linear-gradient(to left, rgba(255, 0, 0, 0.2) 10%, rgba(255, 0, 0, 0.4) 25%, rgba(255, 0, 0, 0.2) 90%);
        height: 2px;
        z-index: 1;
    }
    &: after {
        content: '';
        position: absolute;
        width: calc(100% + 2rem);
        left: -1rem;
        bottom: 8px;
        background: linear-gradient(to left, rgba(255, 0, 0, 0.2) 10%, rgba(255, 0, 0, 0.4) 25%, rgba(255, 0, 0, 0.2) 90%);
        height: 2px;
        z-index: 1;
    }
`;

const ImageContainer = styled.div<{ $delay: string }>`
    display: flex;
    animation: ${squiggle} ${squiggleDuration} linear infinite;
    animation-delay: ${({ $delay }) => $delay};
    z-index: 2;
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