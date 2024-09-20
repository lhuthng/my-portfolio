import React from 'react';
import styled from 'styled-components';
import { SectionInfo } from '../types';

const Nav = styled.nav`

`;

interface HeaderProps {
    scrollTo: (ref: React.RefObject<HTMLDivElement>) => void;
    infos: SectionInfo[]
};

const Header: React.FC<HeaderProps> = ({
    scrollTo,
    infos
}) => {
    return (
        <header>
            <Nav>
                {infos.map((info) => (
                    <span onClick={() => scrollTo(info.ref)}>{info.name}</span>
                ))}
            </Nav>
        </header>
    );
};

export default Header;