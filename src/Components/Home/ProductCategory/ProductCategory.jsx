import Image from 'next/image';
import React from 'react';
import image from "./pngwing 1.png"
import image2 from "./Lovepik_com-401001696-aesthetic-sofa-seat 1.png"
import vector from "./vector/Vector.png"
const  ProductCategory = () => {
    const productCategories = [
        {
          image: image,
          title: "Modern chair",
          discount: "Up to 15% off",
          buttonColor: "#FAA61A",
        },
        {
          image: image2,
          title: "Sofas sectional",
          discount: "Up to 15% off",
          buttonColor: "black",
        },
      ];
    return (
        <div className='max-w-screen-2xl mx-auto  md:flex justify-around gap-10 '>
            {productCategories.map((category, index) => (
                <div key={index} className={`relative mb-5 flex ${index % 2 === 0 ? 'bg-[#91B8B3]' : 'bg-[#FAA61A]'} md:h-[290px] h-[192px] md:w-full rounded-sm`}>
                    <div className='absolute bottom-0 right-0'>
                        <Image src={vector} alt='' width={200} height={200} className=' md:w-[300px] md:h-[300px]' />
                    </div>
                    <div className="absolute md:top-14 top-5 left-5 text-center flex justify-center gap-10 items-center">
                        <div>
                            <div>
                                <Image src={category.image} alt='' width={230} height={230} className={index % 2 === 0 ? 'w-[210px] h-[160px]' : 'w-[210px] h-[100px]'} />
                            </div>
                        </div>
                        <div>
                            <h1 className="md:text-4xl text-2xl text-white font-bold">{category.title}</h1>
                            <p className="md:py-6 md:text-4xl text-2xl">{category.discount}</p>
                            <button className={`md:px-8 md:py-2 py-[5px] px-5 text-white `} style={{ backgroundColor: category.buttonColor }}>Shop Now</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default ProductCategory;