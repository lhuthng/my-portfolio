import styled, { keyframes } from 'styled-components';

export const openWindow = (link: string) => {
    return () => { window.open(`https://${link}`, '_blank'); }
}

export const convertRemToPixels = (rem: number) => {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export const squiggleCount = 15;
const waitTime = 0.1;
export const squiggleDuration = (waitTime * squiggleCount) + "s";
export const squiggleRandomDelay = () => Math.floor(Math.random() * squiggleCount * 2) * waitTime + "s";

export const squiggle = keyframes`
    ${Array.from({ length: squiggleCount + 1 }, (_, index) => {
        return `
            ${index / (squiggleCount - 1) * 100}% {
                transform: translate(-1px, -1px);
                filter: url('#squiggly-${index}')
            }
        `;
    }).join('')}
`;