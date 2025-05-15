'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import firstImg from '../../assets/images/cap.png';
import secondImg from '../../assets/images/congni.png';
import fifthImg from '../../assets/images/wipro.png';
import Image from 'next/image';

const logos = [firstImg, secondImg, fifthImg];

export default function PartnerLogos() {
    return (
        <div className="bg-[#f9f9f9] ">
            <div className="max-w-7xl mx-auto py-12 px-4 space-y-8">
                <h2>We work with the biggest IT companies.</h2>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={4}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    loop
                >
                    {logos.map((src, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex justify-center items-center h-[80px]">
                                <Image
                                    src={src}
                                    alt={`logo-${index}`}
                                    width={150}
                                    height={60}
                                    className="object-contain"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
