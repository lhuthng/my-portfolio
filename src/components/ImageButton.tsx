import React from 'react';
import styled from 'styled-components';

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
    filter: drop-shadow(0 0 0.2rem purple);
    &: hover {
        filter: brightness(1.05);
        transform: scale(1.1);
        transition: filter scale 0.3s ease;
    };
`;

const FrameImage = styled.img<{offset: number}>`
    position: absolute;
    top: ${({offset}) => offset}px;
    justify-content: center;
    z-index: 2;
`;

const MainImage = styled.img<{offset: number, $flipped?: boolean}>`
    position: absolute;
    top: ${({offset}) => offset}px;
    justify-content: center;
    z-index: 1;
    transform: ${({ $flipped }) => $flipped ? 'scaleY(-1)' : 'none'};
    transition: transform 1s ease;
`;

const ImageButton : React.FC<ImageButtonProps> = ({
    frameImage,
    image,
    offset,
    flipped,
    onClick
}) => {
    return (
        <StyledButton onClick={onClick}>
            {frameImage && <FrameImage offset={offset} src={frameImage}></FrameImage>}
            <MainImage offset={offset} src={image} $flipped={flipped} ></MainImage>
        </StyledButton>
    );
};

export default ImageButton