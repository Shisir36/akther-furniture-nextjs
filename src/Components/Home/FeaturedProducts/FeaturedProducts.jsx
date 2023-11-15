"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { BsHeart } from 'react-icons/bs';
import image from "./ProductImage/image 12.png";
import image2 from "./ProductImage/image 2.png";
import image3 from "./ProductImage/image 3.png";
import image4 from "./ProductImage/Lovepik_com-400846877-sofa-chair 1.png";
import vc from "./ProductImage/Vector.png";
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';



const FeaturedProducts = () => {
    const products = [
        {
            id: 1,
            name: ' Table Crossby',
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
        {
            id: 5,
            name: 'Hughesg chair',
            image: image4,
            price: '35,000 BDT',
            color: 'green',
            isNew: true,
        },
        {
            id: 6,
            name: 'Hughesh chair',
            image: image2,
            price: '65,000 BDT',
            color: 'orange',
            isNew: true,
        },
        {
            id: 7,
            name: 'Hughesh chair',
            image: image2,
            price: '65,000 BDT',
            color: 'orange',
            isNew: true,
        },
        {
            id: 8,
            name: 'Hughesh chair',
            image: image2,
            price: '65,000 BDT',
            color: 'orange',
            isNew: true,
        },
    ];
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    const totalItems = products.length;

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    // for mobile device
    const initialProductCount = 4;
    const [visibleProducts, setVisibleProducts] = useState(initialProductCount);

    const productsToDisplay = products.slice(0, visibleProducts);

    const showMore = () => {
        setVisibleProducts(visibleProducts + 4);
    };

    // for mobile device 
    const showMoreButton =
        visibleProducts < products.length ? (
            <button
                className="bg-[#FAA61A] text-white py-1 px-4 mt-4 text-center"
                onClick={showMore}
            >
                Show More
            </button>
        ) : null;

    return (
        <div>
            <div className='relative  bg-[#D3DDE6] md:h-full my-10 overflow-hidden '>
                {
                    isMobile ?
                        <div>
                            <div className='uppercase h1 font-semibold text-center text-2xl pt-5 ms-5'>featured products</div>
                            <div className=" mx-auto grid mt-[50px]  grid-cols-2 gap-2 px-2">
                                {productsToDisplay.map((product) => (
                                    <div key={product.id} className="w-full h-full bg-white overflow-hidden shadow-md relative text-center z-20">
                                        {product.isNew && (
                                            <div className="absolute top-2 left-2 text-green-500 px-2 py-1 rounded">New</div>
                                        )}
                                        <BsHeart className="absolute text-xl text-red-500 top-2 right-2 mt-2 mr-2" />
                                        <div className="mt-20 overflow-hidden">
                                            <Image src={product.image} alt={product.name} width={200} height={200} className="mx-auto w-24 h-24" />
                                        </div>
                                        <div className="h-[115px] mt-5">
                                            <h2 className=" font-medium uppercase">{product.name}</h2>
                                            <div className="flex items-center justify-center mt-4">
                                                <div
                                                    className={`w-3 h-3 mx-2 rounded-full bg-[#F1DAB5] cursor-pointer`}
                                                ></div>
                                                <div
                                                    className={`w-3 h-3 mx-2 rounded-full bg-gray-300 cursor-pointer`}
                                                ></div>
                                                <div
                                                    className={`w-3 h-3 mx-2 rounded-full bg-[#F1DAB5] cursor-pointer`}
                                                ></div>
                                            </div>
                                            <div className="flex items-center mt-5 justify-center">
                                                <span className="text-gray-500 text-xs">Start from - {product.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='absolute top-0  right-0' style={{
                            }}>
                                <Image src={vc} alt='img' width={600} height={600}></Image>
                            </div>
                            <div className=' text-center mx-auto mb-4'>
                                {showMoreButton}
                            </div>
                        </div> :
                        <div className=' mb-4 '>
                            <div className="flex justify-end mt-4">
                                <button
                                    onClick={handlePrevPage}
                                    disabled={currentPage === 1}
                                    className="mr-2"
                                >
                                    &lt;
                                </button>
                                <p>
                                    {currentPage}/{Math.ceil(totalItems / itemsPerPage)}
                                </p>
                                <button
                                    onClick={handleNextPage}
                                    disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
                                    className="ml-2"
                                >
                                    &gt;
                                </button>
                            </div>
                            <div className='uppercase h1 font-semibold text-center text-2xl pt-5 ms-5'>featured products</div>
                            <div className="md:max-w-screen-2xl mx-auto grid mt-[50px]  md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5 px-2">
                                {products.slice(startIndex, endIndex).map((product, index) => (
                                    <Link key={product.id} href={`/${product.id}`}>
                                        <div  className="w-full h-full bg-white overflow-hidden shadow-md relative text-center z-20">
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
                                    </Link>
                                ))}
                            </div>
                            <div className='absolute top-0  right-0' style={{
                            }}>
                                <Image src={vc} alt='img' width={600} height={600}></Image>
                            </div>
                        </div>
                }
            </div>

        </div>
    );
};

export default FeaturedProducts;
