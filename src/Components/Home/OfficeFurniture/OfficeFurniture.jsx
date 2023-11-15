import React from 'react';
import officeFurnitureImage1 from "./OfficeFurniturePic/290-file_cabinet_hover.png"
import officeFurnitureImage2 from "./OfficeFurniturePic/292-workstation_hover.png"
import officeFurnitureImage3 from "./OfficeFurniturePic/380-07.-computer-table-red.jpg"
import officeFurnitureImage4 from "./OfficeFurniturePic/382-09.-bookshelf-red.jpg"
import officeFurnitureImage5 from "./OfficeFurniturePic/402-ddd.png"
import officeFurnitureImage6 from "./OfficeFurniturePic/417-11.-conference-red.jpg"
import Image from 'next/image';
import Link from 'next/link';
const OfficeFurniture = () => {
    const OfficeFurnitureData = [
        {
            id: 1,
            name: "Table With Side Return",
            image: officeFurnitureImage1

        },
        {
            id: 2,
            name: "Computer Table",
            image: officeFurnitureImage2

        },
        {
            id: 3,
            name: "Bookshelf",
            image: officeFurnitureImage3

        },
        {
            id: 4,
            name: "Conference Table",
            image: officeFurnitureImage4

        },
        {
            id: 5,
            name: "File Cabinet",
            image: officeFurnitureImage5

        },
        {
            id: 6,
            name: "Work Station",
            image: officeFurnitureImage6

        }
    ]
    return (
        <div>

            <div>
                <h1 className=' text-center md:text-2xl text-xl font-semibold'>EXPLORE OUR POPULAR OFFICE FURNITURE CATEGORIES</h1>
                <div className=' grid md:grid-cols-6 grid-cols-2 items-center justify-around mt-7 max-w-screen-xl mx-auto gap-4 px-2'>
                    {
                        OfficeFurnitureData.map(data => (
                           <Link  key={data.id} href={""}>
                            <div  className=' hover:border hover:shadow-xl grayscale hover:shadow-cyan-500/50  hover:grayscale-0 p-4 md:h-[130px] w-full'>
                                <div className=' flex justify-center' ><Image src={data.image} alt='' width={60} height={60}></Image></div>
                                <div className=' mt-3 text-sm flex justify-center'><p>{data.name}</p></div>
                            </div>
                           </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default OfficeFurniture;



/* 


Table With Side Return

Computer Table


Bookshelf


Conference Table


File Cabinet


Work Station




*/ 