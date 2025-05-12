'use client';

import Image from 'next/image';
import buildingIcon from '../../assets/images/billding.png';

const QuickRideInfo = () => {
    const testimonials = [
        {
            id: 1,
            title: 'How travel brings people together',
            subtitle: 'Check out the video, because stories begin with a ride',
            thumbnail: 'https://img.youtube.com/vi/VQlbock513U/1.jpg',
            link: 'https://www.youtube.com/watch?v=VQlbock513U'
        },
        {
            id: 2,
            title: 'Quick Ride Carpool is the better way to commute to the office',
            subtitle: 'Check out the video, because stories begin with a ride',
            thumbnail: 'https://img.youtube.com/vi/VQlbock513U/2.jpg',
            link: 'https://www.youtube.com/watch?v=VQlbock513U'
        }
    ];

    return (
        <div className="container mx-auto flex flex-col items-center justify-center text-center py-8 px-4">
            {/* Info Section */}
            <div className="mb-6 max-w-3xl">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">What is Quick Ride - Carpool & Bikepool</h2>
                <p className="text-gray-700 text-sm sm:text-base">
                    We all like going together. Quick Ride will help you connect with other like-minded verified
                    professionals who are traveling on the same route at the same time. Quick Ride helps commuters to
                    start sharing the ride instead of traveling alone. Innovative technology to discover, connect,
                    coordinate, and cost-share in a seamless manner. Quick Ride automates the end to end process of
                    carpooling & bikepooling and makes pooling safe and hassle-free for commuters. Quick Ride makes your
                    office commute a fun experience every day.
                </p>
            </div>

            {/* Image */}
            <div className="w-full flex justify-center mb-8">
                <Image
                    src={buildingIcon}
                    alt="Building"
                    width={100}
                    className="w-[90%] sm:w-[70%] md:w-[60%] max-w-md"
                />
            </div>

            {/* Testimonials */}
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-10 mt-10 w-full max-w-5xl">
                {testimonials.map((item) => (
                    <a
                        key={item.id}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 group w-full md:w-1/2"
                    >
                        <div className="relative w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] rounded-full shrink-0">
                            <Image
                                src={item.thumbnail}
                                alt={`User thumbnail ${item.id}`}
                                width={100}
                                height={100}
                                className="w-full h-full object-cover rounded-full"
                            />
                            <div className="absolute bottom-0 right-0 p-0.5 w-[30px] h-[30px] sm:w-[36px] sm:h-[36px]">
                                <div className="bg-white p-1 rounded-full shadow">
                                    <Image
                                        src="https://upload.wikimedia.org/wikipedia/commons/7/75/YouTube_social_white_squircle_%282017%29.svg"
                                        alt="Play icon"
                                        className="w-full h-full"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="text-left">
                            <h4 className="text-base sm:text-lg transition-all duration-300 group-hover:underline">
                                {item.title}
                            </h4>
                            {item.subtitle && <p className="text-sm text-gray-600">{item.subtitle}</p>}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default QuickRideInfo;
