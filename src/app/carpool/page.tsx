'use client';

import CarpoolInfo from '@/components/carpoolInfo/CarpoolInfo';
import CarpoolOptions from '@/components/carpoolOptions/CarpoolOptions';
import Footer from '@/components/footer/Footer';
import Headline from '@/components/headline/Headline';
import HowItWorks from '@/components/howItWorks/HowItWorks';
import PartnerLogos from '@/components/partnerLogos/PartnerLogos';
import QuickRideInfo from '@/components/quickRideInfo/QuickRideInfo';
import ReferralPromo from '@/components/referralPromo/ReferralPromo';
import StatsSection from '@/components/statsSection/StatsSection';
import Testimonials from '@/components/Testimonials/Testimonials';
import VideoSection from '@/components/videoSection/VideoSection';
import WhyCarpol from '@/components/whyCarpol/WhyCarpol';
import WhyQuickRide from '@/components/whyQuickRide/WhyQuickRide';
import { ArrowUp } from 'lucide-react';
import React from 'react';

const page = () => {
    return (
        <div className="relative">
            <VideoSection />

            <div className="">
                <Headline headlingText={'We are on a mission to remove 1 million cars from the roads, every day'} />
            </div>

            <div className="mt-5">
                <QuickRideInfo />
            </div>

            <div className="mt-5 ">
                <StatsSection />
            </div>

            <div className="">
                <WhyQuickRide />
            </div>

            <div className="mt-12">
                <WhyCarpol />
            </div>

            <div className=" bg-[#f9f9f9]">
                <CarpoolOptions />
            </div>

            <div className="mt-5">
                <HowItWorks />
            </div>

            <div className="mt-5">
                <CarpoolInfo />
            </div>

            <div className="mt-5">
                <PartnerLogos />
            </div>
            <div className="mt-5">
                <Testimonials />
            </div>

            <div className="mt-5">
                <ReferralPromo />
            </div>

            <div className="mt-5">
                <Footer />
            </div>

            {/* Scroll to top button */}
            <div className="flex justify-end ">
                {/* Scroll to top button - fixed at bottom right */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-6 cursor-pointer right-6 z-50 bg-gray-400 hover:bg-gray-500 text-black p-3 rounded-full shadow-lg"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={20} />
                </button>
            </div>
        </div>
    );
};

export default page;
