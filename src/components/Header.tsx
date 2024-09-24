import React from 'react';
import styled from 'styled-components';
import { SectionProps } from '../types';

const Nav = styled.nav`
    font-family: Omori2;
    font-size: 3rem;
    span {
        margin: 0 1rem;
        &: hover {
            cursor: pointer;
        }
    };
`;

const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    z-index: 3;
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
                    <span key={index} onClick={() => scrollTo(info.ref)}>{info.name}</span>
                ))}
            </Nav>
        </StyledHeader>
    );
};

export default Header;