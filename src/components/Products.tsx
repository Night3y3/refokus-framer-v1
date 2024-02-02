import React from 'react';
import Product from './ui/Product';

interface ProductsProps {
    // Define prop types here
}

const Products: React.FC<ProductsProps> = () => {
    const products = [
        { title: "Arqitel", about: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.", live: "Live now", case: false, color: "linear-gradient(90deg, rgba(91,6,143,1) 0%, rgba(9,9,121,1) 28%, rgba(2,0,36,1) 100%)" },
        { title: "Maniv", about: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.", live: "Live now", case: false, color: "linear-gradient(90deg, rgba(89,50,16,1) 0%, rgba(70,43,20,1) 28%, rgba(147,71,34,1) 100%)" },
        { title: "Yahoo!", about: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.", live: "Live now", case: true, color: "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(71,56,42,1) 64%, rgba(103,99,96,1) 100%)" },
        { title: "cula", about: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.", live: "Live now", case: false, color: "linear-gradient(90deg, rgba(161,152,152,1) 0%, rgba(142,134,127,1) 64%, rgba(142,124,112,1) 100%)" },
        { title: "Summon", about: "We created a website for Summon that showcases their innovative technology through animated and captivating UI components and emerging technologies.", live: "Live now", case: false, color: "radial-gradient(circle, rgba(20,102,168,1) 29%, rgba(156,149,203,1) 86%, rgba(19,119,217,1) 100%)" },
    ]
    return (
        <div className=' mt-20'>
            {products.map((product) => {
                return (
                    <Product product={product} />
                )
            })}
        </div>
    );
};

export default Products;