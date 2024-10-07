import React from 'react';
import styled from 'styled-components';


const ContentContainer = styled.div<{ size: number }>`
    position: relative;
    width: ${({ size }) => size}rem;
    height: ${({ size }) => size}rem;
    border-radius: 1rem;
    image {
        width: ${({ size }) => size}rem;
        height: ${({ size }) => size}rem;
        border-radius: 1rem;
    }
    iframe {
        width: ${({ size }) => size}rem;
        height: ${({ size }) => size}rem;
        border-radius: 1rem;
    }
`;

const Thumbnail = styled.img`
    position: absolute;
    width: 100%;
    height: auto;
    left: 0;
    border-radius: 1rem;
    box-sizing: border-box;
    transition: all 0.1s ease-in-out;
    filter: drop-shadow(0 0 0.2rem purple);
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    border-radius: 1rem;
    box-sizing: border-box;
    background: linear-gradient(to bottom, rgba(24, 3, 58, 0), rgba(24, 3, 58, 0.75));
    display: flex;
    flex-direction: column-reverse;
    opacity: 0;
    transition: opacity 0.5s ease;
    &: hover {
        opacity: 1;
    }
`;

const Description = styled.span`
    color: white;
    font-size: 1.7rem;
`;

interface ArtEntityProps {
    src: string,
    size: number
    onClick: (src: string, desc: string) => void,
    desc?: string,
    isVideo?: boolean
}

const ArtEntity: React.FC<ArtEntityProps> = ({
    src,
    size,
    onClick,
    desc,
    isVideo
}) => {

    return (
        <ContentContainer 
            size={size}
            onClick={() => !isVideo && onClick(src, desc ?? '')}
        >
            {!isVideo ? <Thumbnail
                src={src}
                alt={`gird image`}
            /> : <iframe 
                src={"https://www.youtube.com/embed/" + src} 
                allow="encrypted-media; gyroscope; picture-in-picture" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen />}
            {!isVideo && <Overlay>
                <Description>{desc}</Description>
            </Overlay>}
        </ContentContainer>
    )
}

export default ArtEntity;