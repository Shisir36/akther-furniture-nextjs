"use client"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import React, { useState } from 'react';
import vector from "./vector/Vector.png"
import image1 from "./Chairs/Armchair 1.png"
import image2 from "./Chairs/chair-g662beb7f3_1920 1.png"
import image3 from "./Chairs/Door 1.png"
import image4 from "./Chairs/kindpng_43192 1.png"
import image5 from "./Chairs/Modern-Chair-PNG-HD-Quality 1.png"
import { useMediaQuery } from 'react-responsive';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const images = [
        { title: 'Armchair', src: image1, bg: "#FCEEE2" },
        { title: 'Office', src: image2, bg: "#B4D2D0" },
        { title: 'Door', src: image3, bg: "#ECE9E4" },
        { title: 'Sofa', src: image4, bg: "#D3DDE6" },
        { title: 'Modern Chair', src: image5, bg: "#FCEEE2" },
        { title: 'Modern Chair', src: image5, bg: "#FCEEE2" },
        { title: 'Armchair', src: image1, bg: "#FCEEE2" },
        { title: 'Armchair', src: image1, bg: "#FCEEE2" },
        { title: 'Armchair', src: image1, bg: "#FCEEE2" },
        { title: 'Office', src: image2, bg: "#B4D2D0" },
        { title: 'Office', src: image2, bg: "#B4D2D0" },
        { title: 'Office', src: image2, bg: "#B4D2D0" },
    ];

    const groupedImages = images.reduce((acc, curr, index) => {
        const groupIndex = Math.floor(index / 1);
        if (!acc[groupIndex]) {
            acc[groupIndex] = [];
        }
        acc[groupIndex].push(curr);
        return acc;
    }, []);

    console.log(groupedImages);


    const itemsPerPage = 5;
    const totalItems = images.length;

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    return (
        <div className='bg-white'>
            <h1 className='uppercase text-2xl text-center md:pt-5 font-semibold mt-10'>Featured Categories</h1>

            <div className='md:px-44'>
                {isMobile ? (
                    <Carousel
                        showThumbs={true}
                        showArrows={true}
                        style={{ maxWidth: '1000px' }}
                        renderIndicator={() => null}
                    >
                        {groupedImages.map((group, index) => (
                            <div key={index} className=' grid grid-cols-1'>
                                {group.map((image, subIndex) => (

                                    <div key={index} className=' px-10'>
                                        <div style={{ backgroundColor: image.bg }} className='relative top-48 w-full h-[345px]'>
                                            <div className='absolute top-0 right-0 flex flex-row-reverse gap-14 justify-center items-center w-[full]'>
                                                <div>
                                                    <Image alt={image.title} src={vector} width={100} height={100} className=' h-[155px]' />
                                                </div>
                                                <div className=''> <h1 className='uppercase text-sm mt-20'>{image.title}</h1> </div>
                                            </div>
                                        </div>
                                        <div className='absolute top-20 left-40'>
                                            <Image alt={image.title} src={image.src} width={150} height={150} className='h-[170px] w-[170px]' />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </Carousel>
                ) : (
                    <div className=' md:max-w-screen-2xl'>
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
                        <div className='grid md:grid-cols-5 grid-cols-2 mx-auto md:gap-8 gap-4 md:h-[500px] w-full'>
                            {images.slice(startIndex, endIndex).map((image, index) => (
                                <div key={index} className='md:h-[300px] h-full relative w-full md:mt-16'>
                                    <div style={{ backgroundColor: image.bg }} className='relative top-48 w-full h-[138px]'>
                                        <div className='absolute top-0 right-0 md:flex flex-row-reverse justify-start items-center md:w-[400px]'>
                                            <Image alt={image.title} src={vector} width={150} height={150} />
                                            <h1 className='uppercase text-sm -mt-10  md:mt-16 text-left'>{image.title}</h1>
                                        </div>
                                    </div>
                                    <div className='absolute top-20 left-24'>
                                        <Image alt={image.title} src={image.src} width={150} height={150} className='h-[170px] w-[160px]' />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageCarousel;

