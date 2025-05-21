'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import bg from '@/assets/images/bg2.jpg';
import HowItWorks from '@/components/howItWorks/HowItWorks';
import WhyQuickRide from '@/components/whyQuickRide/WhyQuickRide';
import Testimonials from '@/components/Testimonials/Testimonials';
import Footer from '@/components/footer/Footer';
import ReferralPromo from '@/components/referralPromo/ReferralPromo';

const Home = () => {
    return (
        <div className="space-y-20">
            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center bg-gray-900 text-white">
                <Image src={bg} alt="Carpool Hero" fill className="object-cover opacity-50" />
                <div className="z-10 text-center px-4 max-w-3xl">
                    <h1 className="text-5xl font-semibold mb-4">Share Rides. Save Money. Help the Planet.</h1>
                    <p className="text-lg mb-6 text-[white]">
                        Find or offer carpool rides effortlessly. Join a growing community of eco-conscious commuters.
                    </p>
                    <Button className="text-lg px-8 py-6">Get Started</Button>
                </div>
            </section>

            {/* How It Works */}
            <HowItWorks />

            {/* Benefits Section */}
            <WhyQuickRide />

            {/* Testimonials */}
            <Testimonials />

            {/* CTA */}
            <ReferralPromo />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;
