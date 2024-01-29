import React from 'react';
import Card from './Card';

interface ForegroundProps {
    // Define prop types here
}

const Foreground: React.FC<ForegroundProps> = () => {


    return (

        <div className=' top-0 left-0 z-10 w-full h-full overflow-hidden '>
            {Array.from({ length: 12 }).map((_, index) => (
                <Card key={index} />
            ))}
        </div>

    );
};

export default Foreground;