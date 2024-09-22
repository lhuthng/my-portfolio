import React, { ReactNode } from "react";
import styled from 'styled-components';

export interface SectionProps {
    ref: React.RefObject<HTMLDivElement>;
    component: React.FC;
    name: string;
    ignore?: boolean;
};

export interface ImageButtonProps {
    frameImage: string;
    image: string;
    offset: number;
    onClick: () => void;
};

export interface WavingLetterProps {
    letter: string;
    delay: number;
};

export interface SkillEntityProps {
    name: string;
    icon: string;
    isLeft: boolean;
};

export interface ProjectEntityProps {
    name: string;
    image: string;
    description: ReactNode;
    skills: string[],
    category: 'program' | 'art',
    link?: string;
    expand?: ReactNode;
};

export interface SkillCategoryProps {
    name: string;
    skills: [string, string][];
    isLeft: boolean;
}

export const HContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const VContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Layout = styled(VContainer)`
    font-family: Omori2;
    font-size: 2.2rem;
    p {
        margin: 0;
        white-space: nowrap;
    };
`;

export const Title = styled(VContainer)`
    h1 {
        font-family: Omori1;
        margin: 0;
    };
    p {
        margin: 0;
    };
`;