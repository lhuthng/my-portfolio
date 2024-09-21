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
    &: hover {
        filter: brightness(1.05);
        transform: scale(1.1);
        transition: filter 0.3s ease;
    };
`;

const FrameImage = styled.img<{offset: number}>`
    position: absolute;
    top: ${({offset}) => offset}px;
    justify-content: center;
    z-index: 2;
`;

const MainImage = styled.img<{offset: number}>`
    position: absolute;
    top: ${({offset}) => offset}px;
    justify-content: center;
    z-index: 1;
`;

const ImageButton : React.FC<ImageButtonProps> = ({
    frameImage,
    image,
    offset,
    onClick
}) => {
    return (
        <StyledButton onClick={onClick}>
            <FrameImage offset={offset} src={frameImage}></FrameImage>
            <MainImage offset={offset} src={image}></MainImage>
        </StyledButton>
    );
};

export default ImageButton