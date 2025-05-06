'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

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
                    <Image src={logo} alt="Quick Ride" className="w-[100%]" />
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-6 text-sm font-medium items-center">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center gap-1 transition ${
                                item.highlight
                                    ? 'text-green-600 border-b-2 border-green-600 pb-1'
                                    : 'hover:text-green-600 text-black'
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
                <div className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-white text-sm border-t">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center gap-2 ${
                                item.highlight ? 'text-green-600 font-semibold' : 'text-gray-800'
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
