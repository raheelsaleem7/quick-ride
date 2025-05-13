import React from 'react';
import { Button } from '../ui/button';
import bannerImg from '@/assets/images/about-us-banner.jpg';

const AboutUsHero = () => {
    return (
        <section
            className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${bannerImg.src})` }}
        >
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 text-center px-4 max-w-2xl">
                <h1 className="text-[32px] font-[600] mb-6">
                    Our Mission is to remove 1 Million Cars from the Roads, every day
                </h1>
                <Button className="" variant="default">
                    Share a Ride Today →
                </Button>
            </div>
        </section>
    );
};

export default AboutUsHero;
