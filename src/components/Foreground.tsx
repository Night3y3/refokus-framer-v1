import React from 'react';
import Card from './Card';

interface ForegroundProps {
    // Define prop types here
}

const Foreground: React.FC<ForegroundProps> = () => {


    return (
        <div className=' fixed top-0 left-0 z-10 w-full h-full '>
            <Card />
        </div>
    );
};

export default Foreground;