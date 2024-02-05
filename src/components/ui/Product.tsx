import React, { useState } from 'react';
import Button from '../Button';

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
        <div className={`w-full h-[23rem] py-10 text-white transition duration-300 ease-in-out ${hover ? "" : ""}`} style={hover ? { background: product.color } : {}}>
            <div onMouseEnter={() => mover(index)} className=' mx-auto max-w-screen-xl flex justify-between items-center'>
                <h1 className=' capitalize font-semibold text-5xl'>{product.title}</h1>
                <div className='details w-1/3'>
                    <p className=' mb-10'>{product.about}</p>
                    {hover ? (<>
                        <div className='flex gap-5 items-center'>
                            <Button text={product.live} />
                            {product.case ? <Button text='Case study' /> : null}

                        </div>
                    </>) : null}
                </div>
            </div>
        </div>
    );
};

export default Product;