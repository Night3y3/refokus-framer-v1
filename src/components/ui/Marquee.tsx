import React from 'react';

interface MarqueeProps {
    imgurls: string[];

}

const Marquee: React.FC<MarqueeProps> = ({ imgurls }) => {
    // Component logic using props
    return (
        <div className='flex py-8 gap-32 w-screen overflow-hidden whitespace-nowrap'>
            {imgurls.map((imgurl, index) => <img key={index} src={imgurl} alt="marquee" className=" w-30 flex-shrink-0" />)}
            {imgurls.map((imgurl, index) => <img key={index} src={imgurl} alt="marquee" className=" w-30 flex-shrink-0" />)}
        </div>
    );
};

export default Marquee;