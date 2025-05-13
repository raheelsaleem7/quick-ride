'use client';

import { Facebook, Instagram, Linkedin, X } from 'lucide-react';
import Image from 'next/image';
import logo from '@/assets/images/quickride-logo-white.svg';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#333333] text-white">
            {/* Top Navigation Links */}
            <div className="bg-white text-black py-4 px-6 flex flex-col sm:flex-row flex-wrap justify-center sm:justify-around text-center font-semibold">
                <a href="#" className="mx-2 mb-2 hover:underline">
                    Blog
                </a>
                <a href="#" className="mx-2 mb-2 hover:underline">
                    Help
                </a>
                <a href="#" className="mx-2 mb-2 hover:underline">
                    Cancellation Policy
                </a>
                <a href="#" className="mx-2 mb-2 hover:underline">
                    Driver with Quick Ride
                </a>
            </div>

            {/* Main Footer Content */}
            <div className="px-6 py-10 md:px-5 lg:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-white">
                {/* Left Section */}
                <div>
                    <div className="flex items-center mb-4">
                        <Image src={logo} alt="Quick Ride" className="w-[180px] h-auto" />
                    </div>
                    <p className="mb-4 text-[white]">Carpool • Bikepool • Taxi</p>
                    <p className="text-[white]">India&apos;s Best Carpooling Network for Your Daily Commuting.</p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-6">
                        <a
                            href="https://www.facebook.com/QuickRidein/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 border border-gray-400 rounded-full hover:bg-white hover:text-black transition"
                        >
                            <Facebook size={16} />
                        </a>
                        <a
                            href="https://x.com/QuickRidein"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 border border-gray-400 rounded-full hover:bg-white hover:text-black transition"
                        >
                            <X size={16} />
                        </a>
                        <a
                            href="https://www.instagram.com/quickride.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 border border-gray-400 rounded-full hover:bg-white hover:text-black transition"
                        >
                            <Instagram size={16} />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/quickridein?originalSubdomain=in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 border border-gray-400 rounded-full hover:bg-white hover:text-black transition"
                        >
                            <Linkedin size={16} />
                        </a>
                    </div>
                </div>

                {/* Center Section */}
                <div className=" flex flex-col gap-2">
                    <a href="#" className="hover:underline">
                        About us
                    </a>
                    <a href="#" className="hover:underline">
                        Career
                    </a>
                    <a href="#" className="hover:underline">
                        Privacy
                    </a>
                    <p className="mt-4 text-[white]">© 2023. Quick Ride. All rights reserved.</p>
                </div>

                {/* Right Section */}
                <div className=" flex flex-col gap-2">
                    <a href="#" className="hover:underline">
                        Contact us
                    </a>
                    <a href="#" className="hover:underline">
                        Sitemap
                    </a>
                    <a href="#" className="hover:underline">
                        Media
                    </a>
                    <a href="#" className="hover:underline">
                        Terms
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
