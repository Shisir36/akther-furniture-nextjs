"use client"
import Image from 'next/image';
import React from 'react';
import logo1 from "./Logos/image 9.png";
import logo2 from "./Logos/image 10.png";
import logo3 from "./Logos/image 11.png";
import logo4 from "./Logos/image 13.png";
import icon1 from "./Icon/Home2_icons-1 1.png"
import icon2 from "./Icon/Home2_icons-2 1.png"
import icon3 from "./Icon/Home2_icons-3 1.png"
import icon4 from "./Icon/Home2_icons-4 1.png"
import bg2 from "./BrangbgPic/image 14.png"
import bg3 from "./BrangbgPic/image 15.png"
import Marquee from 'react-fast-marquee';
import { useMediaQuery } from 'react-responsive';

const OurBrands = () => {
    const images = [
        { src: logo1, alt: 'Image 1' },
        { src: logo2, alt: 'Image 2' },
        { src: logo3, alt: 'Image 3' },
        { src: logo4, alt: 'Image 4' },
    ];
    const icons = [
        { src: icon1, alt: 'Image 1', text: '24H <br> Service<br>More Info' },
        { src: icon2, alt: 'Image 2', text: 'A FREE<br> RETURNS<br>More Info' },
        { src: icon3, alt: 'Image 3', text: 'ORDER<br> TRACKING<br>More Info' },
        { src: icon4, alt: 'Image 4', text: 'FAST <br>DELIVERY<br>More Info' },
    ];
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    return (
        <div className='md:max-w-screen-2xl mx-auto md:py-10 py-5'>
            <div>

                {isMobile ?
                    <Marquee>
                        <div className="flex gap-2 items-center ">
                            {images.map((image, index) => (
                                <div key={index} className="bg-white rounded-sm md:h-full md:w-full h-[150px] p-4 flex items-center justify-center">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            ))}
                        </div>
                    </Marquee>
                    :
                    <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
                        {images.map((image, index) => (
                            <div key={index} className="bg-white border rounded-sm h-[75%] w-full p-6  shadow-sm flex items-center justify-center">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={250}
                                    height={250}
                                />
                            </div>
                        ))}
                    </div>
                }
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-20">
                    {icons.map((icon, index) => (
                        <div key={index} className="flex items-center justify-center gap-9 p-2 rounded-lg">
                            <div className="w-16 h-16 relative">
                                <Image src={icon.src} alt={icon.alt} layout="fill" objectFit="contain" />
                            </div>
                            <p className="ml-2 md:whitespace-pre-line " dangerouslySetInnerHTML={{ __html: icon.text }} />
                        </div>
                    ))}
                </div>
            </div>
            <div className=' md:grid grid-cols-3 gap-10 md:mt-10 '>
                <div className="w-full h-80 relative border overflow-hidden text-left mb-4 md:mb-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1603204077067-65ee7573cf3f?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}></div>
                    <div className="absolute bottom-0 left-0 w-full h-[25%] bg-orange-500 bg-opacity-75 flex flex-col justify-end px-10 py-3">
                        <p className="text-white text-lg font-semibold">April 07, 2022(1)</p>
                        <p className="text-white text-lg font-semibold">bedroom set bedroom set-4</p>
                    </div>
                </div>
                <div className="w-full h-80 relative border overflow-hidden text-left mb-4 md:mb-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1617387247724-03782b322835?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}></div>
                    <div className="absolute bottom-0 left-0 w-full h-[25%] bg-orange-500 bg-opacity-75 flex flex-col justify-end px-10 py-3">
                        <p className="text-white text-lg font-semibold">April 07, 2022(1)</p>
                        <p className="text-white text-lg font-semibold">bedroom set bedroom set-4</p>
                    </div>
                </div>
                <div className="w-full h-80 relative border overflow-hidden text-left md:mb-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://ae01.alicdn.com/kf/S9d513f17f41c40de84ae44e10a785a0ci/furniture-1-8m-double-solid-wood-bedroom-solid-wood-American-solid-wood-bed-complete-set-of.jpg)' }}></div>
                    <div className="absolute bottom-0 left-0 w-full h-[25%] bg-orange-500 bg-opacity-75 flex flex-col justify-end px-10 py-3">
                        <p className="text-white text-lg font-semibold">April 07, 2022(1)</p>
                        <p className="text-white text-lg font-semibold">bedroom set bedroom set-4</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OurBrands;
