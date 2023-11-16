"use client"
import React, { useRef, useState } from 'react';
import { IconName, TfiLocationPin } from "react-icons/tfi";
import { CiSearch, CiUser } from "react-icons/ci";
import Link from 'next/link';
import { BsCart3, BsSuitHeart, BsTelephone } from "react-icons/bs";
import Image from 'next/image'
import logo from "./LOGO 1.png"
import navbarItems from './navbarItems';
import { useMediaQuery } from 'react-responsive';
import { useClickAway } from 'react-use';
import { AnimatePresence, motion } from 'framer-motion';
import Hamburger from 'hamburger-react';
import { FaSearch } from 'react-icons/fa';

const Header = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const [isOpen, setOpen] = useState(false);
    const ref = useRef(null);

    useClickAway(ref, () => setOpen(false));
    return (
        <div className=''>
            {isMobile ?
                <div>
                    <div className=' bg-gray-200'>
                        <div className='flex items-center gap-1 py-1 justify-end mr-4'>
                            <BsTelephone className=' text-xl  font-bold' />
                            <p className=' font-bold '> 09 678 777 777</p>
                        </div>
                        <div ref={ref} className=" bg-white shadow-lg py-2">
                            <div className=' flex items-center justify-between px-3'>
                                <div className=' inline-flex gap-3 items-center'>
                                    <Hamburger toggled={isOpen} size={25} toggle={setOpen} />
                                    <Link href={"/"}> <Image src={logo} alt='logo' width={100} height={50} className=' w-[100px] h-[35px]' /></Link>
                                </div>
                                <div>
                                    <BsCart3 className=' text-3xl' />
                                </div>
                            </div>
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className=" left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-white border-b border-b-white/20"
                                    >
                                        <ul className="grid gap-2">
                                            {navbarItems.map((item, idx) => {
                                                return (
                                                    <motion.li
                                                        initial={{ scale: 0, opacity: 0 }}
                                                        animate={{ scale: 1, opacity: 1 }}
                                                        transition={{
                                                            type: "spring",
                                                            stiffness: 260,
                                                            damping: 20,
                                                            delay: 0.1 + idx / 10,
                                                        }}
                                                        key={item.title}
                                                        className="w-full p-[0.08rem] rounded-xl "
                                                    >
                                                        <Link
                                                            onClick={() => setOpen(false)}
                                                            className="flex items-center justify-between w-full p-1 rounded-xl bg-white"
                                                            href={item.link}
                                                        >
                                                            <span className="flex gap-1 text-lg">{item.title}</span>
                                                        </Link>
                                                    </motion.li>
                                                );
                                            })}
                                            <div className=' inline-flex  items-center w-full p-1 gap-2 text-[1.125rem]'>
                                                <Link href="/login">Login /</Link>
                                            <Link href="signUp">Sign Up</Link>
                                            </div>
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <div className=' relative px-5 py-4'>
                            <div>
                                <input className='py-2 w-full border rounded-md border-black' type="text" name="" id="" />
                            </div>
                            <button className=' absolute top-6 right-10'>
                                <FaSearch className=' text-[26px] text-slate-800' />
                            </button>
                        </div>
                    </div>

                </div>
                : <div className=' shadow-xl'>
                    <div className=' flex justify-center gap-[900px] bg-[#F3F2F2] py-1'>
                        <div className=' inline-flex items-center'>
                            <TfiLocationPin className=' text-3xl text-[#616160]' />
                            <p className=' text-xs'>Store Location</p>
                        </div>
                        <div className=' inline-flex items-center gap-2'>
                            <CiUser className=' text-3xl text-[#616160]' />
                            <Link className=' text-xs' href="/Login">Login /</Link>
                            <Link className=' text-xs' href="/SignUp">Sign Up</Link>
                        </div>
                    </div>
                    <div className=' flex justify-center gap-60'>
                        <div className=' inline-flex items-center gap-1'>
                            <BsTelephone className=' text-4xl text-[#616160]' />
                            <p>017777777777</p>
                        </div>
                        <div className='py-4'>
                           <Link href="/">
                           <Image
                                src={logo}
                                width={250}
                                height={250}
                                alt="Picture of the author"


                            />
                           </Link>
                        </div>
                        <div className=' inline-flex items-center text-4xl gap-5 text-[#616160]'>
                            <CiSearch />
                            <BsSuitHeart />
                            <BsCart3 />
                        </div>
                    </div>
                    <div className=' flex gap-[48px] justify-center font-semibold mt-1'>

                        {
                            navbarItems.map((navbar, index) => (
                                <p key={index}><Link className=' text-sm ' href={navbar.link}>{navbar.title}</Link> </p>
                            ))
                        }

                    </div>
                </div>
            }
        </div>
    );
};

export default Header;