"use client"
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import bannerImage1 from "./bannerPic/7xm.xyz226294.jpg";
import bannerImage2 from "./bannerPic/7xm.xyz842836.jpg";
import bannerImage3 from "./bannerPic/7xm.xyz969245.jpg";
import Image from 'next/image';

const Banner = () => {
  const bannersData = [
    { bannerImage: bannerImage1, text: ["Sustainable", "Furniture"] },
    { bannerImage: bannerImage2, text: ["Etsy Reclaimed", "Furniture"] },
    { bannerImage: bannerImage3, text: ["Etsy Vintage" ,"Furniture"] },
  ];

  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
      swipeable={true}
      emulateTouch={true}
    >
      {bannersData.map((banner, index) => (
        <div key={index} className="carousel-slide relative overflow-hidden">
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `linear-gradient(90deg, #FFD999 6.14%, rgba(230, 230, 228, 0.00) 50.53%)`,
              content: "",
              opacity: 0.7,
            }}
          ></div>
          <Image className="w-full md:h-[800px] h-[300px]" src={banner.bannerImage} alt={`Slide ${index + 1}`} />
          <div className="carousel-content absolute md:w-2/4 md:top-[230px] top-[55px] md:left-5  md:p-8 p-0 text-white md:text-left  w-full md:mt-0 mt-7">
            <h3 className="font-bold md:mb-7 mb-3 md:text-7xl text-[30px] md:text-left text-center">
              {banner.text.map((text, textIndex) => (
                <React.Fragment key={textIndex}>
                  {text}
                  {textIndex !== banner.text.length - 1 && <br />}
                </React.Fragment>
              ))}
            </h3>

            <button className="px-5 py-3 text-white bg-[#FAA61A] mt-4">Shop Now</button>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
