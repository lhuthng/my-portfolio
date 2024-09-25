import React from 'react';
import styled from 'styled-components';
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
    padding: 1rem;
    gap: 2rem;
    background-color: rgba(230, 213, 255, 0.9);
    border: 0.2rem dashed purple;
    border-radius: 2rem;
    filter: drop-shadow(0 0 0.2rem purple);
    max-width: 60rem;
`;

const GapVContainer = styled(VContainer)`
    padding: 1rem;
    gap: 1rem;
`;

const ButtonContainer = styled(HContainer)`
    padding: 2rem;
    gap: 5rem;
`
const Avatar = styled.img`
    filter: drop-shadow(0 0 0.2rem purple);
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
    return (
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
    );
};

export default Home;