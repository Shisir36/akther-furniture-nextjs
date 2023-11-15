import React from 'react';
import homeFurnitureImage1 from "./HomeFurnitureImage/122-06.showcase1.jpg"
import homeFurnitureImage2 from "./HomeFurnitureImage/125-01.-sofa-set_a.jpg"
import homeFurnitureImage3 from "./HomeFurnitureImage/154-07.-cupboard_a.jpg"
import homeFurnitureImage4 from "./HomeFurnitureImage/156-08.-dressing-table_a.jpg"
import homeFurnitureImage5 from "./HomeFurnitureImage/157-04.-mattress_a.jpg"
import homeFurnitureImage6 from "./HomeFurnitureImage/160-02.-bedroom-set_a.jpg"
import homeFurnitureImage7 from "./HomeFurnitureImage/214-05.-dinner-wagon_a.jpg"
import homeFurnitureImage8 from "./HomeFurnitureImage/215-03.-dinning-set_a.jpg"
import Image from 'next/image';
import OfficeFurniture from '../OfficeFurniture/OfficeFurniture';
import Link from 'next/link';

const HomeFurniture = () => {
    const homeFurnitureData = [
        {
            id: 1,
            name: "Sofa Set",
            image: homeFurnitureImage1

        },
        {
            id: 2,
            name: "Bed Roome Set",
            image: homeFurnitureImage2

        },
        {
            id: 3,
            name: "Dining Set",
            image: homeFurnitureImage3

        },
        {
            id: 4,
            name: "Dressing Table",
            image: homeFurnitureImage4

        },
        {
            id: 5,
            name: "Sofa Set",
            image: homeFurnitureImage5

        },
        {
            id: 6,
            name: "Mattress",
            image: homeFurnitureImage6

        },
        {
            id: 7,
            name: "Dinner Wagon",
            image: homeFurnitureImage7

        },
        {
            id: 8,
            name: "Showcase & Tv Rack",
            image: homeFurnitureImage8

        },
    ]
    return (
        <div>

            <div className='md:max-w-screen-2xl mx-auto'>
                <h1 className=' text-center md:text-2xl text-xl font-semibold'>EXPLORE OUR POPULAR HOME FURNITURE CATEGORIES</h1>
                <div className=' grid md:grid-cols-8 grid-cols-2 items-center justify-around mt-7 max-w-screen-xl mx-auto gap-4 px-2'>
                    {
                        homeFurnitureData.map(data => (
                           <Link key={data.id} href={''}>
                            <div  className=' hover:border hover:shadow-xl grayscale hover:shadow-cyan-500/50  hover:grayscale-0 p-4 md:h-[130px] w-full'>
                                <div className=' flex justify-center' ><Image src={data.image } alt='' width={60} height={60}></Image></div>
                                <div className=' mt-3 text-sm flex justify-center'><p>{data.name}</p></div>
                            </div>
                           </Link>
                        ))
                    }
                </div>
            </div>
            <div className=' mt-5'>
                <OfficeFurniture/>
            </div>
        </div>
    );
};

export default HomeFurniture;