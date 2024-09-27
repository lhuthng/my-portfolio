import React, { useState, useRef, useEffect} from 'react';
import { VContainer } from '../types';
import pageBreaker from '../images/page-breaker.png';
import smallPageBreaker from '../images/page-breaker-small.png';
import styled from 'styled-components';


const PageBreaker: React.FC = () => {
    const [src, setSrc] = useState(pageBreaker);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            if (ref.current) {
                setSrc(ref.current.offsetWidth < 812 ? smallPageBreaker : pageBreaker);
            }
        }
        const resizeObserver = new ResizeObserver(handleResize);
        if (ref.current) resizeObserver.observe(ref.current);
        return () => {
            if (ref.current) resizeObserver.unobserve(ref.current);
        }
    }, 
    []);

    return (
        <VContainer 
            ref={ref}
            style={{
                width: '100%',
                filter: 'drop-shadow(0 0 0.2rem purple)',
                marginTop: '4rem',
            }
        }>
            <img src={src} alt='Breaker' />
        </VContainer>
    );
};

export default PageBreaker;