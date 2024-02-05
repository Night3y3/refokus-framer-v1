import { motion } from 'framer-motion';
import React from 'react';

interface MarqueeProps {
    imgurls: string[];
    reverse: number;

}

const Marquee: React.FC<MarqueeProps> = ({ imgurls, reverse }) => {
    // Component logic using props
    return (
        <div className={`flex w-full overflow-hidden whitespace-nowrap ${reverse === 1 && ` flex-row-reverse`}`}>
            <motion.div initial={{ x: "0" }} animate={{ x: reverse === 1 ? "100%" : "-100%" }} transition={{ ease: "linear", duration: 10, repeat: Infinity }} className='flex flex-shrink-0 gap-40 py-10 pr-10'>
                {imgurls.map((imgurl, index) => <img key={index} src={imgurl} alt="marquee" className="" />)}
            </motion.div>
            <motion.div initial={{ x: "0" }} animate={{ x: reverse === 1 ? "100%" : "-100%" }} transition={{ ease: "linear", duration: 10, repeat: Infinity }} className='flex flex-shrink-0 gap-40 py-10 pr-10'>
                {imgurls.map((imgurl, index) => <img key={index} src={imgurl} alt="marquee" className="" />)}
            </motion.div>


        </div>
    );
};

export default Marquee;