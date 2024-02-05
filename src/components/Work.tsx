import React, { useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from "framer-motion"

interface WorkProps {
    // Define prop types here
}

const Work: React.FC<WorkProps> = () => {

    const [images, setImages] = useState([
        { url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png', top: "60%", left: "50%", isActive: false },
        { url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png', top: "75%", left: "44%", isActive: false },
        { url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png', top: "45%", left: "42%", isActive: false },
        { url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png', top: "60%", left: "48%", isActive: false },
        { url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png', top: "73%", left: "53%", isActive: false },
        { url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png', top: "85%", left: "43%", isActive: false },
    ])

    const { scrollYProgress } = useScroll();

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        scrollShowImage(Math.floor(latest * 100));
    })

    function scrollShowImage(scrollValue: number): void {

        function activeImage(arr: number[]): void {
            setImages(images => images.map((image, index) => (arr.indexOf(index) === -1 ? { ...image, isActive: false } : { ...image, isActive: true })))
        }

        switch (scrollValue) {
            case 0: activeImage([]); break;
            case 2: activeImage([0]); break;
            case 6: activeImage([0, 1]); break;
            case 8: activeImage([0, 1, 2]); break;
            case 12: activeImage([0, 1, 2, 3]); break;
            case 16: activeImage([0, 1, 2, 3, 4]); break;
            case 20: activeImage([0, 1, 2, 3, 4, 5]); break;
        }
    }

    return (
        <div className='w-full '>
            <div className='relative mx-auto text-center max-w-screen-xl'>
                <h1 className=' text-[28vw] leading-none font-medium tracking-wide select-none'>work</h1>
                <div className='top-0 absolute w-full h-full '>
                    {images.map((image) => (image.isActive && <img className=" w-60 absolute rounded-lg -translate-x-[50%] -translate-y-[50%]" style={{ top: image.top, left: image.left }} src={image.url} alt="" />))}
                </div>
            </div>

        </div>
    );
};

export default Work;