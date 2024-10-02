import React from 'react';
import styled, { keyframes } from 'styled-components';
import ImageButton from './ImageButton';
import WavingLetter from './WavingLetter';
import { HContainer, VContainer } from '../types';
import { openWindow } from '../common';
import avatar from '../images/avatar.png';
import frame from '../images/frame.png';
import githubIcon from '../images/github-icon.png';
import linkedinIcon from '../images/linkedin-icon.png';
import artstationIcon from '../images/artstation-icon.png';

const GapHContainer = styled(HContainer)`
    padding: 0.5rem;
    gap: 1rem;
    background-color: rgba(230, 213, 255, 0.9);
    border: 0.2rem dashed purple;
    border-radius: 1rem;
    filter: drop-shadow(0 0 0.2rem purple);
    max-width: 45rem;

    @media (max-width: 45rem) {
        flex-direction: column;
    }
        
`;

const GapVContainer = styled(VContainer)`
    padding: 1rem;
    gap: 1rem;
`;

const ButtonContainer = styled(HContainer)`
    padding: 2rem;
    gap: 5rem;
`;

const glow = keyframes`
    0% { filter: drop-shadow(0 0 0.2rem purple); }
    50% { filter: drop-shadow(0 0 0.8rem purple); }
    100% { filter: drop-shadow(0 0 0.2rem purple); }
`;

const Avatar = styled.img`
    animation: ${glow} 3s ease-in-out infinite;
`;

const GreetingText = styled.div`
    flex: 1;
    font-size: 1.7rem;
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
                <GapVContainer>
                    <Avatar src={avatar} alt="Avatar"></Avatar>
                    <ButtonContainer>
                        <ImageButton offset={-35} frameImage={frame} image={githubIcon} onClick={openWindow("www.github.com/lhuthng/")}></ImageButton>
                        <ImageButton offset={-35} frameImage={frame} image={linkedinIcon} onClick={openWindow("www.linkedin.com/in/huuthangle/")}></ImageButton>
                        <ImageButton offset={-35} frameImage={frame} image={artstationIcon} onClick={openWindow("www.artstation.com/lhuthng")}></ImageButton>
                    </ButtonContainer>
                </GapVContainer>
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