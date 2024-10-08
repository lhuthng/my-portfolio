import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { HContainer, ProjectEntityProps, VContainer } from '../types';
import { openWindow, squiggleDuration } from '../common';
import ImageButton from './ImageButton';
import thumbnailFrame from '../images/thumbnail-frame.png';
import linkIcon from '../images/link-icon.png';
import expandIcon from '../images/more-icon.png';
import { squiggle } from '../common';

const FadeIn = keyframes`
    from { 
        scale: 0.9;
        opacity: 0;
    }
    to { 
        scale: 1;
        opacity: 1;
    }
`;

const OuterLayout = styled(VContainer)`
    width: 95%;
    &: hover {
        filter: brightness(1.02);
        transform: scale(1.05);
    }
    transition: all 0.3s ease;
    animation: ${FadeIn} linear;
    animation-timeline: view();
    animation-range-start: 0;
    animation-range-end: 33%;
`

const Layout = styled(VContainer)`
    width: 90%;
    max-width: 70rem;
    align-items: normal;
    background-color: rgba(230, 213, 255, 0.9);
    border-radius: 2rem;
    padding: 1rem;
    @media (max-width: 60rem) {
        margin-bottom: 2rem;
    }
        
    &: after {
        content: '';
        position: absolute;
        top: -5px;
        left: -5px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: calc(2rem + 5px);
        filter: blur(0.6rem);
        z-index: -1;
        background-image: conic-gradient(#ff00ff, #8300c4, #4c00a4, #33007b, #31004a, #31004a, #33007b, #4c00a4, #8300c4, #ff00ff);
    }
`;

const MainContainer = styled(HContainer)`
    font-size 1.8rem;
    align-items: normal;
    gap: 1rem;
    
    @media (max-width: 60rem) {
        flex-direction: column;
    }
`;

const DescriptionContainer = styled(VContainer)`
    align-items: baseline;
    span {
        font-size: 1.7rem;
    }
`;

const ThumbnailContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    transform-origin: top;
`;

const Pivot = styled.div`
    position: relative;
    width: 215px;
    height: 215px;
`;

const ImageContainer = styled.div`
    position: absolute;
    animation: ${squiggle} ${squiggleDuration} linear infinite;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

const FrameImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
`;

const MainImage = styled.img<{$glowingColor: string}>`
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    filter: drop-shadow(0 0.6rem 0.6rem ${({$glowingColor}) => $glowingColor});
    width: 100%;
    height: 100%;
`;

const Name = styled.span`
    font-size: 1.8rem;
    animation: ${squiggle} ${squiggleDuration} linear infinite;
`;

const Skills = styled.div`
    font-size: 2rem;
    text-align: left;
    padding-bottom: 2rem;
`;

const Skill = styled.span`
    border-radius: 10px;
    padding: 0px 5px;
    color: white;
    background-color: rgb(48, 25, 52);
    display: inline-block;
    white-space: nowrap;
    margin-right: 5px;
    margin-top: 2px;
    &: hover {
        filter: brightness(2);
    }
`;

const shake = keyframes`
    0% { transform:translate(0,0) }
    1.78571% { transform:translate(5px,0) }
    3.57143% { transform:translate(0,0) }
    5.35714% { transform:translate(5px,0) }
    7.14286% { transform:translate(0,0) }
    8.92857% { transform:translate(5px,0) }
    10.71429% { transform:translate(0,0) }
    100% { transform:translate(0,0) }
 `

const ButtonContainer = styled.div`
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    animation: ${shake} 4s linear infinite, ${squiggle} ${squiggleDuration} linear infinite;
`;

const ExpansionContainer = styled.div<{height: number}>`
    height: ${({ height }) => height}px;
    transition: height 1s ease;
    overflow: hidden;
    img, iframe {
        margin-top: 1rem;
        margin-bottom: 1rem;
        border: 3px solid black;
        background-color: purple;
        filter: drop-shadow(0 0 0.2rem purple);
        overflow: hidden;
    }

    img {
        box-sizing: border-box;
        width: auto; 
        max-width: 100%;
        height: auto;
    }

    max-width: 100%;
`;
const wave = keyframes`
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); } 
    100% { transform: translateY(0); }
`;

const ExpandButton = styled(ImageButton)`
    width: 100%;
`;

const ExpandButtonContainer = styled.div`
    z-index: 100;
    display: flex;
    justify-content: space-around;
    animation: ${wave} 1s ease-in-out infinite;
`;

const StyledImage = styled.img`
`;

const ProjectEntity: React.FC<ProjectEntityProps> = ({
    name,
    image,
    description,
    skills,
    category,
    demo,
    link,
    glow
}) => {
    const [expanded, setExpanded] = useState(false);
    const [iframeSize, setIframeSize] = useState<{ width: number, height: number} | null>(null);
    const [iframeWidth, setIframeWidth] = useState(0);
    const [iframeSrc, setIframeSrc] = useState("about:blank");
    const [expansionHeight, setExpansionHeight] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    const toggle = (isOn: boolean) => {
        setExpanded(isOn);
        iframeSize && setIframeWidth(isOn ? iframeSize.width : 0);
        if (isOn && demo && iframeSrc === "about:blank") {
            setIframeSrc(demo);
        }
        ref.current && setExpansionHeight(isOn ? ref.current.scrollHeight : 0);
    };

    useEffect(() => {
        setExpansionHeight(0);
        const fetchSize = async() => {
            if (demo === undefined || category === 'simple') return;
            try {
                const response = await fetch(`${demo}/size`);
                if (!response.ok) {
                    console.log('Unable to find the app');
                }
                const size = await response.json();
                setIframeSize(size);
                toggle(expanded);
            } 
            catch (error) {
                console.error('Error fetching size: ', error);
            }
        };
        fetchSize();
    }, []);

    const layoutRef = useRef<HTMLDivElement>(null);

    return (
        <OuterLayout>
            <Layout ref={layoutRef}>
                <MainContainer>
                    <ThumbnailContainer>
                        <Pivot>
                            <ImageContainer>
                                <FrameImage src={thumbnailFrame}></FrameImage>
                                <MainImage src={image} $glowingColor={glow || 'none'}></MainImage>
                            </ImageContainer>
                        </Pivot>
                    </ThumbnailContainer>
                    <DescriptionContainer>
                        <Name><b>{name}</b></Name>
                        <div style={{marginRight: '1rem'}}>
                            {description}
                        </div>
                        <Skills>
                            Skills: {skills.map((skill, index) => <Skill key={index}>{skill}</Skill>)}
                        </Skills>
                        {link && <ButtonContainer><ImageButton image={linkIcon} onClick={openWindow(link)} offset={-23}/></ButtonContainer>}
                    </DescriptionContainer>
                </MainContainer>
                {demo && <ExpansionContainer ref={ref} height={expansionHeight}>
                    {category === 'simple' && <StyledImage src={demo} />}
                    {iframeSize && <iframe title="Demo" src={iframeSrc} width={iframeWidth + 5} height={iframeSize.height + 5} />}
                </ExpansionContainer>}
            </Layout>
            {demo && (category === 'simple' || iframeSize) && <ExpandButtonContainer>
                <ExpandButton image={expandIcon} onClick={() => {toggle(!expanded);}} offset={-60} flipped={expanded} zIndex={100}/>
            </ExpandButtonContainer>}
        </OuterLayout>
    )
};

export default ProjectEntity;