import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { HContainer, ProjectEntityProps, VContainer } from '../../types';
import { openWindow } from '../../common';
import ImageButton from '../ImageButton';
import thumbnailFrame from '../../images/thumbnail-frame.png';
import linkIcon from '../../images/link-icon.png';
import expandIcon from '../../images/more-icon.png';

const Layout = styled(VContainer)`
    width: 70rem;
    align-items: normal;
    background-color: rgba(230, 213, 255, 0.9);
    border: 0.2rem solid purple;
    border-radius: 2rem;
    filter: drop-shadow(0 0 0.2rem purple);
    padding: 1rem;
`;

const MainContainer = styled(HContainer)`
    font-size 1.8rem;
    align-items: normal;
    gap: 1rem;
`;

const DescriptionContainer = styled(VContainer)`
    align-items: baseline;
`;

const ThumbnailContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    cursor: pointer;
    margin: 0;
    padding: 0;
`;


const FrameImage = styled.img`
    position: absolute;
    justify-content: center;
    z-index: 2;
`;

const MainImage = styled.img<{$glowingColor: string}>`
    position: relative;
    justify-content: center;
    z-index: 1;
    filter: drop-shadow(0 0.6rem 0.6rem ${({$glowingColor}) => $glowingColor});
`;

const Name = styled.span`
    font-size: 2rem;
`;

const Skills = styled.div`
    font-size: 2rem;
    text-align: left;
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

const ButtonContainer = styled.div`
    width: 95%;
    display: flex;
    justify-content: flex-end;
    margin: 1rem;
    margin-bottom: 0;
`;

const ExpansionContainer = styled.div<{height: number}>`
    height: ${({ height }) => height}px;
    transition: height 1s ease;
    overflow: hidden;
    img, iframe {
        margin: 1rem;
        border: 3px solid black;
        background-color: purple;
        filter: drop-shadow(0 0 0.2rem purple);
    }
`


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
    const [iframeSrc, setIframeSrc] = useState("about:blank");
    const [expansionHeight, setExpansionHeight] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    const toggle = (isOn: boolean) => {
        setExpanded(isOn);
        if (isOn && demo && iframeSrc == "about:blank") {
            setIframeSrc(demo);
        }
        if (ref.current) {
            setExpansionHeight(isOn ? ref.current.scrollHeight : 0);
        }
    };

    useEffect(() => {
        setExpansionHeight(0);
        const fetchSize = async() => {
            if (demo == undefined || category == 'simple') return;
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
        <Layout ref={layoutRef}>
            <MainContainer>
                <ThumbnailContainer>
                    <FrameImage src={thumbnailFrame}></FrameImage>
                    <MainImage src={image} $glowingColor={glow || 'none'}></MainImage>
                </ThumbnailContainer>
                <DescriptionContainer>
                    <Name><b>{name}</b></Name>
                    {description}
                    <Skills>
                        Skills: {skills.map((skill, index) => <Skill key={index}>{skill}</Skill>)}
                    </Skills>
                    {link && <ButtonContainer><ImageButton image={linkIcon} onClick={openWindow(link)} offset={0} /></ButtonContainer>}
                </DescriptionContainer>
            </MainContainer>
            {demo && <ExpansionContainer ref={ref} height={expansionHeight}>
                {category == 'simple' && <img src={demo}></img>}
                {iframeSize && <iframe src={iframeSrc} width={iframeSize.width + 5} height={iframeSize.height + 5} />}
            </ExpansionContainer>}
            {demo && (category == 'simple' || iframeSize) && <ImageButton image={expandIcon} onClick={() => {toggle(!expanded);}} offset={-40} flipped={expanded}/>}
        </Layout>
    )
};

export default ProjectEntity;