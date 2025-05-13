'use client';

import { PlayCircle } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const TravelingVideo = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoId = 'VQlbock513U';

    return (
        <div>
            <section className="relative w-full bg-gray-100 py-16 px-4 flex flex-col items-center text-center">
                <h2 className="text-3xl text-[#000] md:text-[32px] font-[600] mb-4 ">
                    How Travel Brings People Together
                </h2>

                <div className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-lg">
                    {!isPlaying ? (
                        <div className="relative w-full h-full">
                            <Image
                                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                                alt="Quick Ride Video"
                                className="w-full h-full object-cover"
                                width={100}
                                height={100}
                            />
                            <button
                                onClick={() => setIsPlaying(true)}
                                className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition"
                                aria-label="Play Video"
                            >
                                <PlayCircle className="text-white w-20 h-20" />
                            </button>
                        </div>
                    ) : (
                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />

                        // https://youtu.be/VQlbock513U?si=s4u5vJGy0s_GR2wK
                    )}
                </div>
            </section>
        </div>
    );
};

export default TravelingVideo;
