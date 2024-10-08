import React from 'react';
import styled, { keyframes } from 'styled-components';
import ImageButton from './ImageButton';
import WavingLetter from './WavingLetter';
import { HContainer, VContainer } from '../types';
import { openWindow, squiggleDuration } from '../common';
import avatar from '../images/avatar.png';
import frame from '../images/frame.png';
import githubIcon from '../images/github-icon.png';
import linkedinIcon from '../images/linkedin-icon.png';
import artstationIcon from '../images/artstation-icon.png';
import { squiggle } from '../common';

const GapHContainer = styled(HContainer)`
    padding: 0.5rem;
    gap: 1rem;
    background-color: rgba(230, 213, 255);
    border-radius: 1rem;
    filter: drop-shadow(0 0 0.2rem purple);
    max-width: 45rem;

    @media (max-width: 45rem) {
        flex-direction: column;
    }
    &: after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        border: 0.2rem dashed purple;
        border-radius: 1rem;
        animation: ${squiggle} ${squiggleDuration} linear infinite;
        pointer-events: none; 
    }
`;

const LeftContainer = styled(VContainer)`
    padding: 0.5rem;
    gap: 1rem;
    border-radius: 0.5rem;
    background-color: hsl(52 100% 91%);
    &: after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        border-width: 1.5rem;
        border-style: solid;
        border-color: rgba(230, 213, 255) hsl(52 80% 70%) hsl(52 80% 70%) rgba(230, 213, 255);
        border-bottom-right-radius: 1rem;
        box-shadow: 0 1px 1px rgba(0,0,0,0.3), 1px 1px 1px rgba(0,0,0,0.2)
    }
`;

const ButtonContainer = styled(HContainer)`
    padding: 2rem;
    gap: 5rem;
`;

const glow = keyframes`
    0% { 
        transform: translateY(0);
        filter: drop-shadow(0 15px 0.1rem gray) 
    }
    50% {
        transform: translateY(-2px);
        filter: drop-shadow(0 18px 0.1rem gray) 
    }
    100% { 
        transform: translateY(0);
        filter: drop-shadow(0 15px 0.1rem gray) 
    }
`;

const AvatarContainer = styled.div`
    z-index: 10;
    animation: ${glow} 3s ease-in-out infinite;
`;
const Avatar = styled.img`
    animation: ${squiggle} ${squiggleDuration} linear infinite;
`;

const GreetingText = styled.div`
    flex: 1;
    font-size: 2rem;
    font-family: Omori2;
    text-align: left;
    margin: 1rem;
    b {
        filter: drop-shadow(0 0 0.2rem purple);
        font-size: 2rem;
    }
`;

const MapWavingTexts = (text: string, mult: number, offset: number) => text.split("").map((letter, index) => (
    <WavingLetter key={index} letter={letter} delay={mult * index + offset}/>
));

const Home: React.FC = () => {
    return (
        <VContainer>
            <GapHContainer>
                <LeftContainer>
                    <AvatarContainer>
                        <Avatar src={avatar} alt="Avatar"></Avatar>
                    </AvatarContainer>
                    <ButtonContainer>
                        <ImageButton random={true} offset={-35} frameImage={frame} image={githubIcon} onClick={openWindow("www.github.com/lhuthng/")}></ImageButton>
                        <ImageButton random={true} offset={-35} frameImage={frame} image={linkedinIcon} onClick={openWindow("www.linkedin.com/in/huuthangle/")}></ImageButton>
                        <ImageButton random={true} offset={-35} frameImage={frame} image={artstationIcon} onClick={openWindow("www.artstation.com/lhuthng")}></ImageButton>
                    </ButtonContainer>
                </LeftContainer>
                <GreetingText>
                    Hi, I'm <b>Thang</b> <br />
                    {MapWavingTexts("an-enthusiastic-developer", 50, 0)} and <br />
                    {MapWavingTexts("a-digital-artist", 50, 0)}. <br />
                    I'm passionate about applying my knowledge to develop innovative solutions that optimize processes and drive efficiency.
                </GreetingText>
            </GapHContainer>
        </VContainer>
    );
};

export default Home;