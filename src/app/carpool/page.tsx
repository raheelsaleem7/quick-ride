import CarpoolOptions from '@/components/carpoolOptions/CarpoolOptions';
import Headline from '@/components/headline/Headline';
import QuickRideInfo from '@/components/quickRideInfo/QuickRideInfo';
import StatsSection from '@/components/statsSection/StatsSection';
import VideoSection from '@/components/videoSection/VideoSection';
import WhyCarpol from '@/components/whyCarpol/WhyCarpol';
import WhyQuickRide from '@/components/whyQuickRide/WhyQuickRide';
import React from 'react';

const page = () => {
    return (
        <div>
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

            <div className="mt-5">
                <CarpoolOptions />
            </div>
        </div>
    );
};

export default page;
