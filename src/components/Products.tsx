import React, { useState } from 'react';
import Product from './ui/Product';
import { motion } from 'framer-motion';
import vid2 from '../assets/Maniv-Compressed.mp4'
import vid1 from '../assets/haufe.webm'
import yahoo from '../assets/yahoo.webm'
import summon from '../assets/summon.webm'
import weglot from '../assets/weglot.webm'


interface ProductsProps {
    // Define prop types here
}

const Products: React.FC<ProductsProps> = () => {
    const products = [
        { title: "Arqitel", about: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.", live: "Live now", case: false, color: "#03046F" },
        { title: "Maniv", about: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.", live: "Live now", case: false, color: "#18191D" },
        { title: "Yahoo!", about: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.", live: "Live now", case: true, color: "#0B0015" },
        { title: "cula", about: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.", live: "Live now", case: false, color: "#F97256" },
        { title: "Summon", about: "We created a website for Summon that showcases their innovative technology through animated and captivating UI components and emerging technologies.", live: "Live now", case: false, color: "#16172D" },
    ]

    const [pos, setPos] = useState(10);

    const mover = (val: number) => {
        setPos(val * 23)
    }

    return (
        <div className=' mt-20 relative'>
            {products.map((product, index) => {
                return (
                    <Product product={product} mover={mover} index={index} />
                )
            })}
            <div className='w-full h-full absolute top-0 pointer-events-none'>
                <motion.div initial={{ y: pos, x: "-50%" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: .4 }} animate={{ y: pos + `rem` }} className=' w-[23rem] h-[23rem]  absolute left-[45%] overflow-hidden'>
                    <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration: .4 }} animate={{ y: -pos + `rem` }} className=' w-full h-full  rounded-2xl'>
                        <video src={vid2}
                            autoPlay loop muted
                            className="w-full min-w-full min-h-full max-w-none">
                        </video>
                    </motion.div>
                    <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration: .4 }} animate={{ y: -pos + `rem` }} className=' w-full h-full  rounded-2xl'>
                        <video src={vid1}
                            autoPlay loop muted
                            className="w-full min-w-full min-h-full max-w-none">
                        </video>
                    </motion.div>
                    <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration: .4 }} animate={{ y: -pos + `rem` }} className=' w-full h-full  rounded-2xl'>
                        <video src={yahoo}
                            autoPlay loop muted
                            className="w-full min-w-full min-h-full max-w-none">
                        </video>
                    </motion.div>
                    <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration: .4 }} animate={{ y: -pos + `rem` }} className=' w-full h-full  rounded-2xl'>
                        <video src={weglot}
                            autoPlay loop muted
                            className="w-full min-w-full min-h-full max-w-none">
                        </video>
                    </motion.div>
                    <motion.div transition={{ ease: [0.76, 0, 0.24, 1], duration: .4 }} animate={{ y: -pos + `rem` }} className=' w-full h-full  rounded-2xl'>
                        <video src={summon}
                            autoPlay loop muted
                            className="w-full min-w-full min-h-full max-w-none">
                        </video>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Products;