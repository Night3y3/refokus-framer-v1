import React from 'react';

interface stripeProps {
    // Define prop types here
    url: string;
    number: number;
}

const Stripe: React.FC<stripeProps> = ({ url, number }) => {
    // Component logic using props
    return (
        <div className=' w-[16.69%] px-10 py-5 border-t border-b border-r border-zinc-600 flex justify-between items-center'>
            <img src={url} alt="" />
            <div className=' font-semibold'>{number}</div>
        </div>
    );
};

export default Stripe;