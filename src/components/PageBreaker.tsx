import React from 'react';
import { VContainer } from '../types';
import pageBreaker from '../images/page-breaker.png';

const PageBreaker: React.FC = () => {
    return (
        <VContainer>
            <img src={pageBreaker}></img>
        </VContainer>
    );
};

export default PageBreaker;