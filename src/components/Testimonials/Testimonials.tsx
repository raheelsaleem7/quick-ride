'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import firstImg from '../../assets/images/neelam.jpg';
import secondImg from '../../assets/images/sujay.jpg';
import thirdImg from '../../assets/images/tby.jpg';
import fouthImg from '../../assets/images/aparsi.jpg';
import { Autoplay, Pagination } from 'swiper/modules';

const Testimonials = () => {
    const steps = [
        {
            id: 1,
            img: firstImg,
            review: 'Made life easy. No more waiting for cabs and buses. Great app to get to know people from the same organization. Keep rocking 😀 ."',
            title: 'Neelam Chouhan',
            role: 'Mindtree'
        },
        {
            id: 2,
            img: secondImg,
            review: 'Quickride has been a boon to so many and likewise for me as I can travel to office daily making friends and network.',
            title: 'Sujay Kamath',
            role: 'Quest Global'
        },
        {
            id: 3,
            img: thirdImg,
            review: 'Best car pooling app in Bangalore. Made lots of friends. Its a big relief to have friends to talk when stuck in traffic.',
            title: 'Aby Thomas',
            role: 'Alstom'
        },
        {
            id: 4,
            img: fouthImg,
            review: "I had no idea about carpooling untill I knew about Quickride. It's doing so so good and has helped me a lot with saving a lot money.",
            title: 'Aparsi Das',
            role: 'Skillmine Technology'
        }
    ];

    return (
        <div>
            <div className="">
                <div className="max-w-7xl mx-auto py-12 px-4 space-y-8">
                    <h2 className="text-center text-2xl sm:text-3xl font-semibold">
                        We work with the biggest IT companies.
                    </h2>

                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        loop
                    >
                        {steps.map((step) => (
                            <SwiperSlide key={step.id}>
                                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                                    <div className="w-full sm:w-auto">
                                        <Image
                                            src={step.img}
                                            alt={step.title}
                                            className="w-full sm:w-[268px] h-full object-cover cursor-pointer rounded-[12px]"
                                        />
                                    </div>
                                    <div className="mt-4 sm:mt-0">
                                        <p className="text-[18px] sm:text-[22px]">{step.review}</p>
                                        <p className="font-[500] mt-4 text-xl">{step.title}</p>
                                        <p className="font-[600]">{step.role}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
