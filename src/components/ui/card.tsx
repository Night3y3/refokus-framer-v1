import React from 'react';
import { MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface cardProps {
    // Define prop types here
    width: string;
}

const Card: React.FC<cardProps> = ({ width }) => {
    // Component logic using props
    return (
        // @ts-ignore
        <motion.div whileHover={{ backgroundColor: width === "w-2/3" && "#7443ff", padding: "25px" }} className={` ${width} bg-zinc-800 p-5 rounded-2xl flex flex-col justify-between min-h-[30rem]`}>
            <div className='w-full'>
                <div className='w-full flex justify-between items-center'>
                    <h1>Up Next:News</h1>
                    <MoveRight size={24} />
                </div>
                <h1 className='text-3xl font-medium mt-5'>Stories</h1>
            </div>
            <div className=' down w-full mt-20'>
                {width === 'w-2/3' && (
                    <>
                        <h1 className=' text-8xl font-semibold tracking-tight leading-none'>Start a Project</h1>
                        <button className=' rounded-full py-2 px-6 mt-3 border-2 border-zinc-300'>Contact us</button>
                    </>
                )}

                {width === 'w-1/3' && (
                    <>
                        <p className=' text-sm text-zinc-300 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </>
                )}
            </div>
        </motion.div>
    );
};

export default Card;