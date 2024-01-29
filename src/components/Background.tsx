import React from 'react';
import NavBar from './NavBar';

interface BackgroundProps {
    // Define prop types here
}

const Background: React.FC<BackgroundProps> = () => {
    // Component logic using props
    return (
        <div className='fixed z-0 w-full h-full bg-zinc-800'>
            <NavBar />
            <h1 className='absolute text-[13vw] leading-none tracking-tighter top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-zinc-900 pointer-events-none'>Docs.</h1>
        </div>
    );
};

export default Background;