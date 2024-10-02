import React from 'react';
import styled from 'styled-components';
import { SkillEntityProps, HContainer } from '../types';

const Entity = styled(HContainer)`
    gap: 1rem;
    p {
        color: black;
        text-decoration: none;
        filter: drop-shadow(0 0 0.1rem white);
    }
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
`;

const SkillEntity: React.FC<SkillEntityProps> = ({ name, icon, isLeft }) => {
    return (
        <Entity>{isLeft ? (
            <>
                <p><b>{name}</b></p>
                <img src={icon}></img>
            </>
        ) : (
            <>
                <img src={icon}></img>
                <p><b>{name}</b></p>
            </>
        )}</Entity>
    );
};

export default SkillEntity;