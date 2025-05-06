'use client';

import { PlayCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const carpoolVideos = [
    {
        title: 'Offer Carpool',
        tagline: 'Your Route. Your Time. Your Fare',
        description:
            'Share your empty car seats in the carpool and cut down your commute costs. Enjoy meeting amazing new people every day in carpool, grow your network and make your boring rides a fun ride.',
        videoUrl: 'https://www.youtube.com/watch?v=yHlOGfR805U',
        thumbnail: 'https://img.youtube.com/vi/yHlOGfR805U/maxresdefault.jpg',
        linkText: 'How can Amesh Carpool with the boss',
        reverse: false
    },
    {
        title: 'Find Carpool',
        tagline: 'Convenient. Faster. Affordable',
        description:
            'Join like-minded people and get a comfortable car ride at the cost of bus fare. Travel safely with known and verified professionals.',
        videoUrl: 'https://youtu.be/H3iTw-ItEe0?si=kwrvgscQGH5Ycnq1',
        thumbnail: 'https://img.youtube.com/vi/H3iTw-ItEe0/maxresdefault.jpg',
        linkText: 'How Shruthi saved 80% on her commute',
        reverse: true
    }
];

const CarpoolOptions = () => {
    return (
        <div className="max-w-7xl mx-auto py-12 px-4 space-y-16">
            {carpoolVideos.map((video, index) => (
                <div
                    key={index}
                    className={`flex flex-col ${
                        video.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
                    } items-center gap-8`}
                >
                    <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg">
                        <Link href={video.videoUrl} target="_blank">
                            <Image
                                src={video.thumbnail}
                                alt={`${video.title} Video Thumbnail`}
                                width={800}
                                height={450}
                                className="w-full h-full object-cover cursor-pointer"
                            />
                        </Link>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className=" mb-2">{video.title}</h2>
                        <p className="text-gray-700 font-medium mb-2">{video.tagline}</p>
                        <p className="text-gray-600 mb-4">{video.description}</p>
                        <Link
                            href={video.videoUrl}
                            target="_blank"
                            className="inline-flex items-center text-blue-600 hover:underline font-medium"
                        >
                            <PlayCircle className="w-6 h-6 text-red-500 mr-2" />
                            {video.linkText}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CarpoolOptions;
