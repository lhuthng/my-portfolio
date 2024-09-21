import React from 'react';
import styled, { keyframes } from 'styled-components';
import ImageButton from './ImageButton';
import WavingLetter from './WavingLetter';
import { HContainer, VContainer } from '../types';
import avatar from '../images/avatar.png';
import frame from '../images/frame.png';
import githubIcon from '../images/github-icon.png';
import linkedinIcon from '../images/linkedin-icon.png';
import artstationIcon from '../images/artstation-icon.png';

const GapHContainer = styled(HContainer)`
    padding: 2rem;
    gap: 5rem;
`;

const GapVContainer = styled(VContainer)`
    padding: 2rem;
    gap: 1rem;
`;

const ButtonContainer = styled(HContainer)`
    padding: 2rem;
    gap: 5rem;
`
const Avatar = styled.img`
    
`;

const GreetingText = styled.div`
    flex: 1;
    font-size: 2rem;
    font-family: Omori2;
    text-align: left;
`;

const MapWavingTexts = (text: string, mult: number, offset: number) => text.split("").map((letter, index) => (
    <WavingLetter key={index} letter={letter} delay={mult * index + offset}/>
));

const Home: React.FC = () => {
    const openWindows = (link: string) => {
        return () => { window.open(`https://www.${link}`, '_blank'); }
    }
    return (
        <GapHContainer>
            <GapVContainer>
                <Avatar src={avatar} alt="Avatar"></Avatar>
                <ButtonContainer>
                    <ImageButton offset={-35} frameImage={frame} image={githubIcon} onClick={openWindows("github.com/lhuthng/")}></ImageButton>
                    <ImageButton offset={-35} frameImage={frame} image={linkedinIcon} onClick={openWindows("linkedin.com/in/huuthangle/")}></ImageButton>
                    <ImageButton offset={-35} frameImage={frame} image={artstationIcon} onClick={openWindows("artstation.com/lhuthng")}></ImageButton>
                </ButtonContainer>
            </GapVContainer>
            <GreetingText>
                Hi, I'm Thang <br />
                {MapWavingTexts("an-enthusiastic-developer", 50, 0)} and <br />
                {MapWavingTexts("a-digital-artist", 50, 0)}. <br />
                I'm passionate about applying my knowledge to develop innovative solutions that optimize processes and drive efficiency.
            </GreetingText>

        </GapHContainer>
    );
};

export default Home;