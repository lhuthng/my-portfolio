import React, { useState, useRef, useEffect} from 'react';
import { VContainer } from '../types';
import wing from '../images/page-breaker-wing.png';
import body from '../images/page-breaker-body.png';
import core from '../images/page-breaker-core.png';
import styled from 'styled-components';
import { squiggle } from '../common';

const Container = styled(VContainer)`
    width: 100%;
    height: 96px;
    filter: drop-shadow(0 0 0.2rem purple);
    margin-top: 2rem;
`

const StyledImage = styled.img<{offset: number}>`
    top: ${({ offset }) => offset}px;
    position: absolute;
    animation: ${squiggle} 0.5s linear infinite;
    animation-delay: 0.5s;
`;

const PageBreaker: React.FC = () => {
    const [width, setWidth] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            if (ref.current) {
                setWidth(ref.current.offsetWidth);
            }
        }
        handleResize();
        const resizeObserver = new ResizeObserver(handleResize);
        if (ref.current) resizeObserver.observe(ref.current);
        return () => {
            if (ref.current) resizeObserver.unobserve(ref.current);
            resizeObserver.disconnect();
        }
    }, []);

    return (
        <Container ref={ref}>
            {width >= 816 && <StyledImage src={wing} offset={0}></StyledImage>}
            {width >= 464 && <StyledImage src={body} offset={16}></StyledImage>}
            <StyledImage src={core} offset={0}></StyledImage>
        </Container>
    );
};

export default PageBreaker;