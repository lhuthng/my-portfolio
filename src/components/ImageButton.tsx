import React from 'react';
import styled from 'styled-components';
import { squiggle, squiggleDuration } from '../common';
import { ImageButtonProps } from '../types';

const StyledButton = styled.button`
    position: relative;
    display: flex;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
    transform-origin: center;
    filter: drop-shadow(0 0 0.3rem purple);
    &: hover {
        filter: brightness(1.05) drop-shadow(0 0 0.3rem purple);
        transform: scale(1.1);
    };
    transition: filter 0.3s ease, transform 0.1s ease;
`;

const FrameImage = styled.img<{offset: number, $zIndex: number}>`
    position: absolute;
    top: ${({offset}) => offset}px;
    justify-content: center;
    z-index: ${({ $zIndex }) => $zIndex + 1};
    animation: ${squiggle} ${squiggleDuration} linear infinite;
`;

const MainImage = styled.img<{offset: number, $zIndex: number, $flipped?: boolean}>`
    position: absolute;
    top: ${({offset}) => offset}px;
    justify-content: center;
    z-index: ${({ $zIndex }) => $zIndex};
    transform: ${({ $flipped }) => $flipped ? 'scaleY(-1)' : 'none'};
    transition: transform 1s ease;
`;

const ImageButton : React.FC<ImageButtonProps> = ({
    frameImage,
    image,
    offset,
    flipped,
    zIndex,
    onClick
}) => {
    zIndex = zIndex ?? 1;
    return (
        <StyledButton onClick={onClick}>
            {frameImage && <FrameImage $zIndex={zIndex} offset={offset} src={frameImage}></FrameImage>}
            <MainImage $zIndex={zIndex} offset={offset} src={image} $flipped={flipped} ></MainImage>
        </StyledButton>
    );
};

export default ImageButton