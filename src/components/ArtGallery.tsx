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
import ArtEntity from './ArtEntity';

const arts: { src: string, desc?: string , isVideo?: boolean }[] = [
    {src: T, desc: "Race/Rage On! - A gift for my friend who loves racing."}, 
    {src: DST, desc: "A funny moment of me and my friend playing Don't Starve Together."}, 
    {src: ROR, desc: "Extended attacking animation from Risk of Rain's Mercenary."}, 
    {src: GXT, desc: "When Dipper and Marbel from Gravity Falls visit a Terraria world."}, 
    {src: FJ1, desc: "A short art of my fantasy journal with my friends."}, 
    {src: FJ2, desc: "Part 2!! Planning and Attacking!!"}, 
    {src: LG, desc: "A short demo of my L-Game, you should check above!"}, 
    {src: "vM3MxjjENVA", isVideo: true},
    {src: C, desc: "Cool art of myself while playing the Control game"}, 
    {src: RC, desc: "A short (not that short I spent half an hour to generate) of my Image Reconstruction project"},
    {src: BM, desc: "A spritesheet I made to use on my bomber man project on Phaser."}, 
    {src: TC, desc: "This is what came to my mind when I love Thinkpads and CATSSS"},
    {src: "iyF47LeZbYA", isVideo: true}, 
    {src: "CvFFNvUtiLs", isVideo: true},
    {src: "htTeYQOtIAY", isVideo: true}, 
    {src: "1LdbmE6BCKA", isVideo: true},
    {src: SKB, desc: "A scene from my university project back to 2017"}, 
    {src: ONN, desc: "Short demo of Orbt-Trainer above."},
     {src: E, desc: "A collection of Baldur's Gate 3 Emoticons I made for my discord server."}
] 

const MainContainer = styled(VContainer) `
    width: 100%;
`


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

const Lightbox = styled.div<{ $isOpen: boolean }>`
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.9);
    span {
        color: white;
    }
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
    const [selectedImage, setSelectedImage] = useState<{src: string, desc: string} | null>(null);
    const [toggle, setToggle] = useState(false);
    const ref = useRef<HTMLDivElement>(null);


    const openLightbox = (image: string, desc: string) => {
        setSelectedImage({src: image, desc: desc});
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
                        <ArtEntity 
                            key={index}
                            src={art.src}
                            size={toggle ? 8 : 15}
                            onClick={openLightbox}
                            desc={art.desc}
                            isVideo={art.isVideo}
                        />
                    ))
                }
            </GalleryContainer>

            <Lightbox $isOpen={lightboxOpen} onClick={closeLightbox}>{selectedImage && (
                <>
                    <LightboxImage src={selectedImage.src} alt="Enlarged Image" />
                    <span>{selectedImage.desc}</span>
                </>                
            )}</Lightbox>
        </MainContainer>
    );
};

export default ArtGallery;