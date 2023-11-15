import Image from 'next/image';
import React from 'react';
import footerLogo from "./LOGO 1.png"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className=' bg-black md:px-36'>
            <footer className="footer p-10 text-white">
                <div>
                    <Image
                        src={footerLogo}
                        width={220}
                        height={220}
                        alt="Picture of the author"
                    />
                    <div className=' inline-flex items-center gap-7 text-3xl ml-2 mt-4 text-yellow-500'>
                        <FaFacebook/>
                        <FaInstagram/>
                        <FaTwitter/>
                        <FaLinkedin/>
                    </div>
                    <p className=' md:text-center text-[14px] mt-4'>66 progoti soroni<br /> <span className=' text-lg'>baridhara, dhaka - 1212</span></p>
                </div>
                <nav>
                    <header className="footer-title">Important</header>
                    <a className="link link-hover">Sitemap</a>
                    <a className="link link-hover">Sitting & Return</a>
                    <a className="link link-hover">Privacy Notice</a>
                    <a className="link link-hover">Condition of Use</a>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Contact Us</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">Search</a>
                    <a className="link link-hover">News</a>
                    <a className="link link-hover">Recently Viewed Product</a>
                    <a className="link link-hover">Compare Product Lists </a>
                    <a className="link link-hover">New Product </a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">My Account</a>
                    <a className="link link-hover"> Order</a>
                    <a className="link link-hover">Addresses</a>
                    <a className="link link-hover">Shopping Card</a>
                    <a className="link link-hover">Wishlist</a>
                    <a className="link link-hover">Apply for Vendor account</a>
                </nav>
            </footer>
            <aside className=' text-center text-white mt-7 text-xs'>
                <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
            </aside>
        </div>
    );
};

export default Footer;