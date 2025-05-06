'use client';

import { useState } from 'react';
import { PlayCircle } from 'lucide-react';
import { Button } from '../ui/button';

const VideoSection = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoId = 'vqYw1MRuHR0';

    return (
        <section className="relative w-full bg-gray-100 py-16 px-4 flex flex-col items-center text-center">
            <h2 className="text-3xl text-[#000] md:text-4xl font-[600] mb-4 ">Your journey starts here</h2>
            <p className=" mb-8 max-w-xl font-montserrat ">
                Discover affordable, eco-friendly rides and make <br className="lg:block hidden" /> every trip better
                with Quick Ride.
            </p>

            <div className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-lg">
                {!isPlaying ? (
                    <div className="relative w-full h-full">
                        <img
                            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                            alt="Quick Ride Video"
                            className="w-full h-full object-cover"
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
                )}
            </div>

            <div className="mt-4">
                <h2 className="">Start Carpooling to Save Money and the Environment</h2>
                <p className="mt-2">Carpool. Bikepool. Share Empty Seats. Save Money. Make Friends. Reduce CO2</p>
                <div className="mt-4">
                    <Button variant="default" className="">
                        Book Now
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
