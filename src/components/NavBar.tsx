import React from 'react';

interface NavBarProps {
    // Define prop types here
}

const NavBar: React.FC<NavBarProps> = () => {
    // Component logic using props
    return (
        <div className=' absolute py-10 w-full flex justify-center '>
            <h1 className='text-zinc-500 selection:bg-none cursor-pointer' onClick={() => console.log("refresh")}>Documents.</h1>

        </div>
    );
};

export default NavBar;