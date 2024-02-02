import React from 'react';
import { CornerDownRight } from 'lucide-react';

interface ButtonProps {
    text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
    // Component logic using props
    return (
        <div className=' min-w-36 px-4 py-1.5 bg-zinc-100 text-black rounded-full flex items-center justify-between'>
            <span className=' text-sm font-light'>{text}</span>
            <CornerDownRight size={12} />
        </div>
    );
};

export default Button;