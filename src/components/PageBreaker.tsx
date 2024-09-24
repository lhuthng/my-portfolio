import React from 'react';
import { VContainer } from '../types';
import pageBreaker from '../images/page-breaker.png';



const PageBreaker: React.FC = () => {
    return (
        <VContainer style={{
            filter: 'drop-shadow(0 0 0.2rem purple)',
            marginTop: '4rem'
        }}>
            <img src={pageBreaker}></img>
        </VContainer>
    );
};

export default PageBreaker;