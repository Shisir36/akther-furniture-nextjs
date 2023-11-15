"use client"
import React, { useState } from 'react';

const Subscription = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubscribe = () => {
        // Implement your subscribe logic here, e.g., make an API call.
        console.log(`Subscribed with email: ${email}`);
        // Clear the email input field
        setEmail('');
    };

    return (
        <div className=''>


            <div className="bg-[#FAA61A] px-4 md:flex items-center justify-around py-5">
                <div className="full py-3">
                    <p className="text-lg font-bold text-white uppercase">
                        Want to Get Discount & Product Updates From Us?
                    </p>
                    <p className="text-xs mt-2 uppercase text-white">
                        Don’t miss any updates of our new App, Theme & extensions and all <br /> the
                        astonishing offers we bring for you.
                    </p>
                </div>
                <div className="full">
                    <div className="flex items-center">
                        <div className=' relative'>
                        <input
                            type="email"
                            placeholder="Enter your email here..."
                            value={email}
                            onChange={handleEmailChange}
                            className="bg-white border rounded-l py-[10px] md:px-10 px-4 focus:outline-none"
                        />
                          <button
                            onClick={handleSubscribe}
                            className="bg-[#FAA61A] text-white rounded-r py-2 px-3 mt-[1px] border-2 hover:bg-black focus:outline-none absolute"
                        >
                            Subscribe
                        </button>
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;
