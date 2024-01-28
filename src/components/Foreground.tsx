import React from 'react';

interface ForegroundProps {
    // Define prop types here
}

const Foreground: React.FC<ForegroundProps> = () => {
    // Component logic using props
    return (
        <div className=' fixed top-0 left-0 z-10 w-full h-full '></div>
    );
};

export default Foreground;