import React from 'react';
// @ts-ignore
import Card from './ui/card';


interface CardsProps {
    // Define prop types here
}

const Cards: React.FC<CardsProps> = () => {
    // Component logic using props
    return (
        <div className='w-full mt-10'>
            <div className='mx-auto max-w-screen-xl py-20 flex gap-1 justify-center'>
                <Card width="w-1/3" />
                <Card width="w-2/3" />
            </div>

        </div>
    );
};

export default Cards;