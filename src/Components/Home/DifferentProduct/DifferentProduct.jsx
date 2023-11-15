"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import furniture1 from "./furniturePic/10984-CF339-bryant-daybed-essence-ash-t1-2_t 1.png"
import furniture2 from "./furniturePic/10984-CF339-bryant-daybed-essence-ash-t1-2_t 7 (1).png"
import furniture3 from "./furniturePic/10984-CF339-bryant-daybed-essence-ash-t1-2_t 7.png"
import furniture4 from "./furniturePic/image 10.png"
import furniture5 from "./furniturePic/image 11.png"
import furniture6 from "./furniturePic/image 5.png"
import furniture7 from "./furniturePic/image 7.png"
import furniture8 from "./furniturePic/image 8.png"
import furniture9 from "./furniturePic/image 9.png"
import furniture10 from "./furniturePic/image 8 (1).png"
import { useMediaQuery } from 'react-responsive';

const DifferentProduct = () => {
    const [activeTab, setActiveTab] = useState('newProducts');
    const data = [
        {
            id: 1,
            name: 'Item 1',
            image: furniture1,
            text: 'Modern Beige Reversible Sectional Sofa',
            price: '৳ 375,000',
        },
        {
            id: 2,
            name: 'Item 2',
            image: furniture2,
            text: 'Modern Beige Reversible Sectional Sofa',
            price: '৳ 375,000',
        },
        {
            id: 3,
            name: 'Item 3',
            image: furniture3,
            text: 'Modern Beige Reversible Sectional Sofa',
            price: '৳ 375,000',
        },
        {
            id: 4,
            name: 'Item 4',
            image: furniture4,
            text: 'Modern Beige Reversible Sectional Sofa',
            price: '৳ 375,000',
        },
        {
            id: 5,
            name: 'Item 5',
            image: furniture5,
            text: 'Modern Beige Reversible Sectional Sofa',
            price: '৳ 375,000',
        },
        {
            id: 6,
            name: 'Item 6',
            image: furniture6,
            text: 'Modern Beige Reversible Sectional Sofa',
            price: '৳ 375,000',
        },
        {
            id: 7,
            name: 'Item 7',
            image: furniture7,
            text: 'Modern Beige Reversible Sectional Sofa',
            price: '৳ 375,000',
        },
        {
            id: 8,
            name: 'Item 8',
            image: furniture8,
            text: 'Modern Beige Reversible Sectional Sofa',
            price: '৳ 395,000',
        },
    ];

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    return (
        <div className=' max-w-screen-2xl mx-auto py-14 gap-5 overflow-hidden'>
            <div className="tabbed-content md:flex ">
                {isMobile ? "" : <div className="" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1615471618985-97108e2ba478?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", height: "565px", width: "750px", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>

                </div>}
                <div>
                    <div className="tabs">
                        <div
                            className={`tab mx-3 my-2 rounded-sm ${activeTab === "newProducts" ? "active bg-[#faa61a] text-white" : ""}`}
                            onClick={() => handleTabClick("newProducts")}
                        >
                            New Products
                        </div>
                        <div
                            className={`tab mx-3 my-2 ${activeTab === "featured" ? "active bg-[#faa61a] text-white" : ""}`}
                            onClick={() => handleTabClick("featured")}
                        >
                            Featured
                        </div>
                        <div
                            className={`tab mx-3 my-2 ${activeTab === "popular" ? "active bg-[#faa61a] text-white" : ""}`}
                            onClick={() => handleTabClick("popular")}
                        >
                            Popular
                        </div>
                    </div>
                    <div className="content ">
                        {activeTab === "newProducts" && (
                            <div className="product-list grid grid-cols-2">
                                {data?.slice(0, 4)?.map((item) => (
                                    <div key={item.id} className="p-4 lg:w-full border ">
                                        <div className="h-full md:flex items-center justify-center text-center sm:text-left">
                                            <div className=' w-full'>
                                                <Image alt="team" className="flex-shrink-0 md:h-56 md:w-56 h-24 object-cover object-center sm:mb-0 mb-4" src={item.image} />
                                            </div>
                                            <div className=" sm:pl-8 w-full">
                                                <h2 className="title-font font-medium text-[15px] text-gray-900">{item.text}</h2>
                                                <h3 className="text-gray-500 mb-3">{item.price}</h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === "featured" && (
                            <div> <div className="product-list grid grid-cols-2">
                                {data?.slice(2, 6)?.map((item) => (
                                    <div key={item.id} className="p-4 lg:w-full border ">
                                        <div className="h-full md:flex items-center justify-center text-center sm:text-left">
                                            <div className=' w-full'>
                                                <Image alt="team" className="flex-shrink-0 md:h-56 md:w-56 h-24 object-cover object-center sm:mb-0 mb-4" src={item.image} />
                                            </div>
                                            <div className=" sm:pl-8 w-full">
                                                <h2 className="title-font font-medium text-[15px] text-gray-900">{item.text}</h2>
                                                <h3 className="text-gray-500 mb-3">{item.price}</h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div></div>
                        )}
                        {activeTab === "popular" && (
                            <div> <div className="product-list grid grid-cols-2">
                                {data?.slice(3, 7)?.map((item) => (
                                    <div key={item.id} className="p-4 lg:w-full border ">
                                        <div className="h-full md:flex items-center justify-center text-center sm:text-left">
                                            <div className=' w-full'>
                                                <Image alt="team" className="flex-shrink-0 md:h-56 md:w-56 h-24 object-cover object-center sm:mb-0 mb-4" src={item.image} />
                                            </div>
                                            <div className=" sm:pl-8 w-full">
                                                <h2 className="title-font font-medium text-[15px] text-gray-900">{item.text}</h2>
                                                <h3 className="text-gray-500 mb-3">{item.price}</h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div></div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DifferentProduct;
