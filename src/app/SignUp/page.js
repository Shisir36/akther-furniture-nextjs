
import React from 'react';
import Link from 'next/link';

const SignUp = () => {
    return (
        <div>
            <div className="max-w-3xl mx-auto mt-8 h-screen ">
               
                <form className="bg-white shadow-md  px-8 pt-6 pb-8 mb-4">
                <h1 className=' text-xl mb-7 font-bold'>Your Personal Details</h1>
                    <div className="mb-4 w-1/2 pr-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                            Full Name *
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="fullName"
                            type="text"
                            placeholder="Full Name"
                        />
                    </div>
                    <div className="mb-4 flex">
                        <div className="w-1/2 pr-3">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNo">
                                Contact No *
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="contactNo"
                                type="text"
                                placeholder="Contact No"
                            />
                        </div>
                        <div className="w-1/2 pl-3">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email *
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                    </div>
                    <div className="mb-4 flex">
                        <div className="w-1/2 pr-3">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password *
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="Password"
                            />
                        </div>
                        <div className="w-1/2 pl-3">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                                Confirm Password *
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirm Password"
                            />
                        </div>
                    </div>
                    <div className="mb-4 flex">
                        <div className="w-1/2 pr-3">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
                                Country *
                            </label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="country"
                            >
                                {/* Add options for various countries */}
                                <option value="">Select Country</option>
                                <option value="country1">Country 1</option>
                                <option value="country2">Country 2</option>
                            </select>
                        </div>
                        <div className="w-1/2 pl-3">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="area">
                                Area *
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="area"
                                type="text"
                                placeholder="Area"
                            />
                        </div>
                    </div>
                    <div className="mb-4 flex">
                        <div className="w-1/2 pr-3">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="streetAddress">
                                Street Address *
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="streetAddress"
                                type="text"
                                placeholder="Street Address"
                            />
                        </div>
                        <div className="w-1/2 pl-3">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="district">
                                District *
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="district"
                                type="text"
                                placeholder="District"
                            />
                        </div>
                    </div>
                    <div className="mb-4 flex">
                        <div className="w-1/2 pr-3">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zipCode">
                                Zip / Postal *
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="zipCode"
                                type="text"
                                placeholder="Zip / Postal"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-[#FAA61A] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;