import React, { useEffect, useState } from 'react';
import { HContainer, VContainer, Layout, Title } from '../types';
import LGameProject from './projects/LGameProject';

const Projects: React.FC = () => {
    // const appUrl = `https://thangvps.duckdns.org/apps/L-Game`
    // const [iframeSize, setIframeSize] = useState<{ width: number, height: number } | null>(null);
    // useEffect(() => {
    //     console.log("Hi");
    //     const fetchSize = async() => {
    //         try {
    //             const response = await fetch(`${appUrl}/size`);
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             const size = await response.json();
    //             setIframeSize(size);
    //         } 
    //         catch (error) {
    //             console.error('Error fetching size: ', error);
    //         }
    //     };
    //     fetchSize();
    // }, [])
    // return (
    //     <Layout>
    //         <Title>
    //             <h1>~Projects~</h1>
    //         </Title>
    //         {iframeSize && (
    //             <iframe 
    //                 src={appUrl}
    //                 width={iframeSize.width + 5}
    //                 height={iframeSize.height + 5}
    //             />
    //         )}
    //     </Layout>
    // )
    return (
        <Layout>
            <Title>
                <h1>~Projects~</h1>
            </Title>
            <LGameProject />
        </Layout>
    )
};

export default Projects;