import React from 'react';

interface TurbelenceFilterProps {
    id: number;
}

const TurbelenceFilter: React.FC<TurbelenceFilterProps> = ({ id }) => {
    return (
        <filter id={`squiggly-${id}`}>
            <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="1" result="noise" seed={Math.floor(Math.random() * 100000).toString()}/>
            <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="3" />
        </filter>
    );
}

export default TurbelenceFilter;