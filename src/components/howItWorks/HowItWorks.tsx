// components/HowItWorks.tsx

'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import firstImg from '../../assets/images/pool.png';
import secondImg from '../../assets/images/second.png';
import thirdImg from '../../assets/images/third.png';
import fouthImg from '../../assets/images/fourth.png';
import fifthImg from '../../assets/images/fifth.png';
import 'swiper/css';
import 'swiper/css/pagination';

const steps = [
    {
        id: 1,
        img: firstImg,
        title: 'Find & Offer Carpool'
    },
    {
        id: 2,
        img: secondImg,
        title: 'Select the best match % send the invite'
    },
    {
        id: 3,
        img: thirdImg,
        title: 'Start / Checkin the ride'
    },
    {
        id: 4,
        img: fouthImg,
        title: 'Arrived at destination. End Ride'
    },
    {
        id: 5,
        img: fifthImg,
        title: 'Receieve trip summary post ride'
    }
];

export default function HowItWorks() {
    return (
        <section className="bg-white py-12 text-center">
            <h2 className="text-3xl text-[#000] md:text-4xl font-[600] mb-4 ">How it works</h2>
            <p className=" mb-8  font-montserrat text-center">Simple. Secure. Flexible</p>

            <div className="max-w-5xl mx-auto px-4">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={3}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={false}
                    loop
                >
                    {steps.map((step) => (
                        <SwiperSlide key={step.id}>
                            <div className="flex flex-col items-center">
                                <img
                                    src={step.img.src}
                                    alt={step.title}
                                    className="w-[325px] h-full object-cover cursor-pointer"
                                />
                                <p className="mt-4 ">{step.title}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
