import AboutUsHero from '@/components/aboutUsHero/AboutUsHero';
import Footer from '@/components/footer/Footer';
import OurStory from '@/components/ourStory/OurStory';
import TeamSection from '@/components/teamSection/TeamSection';
import TravelingVideo from '@/components/travellingVideo/TravelingVideo';
import React from 'react';

const page = () => {
    return (
        <div>
            <AboutUsHero />

            <OurStory />

            <TeamSection />

            <TravelingVideo />

            <Footer />
        </div>
    );
};

export default page;
