import styled, { keyframes } from 'styled-components';

export const openWindow = (link: string) => {
    return () => { window.open(`https://${link}`, '_blank'); }
}

export const convertRemToPixels = (rem: number) => {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export const squiggle = keyframes`
    0% {
        transform: translate(-1.5px, -1.5px);
        filter: url('#squiggly-0')
    }  
    25% {
        transform: translate(-1.5px, -1.5px);
        filter: url('#squiggly-1')
    }
    50% {
        transform: translate(-1.5px, -1.5px);
        filter: url('#squiggly-2')
    }
    75% {
        transform: translate(-1.5px, -1.5px);
        filter: url('#squiggly-3')
    }  
    100% {
        transform: translate(-1.5px, -1.5px);
        filter: url('#squiggly-4')
    }
`;
