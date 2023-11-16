"use client"
import React, { useState } from 'react';
import image from "../../Components/Home/FeaturedProducts/ProductImage/image 12.png"
import image2 from "../../Components/Home/FeaturedProducts/ProductImage/image 2.png"
import image3 from "../../Components/Home/FeaturedProducts/ProductImage/image 3.png"
import image4 from "../../Components/Home/FeaturedProducts/ProductImage/Lovepik_com-400846877-sofa-chair 1.png"
import Image from 'next/image';
const Product = ({ params }) => {
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
    const Id = params.id
    console.log(Id)

    const selectedProduct = products?.find((singleProduct) => singleProduct.id == Id)
    console.log(selectedProduct)
    const [activeImg, setActiveImage] = useState(selectedProduct.image)

    const [amount, setAmount] = useState(1);
    return (
        <div >
            <div className='flex flex-col  lg:flex-row  items-center md:max-w-7xl justify-center mx-auto my-28'>
                <div className='flex flex-col gap-6 lg:w-3/4'>
                    <Image src={activeImg} width={400} height={400} alt="" className='w-[60%] h-full' />
                    <div className='flex flex-row justify-around h-24'>
                        <Image src={ selectedProduct?.image} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(selectedProduct?.image)} />
                        <Image src={selectedProduct?.image } alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(selectedProduct?.image)} />
                        <Image src={ selectedProduct?.image} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(selectedProduct?.image)} />
                        <Image src={ selectedProduct?.image} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(selectedProduct?.image)} />
                    </div>
                </div>
                {/* ABOUT */}
                <div className='flex flex-col gap-4 lg:w-2/4'>
                    <div>
                        <span className=' text-[#FAA61A] font-semibold'>Features Product</span>
                        <h1 className='text-3xl font-bold'>{selectedProduct?.name}</h1>
                    </div>
                    <p className='text-gray-700'>
                        Con unammortizzazione incredibile per sostenerti in tutti i tuoi chilometri, Invincible 3 offre un livello di comfort elevatissimo sotto il piede per aiutarti a dare il massimo oggi, domani e oltre. Questo modello incredibilmente elastico e sostenitivo, è pensato per dare il massimo lungo il tuo percorso preferito e fare ritorno a casa carico di energia, in attesa della prossima corsa.
                    </p>
                    <h6 className='text-2xl font-semibold'>{selectedProduct?.price}</h6>
                    <div className='flex flex-row items-center gap-12'>
                        <div className='flex flex-row items-center'>
                            <button className='bg-gray-200 py-2 px-5 rounded-lg text-[#FAA61A] text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                            <span className='py-4 px-6 rounded-lg'>{amount}</span>
                            <button className='bg-gray-200 py-2 px-4 rounded-lg text-[#FAA61A]  text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                        </div>
                        <button className='bg-[#FAA61A]  text-white font-semibold py-3 md:px-16 px-8 rounded-xl h-full'>Add to Cart</button>
                    </div>
                </div>
            </div>
            )
        </div>
    );
};

export default Product;