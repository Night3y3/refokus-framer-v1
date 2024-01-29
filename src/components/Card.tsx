import React from 'react';
import getRandomColor from '../utils/helper';

interface CardProps {
    // Define prop types here
}

const Card: React.FC<CardProps> = () => {
    const randomBackground = getRandomColor();
    return (
        <div className={` w-52 rounded-[20px] h-72 ${randomBackground}`} ></div>
    );
};

export default Card;