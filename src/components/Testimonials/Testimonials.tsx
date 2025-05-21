'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import firstImg from '../../assets/images/neelam.jpg';
import secondImg from '../../assets/images/sujay.jpg';
import thirdImg from '../../assets/images/tby.jpg';
import fourthImg from '../../assets/images/aparsi.jpg';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            img: firstImg,
            review: 'Made life easy. No more waiting for cabs and buses. Great app to get to know people from the same organization. Keep rocking 😀.',
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
            review: 'Best car pooling app in Bangalore. Made lots of friends. It’s a big relief to have friends to talk to when stuck in traffic.',
            title: 'Aby Thomas',
            role: 'Alstom'
        },
        {
            id: 4,
            img: fourthImg,
            review: 'I had no idea about carpooling until I knew about Quickride. It’s doing so good and has helped me a lot with saving money.',
            title: 'Aparsi Das',
            role: 'Skillmine Technology'
        }
    ];

    return (
        <section className=" py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-12">We work with the biggest IT companies.</h2>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    loop
                >
                    {testimonials.map(({ id, img, review, title, role }) => (
                        <SwiperSlide key={id}>
                            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-8">
                                <div className="w-40 h-40 flex-shrink-0 overflow-hidden rounded-full border-4 border-primary">
                                    <Image
                                        src={img}
                                        alt={title}
                                        width={160}
                                        height={160}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="text-center sm:text-left">
                                    <p className="text-lg sm:text-xl text-gray-700 italic leading-relaxed mb-4">
                                        “{review}”
                                    </p>
                                    <p className="text-xl font-semibold">{title}</p>
                                    <p className="text-sm text-gray-500 font-medium">{role}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
