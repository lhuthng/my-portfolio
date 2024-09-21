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
    background-color: #f0f0f0;
    padding: 1rem;
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