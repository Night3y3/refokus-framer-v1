import React from 'react';
import Button from './Button';

interface NavBarProps {
    // Define prop types here
}

const NavBar: React.FC<NavBarProps> = () => {
    // Component logic using props
    return (
        <div className=' max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-600'>
            <div className='left flex items-center'>
                <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
                <div className='links flex gap-14 ml-20 '>
                    {["Home", "Work", "Carrier", "", "News"].map((link, index) => (link.length === 0 ? <span className=' w-[1px] h-6 bg-zinc-600'></span> : (<a href="#" className='px-4 text-sm flex items-center gap-1 font-regular'>
                        {index === 1 && <span style={{ boxShadow: "0 0 0.75em #00FF19" }} className=' inline-block w-1 h-1 rounded bg-green-400'></span>}
                        {link}
                    </a>)))}
                </div>
            </div>
            <Button />

        </div>
    );
};

export default NavBar;