'use client';

import { useState } from 'react';
import image1 from '@/assets/images/environment.png';
import image2 from '@/assets/images/traffic.png';
import image3 from '@/assets/images/friends.png';
import { PlayCircle } from 'lucide-react';
import Headline from '../headline/Headline';

const WhyCarpol = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoId = 'nMU9UzmU3eY';

    const carpoolBenefits = [
        {
            img: image1,
            name: 'Save Environment'
        },
        {
            img: image2,
            name: 'Reduce Traffic'
        },
        {
            img: image3,
            name: 'Make Friends'
        }
    ];
    return (
        <div>
            <div className="max-w-6xl mx-auto text-center">
                <div>
                    <h2 className=" mb-4">Why Should We Carpool</h2>
                    <p className=" mb-10">
                        If we could all carpool, it would cut down the number of cars on the road to a great extent;
                        mean
                        <br className="hidden lg:block" />
                        there would be less emission of carbon into the air, causing less pollution, and a cleaner
                        environment.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {carpoolBenefits.map((benefit, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="ounded-xl  overflow-hidden mb-4">
                                <img
                                    src={
                                        typeof benefit.img === 'object' && 'src' in benefit.img
                                            ? benefit.img.src
                                            : benefit.img
                                    }
                                    alt={benefit.name}
                                    width={192}
                                    height={384}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                            <h3 className="">{benefit.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center items-center text-center mt-10">
                <div className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-lg">
                    {!isPlaying ? (
                        <div className="relative w-full h-full">
                            <img
                                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
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
            </div>
            <div className="mt-10">
                <Headline headlingText={'Watch the video of a kid explaining the importance of carpooling.'} />
            </div>
        </div>
    );
};

export default WhyCarpol;
