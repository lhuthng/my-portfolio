import React, { useState } from 'react';
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
const arts: { src: string, isVideo?: boolean }[] = [
    {src: T}, {src: DST}, {src: ROR}, {src: GXT}, 
    {src: FJ1}, {src: FJ2}, {src: LG}, {src: P3D},
    {src: C}, {src: RC},{src: BM}, {src: TC},
    {src: "iyF47LeZbYA?si=kiVC1G4bXQPqvkr-", isVideo: true}, 
    {src: "CvFFNvUtiLs?si=9rryTpAZAfm-2oZV", isVideo: true},
    {src: "htTeYQOtIAY?si=LLxb7WJq7pDBT1-Z", isVideo: true}, 
    {src: "1LdbmE6BCKA?si=oP5hCJcih1oiYEK9", isVideo: true}
] 


const IframeContainer = styled.div`
    width: 15rem;
    height: 15rem;
    border-radius: 1rem;
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
    width: 15rem;
    height: 15rem;
    cursor: pointer;
    box-sizing: border-box;
    border-radius: 1rem;
    &:hover {
        transform: translateY(-0.75rem);
        filter: brightness(1.2);
    }
    transition: all 0.1s ease-in-out;
    filter: drop-shadow(0 0 0.2rem purple);
`;

const Lightbox = styled.div<{ isOpen: boolean }>`
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
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

    const openLightbox = (image: string) => {
    setSelectedImage(image);
    setLightboxOpen(true);
    };

    const closeLightbox = () => {
    setLightboxOpen(false);
    };
    return (
        <VContainer>
            <Title>
                <span><b>Galleries: </b></span>
            </Title>
            <GalleryContainer>
                {
                    arts.map((art, index) => (
                    !art.isVideo ? 
                        <Thumbnail
                            key={index}
                            src={art.src}
                            alt={`Image ${index + 1}`}
                            onClick={() => openLightbox(art.src)}
                        /> : <IframeContainer><iframe 
                            key={index}
                            style={{
                                width:'15rem',
                                height:'15rem',
                                borderRadius:'1rem'
                            }}
                            src={"https://www.youtube.com/embed/" + art.src + "&modestbranding=1&showinfo=0"} 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                        /></IframeContainer>
                    ))
                }
            </GalleryContainer>

            <Lightbox isOpen={lightboxOpen} onClick={closeLightbox}>{selectedImage && (
                <LightboxImage src={selectedImage} alt="Enlarged Image" />
            )}</Lightbox>
        </VContainer>
    );
};

export default ArtGallery;