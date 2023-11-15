import Image from 'next/image';
import React from 'react';
import { BsHeart } from 'react-icons/bs';
import image from "./ProductImage2/image 1.png";
import image2 from "./ProductImage2/image 2.png";
import image3 from "./ProductImage2/image 3.png";
import image4 from "./ProductImage2/image 4.png";
import vc from "./ProductImage2/Vector.png";



const FeaturedProducts2 = () => {
    const products = [
        {
            id: 1,
            name: 'Dressing table crossby',
            image: image,
            price: '43,850 BDT',
            color: '#F1DAB5',
            isNew: true,
        },
        {
            id: 2,
            name: 'Hughesh chair',
            image: image2,
            price: '65,000 BDT',
            color: 'orange',
            isNew: true,
        },
        {
            id: 3,
            name: 'Florence bed',
            image: image3,
            price: '45,000 BDT',
            color: 'blue', // Each product can have its own color
            isNew: true,
        },
        {
            id: 4,
            name: 'Hughesg chair',
            image: image4,
            price: '35,000 BDT',
            color: 'green',
            isNew: true,
        },
        // Add more products as needed
    ];

    return (
        <div className='relative  bg-[#EDE8E8] md:h-[580px] md:my-10 mt-96 '>
            <div className='uppercase h1 font-semibold text-center text-2xl pt-5 ms-5'>featured products</div>
            <div className="max-w-screen-2xl mx-auto grid mt-[50px]  sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
                {products.map((product) => (
                    <div key={product.id} className="w-full h-full bg-white overflow-hidden shadow-md relative text-center z-20">
                        {product.isNew && (
                            <div className="absolute top-2 left-2 text-green-500 px-2 py-1 rounded">New</div>
                        )}
                        <BsHeart className="absolute text-2xl text-red-500 top-2 right-2 mt-2 mr-2" />
                        <div className="mt-20 overflow-hidden">
                            <Image src={product.image} alt={product.name} width={200} height={200} className="mx-auto w-40 h-40" />
                        </div>
                        <div className="h-36 py-16 mb-9">
                            <h2 className="text-lg font-medium uppercase">{product.name}</h2>
                            <div className="flex items-center justify-center mt-4">
                                <div
                                    className={`w-4 h-4 mx-2 rounded-full bg-[#F1DAB5] cursor-pointer`}
                                ></div>
                                <div
                                    className={`w-4 h-4 mx-2 rounded-full bg-gray-300 cursor-pointer`}
                                ></div>
                                <div
                                    className={`w-4 h-4 mx-2 rounded-full bg-[#F1DAB5] cursor-pointer`}
                                ></div>
                            </div>
                            <div className="flex items-center mt-3 justify-center">
                                <span className="text-gray-500">Start from - {product.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            * <div className='absolute top-0  right-0' style={{
            }}>
                <Image src={vc} alt='img' width={600} height={600}></Image>
            </div>
        </div>
    );
};

export default FeaturedProducts2;
