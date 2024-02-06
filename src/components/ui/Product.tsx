import React, { useState } from 'react';
import Button from '../Button';
import { motion } from 'framer-motion';

interface ProductProps {
    product: {
        title: string;
        about: string;
        live: string;
        case: boolean;
        color: string;
    };
    mover: (val: number) => void;
    index: number;
}

const Product: React.FC<ProductProps> = ({ product, mover, index }) => {
    const [hover, setHover] = useState(false);
    return (
        <motion.div whileHover={{ backgroundColor: product.color, padding: "25px" }} className={`h-[23rem] py-10 text-white`} style={hover ? { background: product.color } : {}}>
            <div onMouseEnter={() => mover(index)} className=' mx-auto max-w-screen-xl flex justify-between items-center'>
                <h1 className=' capitalize font-semibold text-5xl'>{product.title}</h1>
                <div className='details w-1/3 flex items-center justify-center'>
                    <p className=' mb-10'>{product.about}</p>
                    {hover ? (<>
                        <div className='flex gap-5 items-center'>
                            <Button text={product.live} />
                            {product.case ? <Button text='Case study' /> : null}

                        </div>
                    </>) : null}
                </div>
            </div>
        </motion.div>
    );
};

export default Product;