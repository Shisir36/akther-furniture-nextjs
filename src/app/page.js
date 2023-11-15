
"use client"
import Banner from '@/Components/Home/Banner/Banner';
import DifferentProduct from '@/Components/Home/DifferentProduct/DifferentProduct';
import FeaturedCategories from '@/Components/Home/FeaturedCategories/FeaturedCategories';
import FeaturedProducts from '@/Components/Home/FeaturedProducts/FeaturedProducts';
import FeaturedProducts2 from '@/Components/Home/FeaturedProducts2/FeaturedProducts2';
import HomeFurniture from '@/Components/Home/HomeFurniture/HomeFurniture';
import OurBrands from '@/Components/Home/OurBrands/OurBrands';
import ProductCategory from '@/Components/Home/ProductCategory/ProductCategory';
import Subscription from '@/Components/Home/Subscription/Subscription';
import React from 'react';
import { motion, useScroll } from "framer-motion";

const Homepage = () => {
  const { scrollYProgress } = useScroll();
  return (
    <main>
      <motion.div
        className=" fixed top-0 left-0 right-0 h-[5px] bg-[orange]  overflow-hidden z-40"
        style={{ scaleX: scrollYProgress, transformOrigin:"0%" }}
      />
      <Banner />
      <FeaturedCategories />
      <HomeFurniture />
      {/* <FeaturedProducts2/> */}
      <FeaturedProducts />
      <DifferentProduct />
      <ProductCategory />
      <OurBrands />
      <Subscription />
    </main>
  );
};

export default Homepage;

