import React from 'react';
import styled, { keyframes } from 'styled-components';
import { WavingLetterProps } from '../types';

const wave = keyframes`
    0%, 100% { transform: translateY(-2px); }
    50% { transform: translateY(2px); }
`;

const StyledLetter = styled.span<{ delay: number}>`
    display: inline-block;
    font-size: 2.2rem;
    font-family: Omori2;
    animation: ${wave} 0.5s cubic-bezier(0.36, 0, 0.64, 1) infinite;
    animation-delay: ${({ delay }) => delay}ms; 
`;

const WavingLetter : React.FC<WavingLetterProps> = ({ letter, delay }) => {
    return (
        <StyledLetter delay={delay}>{letter}</StyledLetter>
    );
};

export default WavingLetter;