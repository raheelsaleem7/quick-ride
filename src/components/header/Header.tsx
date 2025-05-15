'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import logo from '@/assets/icons/logo.jpeg';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { name: 'Taxi', href: '/taxi' },
        { name: 'Carpool', href: '/carpool', highlight: true },
        { name: 'Contact us', href: '/contact' },
        { name: 'About us', href: '/about' },
        { name: 'Our Blog', href: '/blog' }
    ];

    return (
        <header className="sticky top-0 left-0 w-full bg-white shadow z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 md:py-3">
                {/* Logo and Title */}
                <div className="flex items-center gap-2">
                    <Image src={logo} alt="Quick Ride" className="w-[60px] rounded-[5px]" />
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 text-sm font-medium items-center">
                    {' '}
                    {/* Increased gap to 8 */}
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center gap-1 transition ${
                                pathname === item.href // Use pathname here
                                    ? 'text-[#1d9b1d] font-semibold border-b-2 border-green-600' // Active with underline and padding
                                    : 'hover:text-[#1d9b1d] text-black' // Non-active color
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden" aria-label="Toggle menu">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4 flex flex-col gap-6 bg-white text-sm border-t">
                    {' '}
                    {/* Increased gap to 6 */}
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center gap-2 ${
                                pathname === item.href // Use pathname here for mobile as well
                                    ? 'text-green-600 font-semibold border-b-2 border-green-600 pb-1' // Active with underline and padding
                                    : 'text-gray-800' // Non-active color
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;
