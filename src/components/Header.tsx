import React from 'react';
import styled from 'styled-components';
import { SectionProps } from '../types';

const Nav = styled.nav`
    font-family: Omori2;
    font-size: 2rem;
`;

const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    z-index: 900;
    background-color: rgba(230, 213, 255, 1);
    padding {
        bottom: 3rem;
    };
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    border: 3px solid black;
    border-top: 0;
    transition: border-top-left-radius 0.3s ease, border-top-right-radius 0.3s ease; /* Smooth transition */
`;

const StyledA = styled.a<{ alt: string }>`
    position: relative;
    color: rgba(0, 0, 0, 1);
    margin: 0 1rem;
    &:before {
        content: ${({ alt }) => `'${alt}'`};
        position: absolute;
        color: purple;
        top: -2px;
        left: 0;
        overflow: hidden;
        transition: all 0.3s;
        transform: scale(1.2);
        filter: drop-shadow(0 0 0.2rem purple);
        opacity: 0;
    }

    &:hover:before {
        transform: scale(1);
        opacity: 1;
    }
    &:hover {
        cursor: pointer;
    }

`;

interface HeaderProps {
    scrollTo: (ref: React.RefObject<HTMLDivElement>) => void;
    infos: SectionProps[]
};

const Header: React.FC<HeaderProps> = ({
    scrollTo,
    infos
}) => {
    return (
        <StyledHeader>
            <Nav>
                {infos.filter(info => !info.ignore).map((info, index) => (
                    <StyledA key={index} onClick={() => scrollTo(info.ref)} alt={info.name}><b>{info.name}</b></StyledA>
                ))}
            </Nav>
        </StyledHeader>
    );
};

export default Header;