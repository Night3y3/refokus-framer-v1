import React from 'react';
import { CornerDownRight } from 'lucide-react';

interface ButtonProps {
    // Define prop types here
}

const Button: React.FC<ButtonProps> = () => {
    // Component logic using props
    return (
        <div className=' min-w-36 px-4 py-1.5 bg-zinc-100 text-black rounded-full flex items-center justify-between'>
            <span className=' text-sm font-light'>Start a Project</span>
            <CornerDownRight size={12} />
        </div>
    );
};

export default Button;