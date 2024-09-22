import React from 'react';
import styled from 'styled-components';
import { SkillEntityProps, HContainer } from '../types';

const Entity = styled(HContainer)`
    gap: 1rem;
    p {
        color: #33069A;
        text-decoration: none;
    }
    img: hover {
        filter: brightness(1.05);
        filter: drop-shadow(0 0 0.2rem white);
        transform: scale(1.1);
        transition: filter scale 0.3s ease;
    }
    img {
        filter: drop-shadow(0 0 0.2rem purple);
    }
`;

const SkillEntity: React.FC<SkillEntityProps> = ({ name, icon, isLeft }) => {
    return (
        <Entity>{isLeft ? (
            <>
                <p>{name}</p>
                <img src={icon}></img>
            </>
        ) : (
            <>
                <img src={icon}></img>
                <p>{name}</p>
            </>
        )}</Entity>
    );
};

export default SkillEntity;