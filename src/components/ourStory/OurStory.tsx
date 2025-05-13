import React from 'react';
import teamImg from '@/assets/images/team.png';
import Image from 'next/image';

const OurStory = () => {
    return (
        <div>
            <section className="bg-white py-16 px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-[32px] font-[600] mb-2">Our Story</h2>
                    <p className="font-[500] mb-6">Started in 2015, bootstrapped by KNM Rao</p>
                    <p className="leading-relaxed">
                        The inspiration came from the severe parking crunch we faced at our offices. At the same time,
                        several people would wait at the reception area to get the company cab home. Several employees
                        also traveled to and fro the same route or destination but were hesitant to offer rides. It was
                        then, that the idea struck us, to develop a fully automated way for employees to carpool.
                    </p>
                </div>
            </section>

            <div className="bg-[#eff6f7]">
                <div className="max-w-3xl  flex flex-col justify-center items-center mx-auto text-center py-16 px-4">
                    <h2 className="text-[32px] font-[600] mb-2">What We Do</h2>
                    <p className="font-[500] mb-2">
                        Aims to provide a quick, simple, secure, and cashless way to travel
                    </p>
                    <div>
                        <Image src={teamImg} alt="img" />
                    </div>

                    <p className="mt-5">
                        The team at Quick Ride is an energetic, young, and socially conscious group that is working hand
                        in hand with you to solve the problems of traffic congestion, increased transit times and
                        reducing air pollution.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OurStory;
