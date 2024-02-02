import React from 'react';

interface WorkProps {
    // Define prop types here
}

const Work: React.FC<WorkProps> = () => {
    let images = [
        { url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png', top: "60%", left: "47%", isActive: true },
        { url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png', top: "56%", left: "44%", isActive: false },
        { url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png', top: "45%", left: "56%", isActive: false },
        { url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png', top: "60%", left: "48%", isActive: false },
        { url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png', top: "43%", left: "40%", isActive: false },
        { url: 'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png', top: "65%", left: "55%", isActive: false },
    ]
    return (
        <div className='w-full '>
            <div className='relative mx-auto text-center max-w-screen-xl'>
                <h1 className=' text-[28vw] leading-none font-medium tracking-wide select-none'>work</h1>
                <div className='top-0 absolute w-full h-full '>
                    {images.map((image) => (image.isActive && <img className=" w-64 absolute rounded-lg -translate-x-[50%] -translate-y-[50%]" style={{ top: image.top, left: image.left }} src={image.url} alt="" />))}
                </div>
            </div>

        </div>
    );
};

export default Work;