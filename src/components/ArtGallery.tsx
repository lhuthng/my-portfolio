import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { VContainer } from '../types';
import { convertRemToPixels } from '../common';
import DST from '../images/DST.jpg';
import GXT from '../images/TXG.png';
import T from '../images/T.jpg';
import TC from '../images/TC.jpg';
import BM from '../images/BM.gif';
import ROR from '../images/ROR.gif';
import C from '../images/C.jpg';
import FJ1 from '../images/FJ1.jpg';
import FJ2 from '../images/FJ2.jpg';
import LG from '../images/LG.gif';
import P3D from '../images/P3D.gif';
import RC from '../images/RC.gif';
import SKB from '../images/SKB.png';
import ONN from '../images/ONN.gif';
import E from '../images/E.png';

const arts: { src: string, isVideo?: boolean }[] = [
    {src: T}, {src: DST}, {src: ROR}, {src: GXT}, 
    {src: FJ1}, {src: FJ2}, {src: LG}, {src: P3D},
    {src: C}, {src: RC},{src: BM}, {src: TC},
    {src: "iyF47LeZbYA", isVideo: true}, 
    {src: "CvFFNvUtiLs", isVideo: true},
    {src: "htTeYQOtIAY", isVideo: true}, 
    {src: "1LdbmE6BCKA", isVideo: true},
    {src: SKB}, {src: ONN}, {src: E}
] 

const MainContainer = styled(VContainer) `
    width: 100%;
`

const ContentContainer = styled.div<{ size: number }>`
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

const Title = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.25rem;
    padding-bottom: 0;
    font-size: 3rem;
    border: 3px solid black;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    border-bottom: 0px;
    background-color: rgba(230, 213, 255, 0.9);
    filter: drop-shadow(0 0 0.2rem purple);
`;

const GalleryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    @media (max-width: 75rem) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 60rem) {
        grid-template-columns: repeat(2, 1fr);
    }
    // @media (max-width: 45rem) {
    //     grid-template-columns: repeat(1, 1fr);
    // }
        
    grid-gap: 10px;
    img {
        min-width: 100%;
        min-height: 100%;
        object-fit: cover;
    }
    padding: 2rem;
    border: 3px solid purple    ;
    border-radius: 2rem;
    background-color: rgba(230, 213, 255, 0.9);
    filter: drop-shadow(0 0 0.2rem purple);
`;

const Thumbnail = styled.img`
    width: 100%;
    height: auto;
    cursor: pointer;
    border-radius: 1rem;
    box-sizing: border-box;
    &:hover {
        transform: translateY(-0.75rem);
        filter: brightness(1.2);
    }
    transition: all 0.1s ease-in-out;
    filter: drop-shadow(0 0 0.2rem purple);
`;

const Lightbox = styled.div<{ $isOpen: boolean }>`
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.9);
`;

const LightboxImage = styled.img`
    max-width: 90%;
    max-height: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const ArtGallery: React.FC = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [toggle, setToggle] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const openLightbox = (image: string) => {
        setSelectedImage(image);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    useEffect(() => {

        const handleResize = () => {
            if (ref.current) {
                const width = ref.current.clientWidth;
                setToggle(width < convertRemToPixels(32));
                console.log(width + " " + convertRemToPixels(34));
            }
        }
    
        const resizeObserver = new ResizeObserver(handleResize)

        if (ref.current) {
          resizeObserver.observe(ref.current);
        }
    
        return () => resizeObserver.disconnect();
    }, [toggle]);

    return (
        <MainContainer ref={ref}>
            <Title>
                <span><b>Media Gallery: </b></span>
            </Title>
            <GalleryContainer >
                {
                    arts.map((art, index) => (
                        <ContentContainer key={index} size={toggle ? 7.5 : 15}>
                            {!art.isVideo ? <Thumbnail key={index}
                                src={art.src}
                                alt={`Image ${index + 1}`}
                                onClick={() => openLightbox(art.src)}
                            /> : <iframe 
                                src={"https://www.youtube.com/embed/" + art.src} 
                                allow="encrypted-media; gyroscope; picture-in-picture" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen />}
                        </ContentContainer>
                    ))
                }
            </GalleryContainer>

            <Lightbox $isOpen={lightboxOpen} onClick={closeLightbox}>{selectedImage && (
                <LightboxImage src={selectedImage} alt="Enlarged Image" />
            )}</Lightbox>
        </MainContainer>
    );
};

export default ArtGallery;