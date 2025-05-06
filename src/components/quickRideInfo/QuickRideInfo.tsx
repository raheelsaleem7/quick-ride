import buildingIcon from '../../assets/images/billding.png';

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

const QuickRideInfo = () => {
    return (
        <div className="container mx-auto flex flex-col items-center justify-center text-center py-8">
            {/* Info Section */}
            <div className="mb-6 max-w-3xl">
                <h2 className="text-2xl font-semibold mb-4">What is Quick Ride - Carpool & Bikepool</h2>
                <p className="text-gray-700">
                    We all like going together. Quick Ride will help you connect with other like-minded verified
                    professionals who are traveling on the same route at the same time. Quick Ride helps commuters to
                    start sharing the ride instead of traveling alone. Innovative technology to discover, connect,
                    coordinate, and cost-share in a seamless manner. Quick Ride automates the end to end process of
                    carpooling & bikepooling and makes pooling safe and hassle-free for commuters. Quick Ride makes your
                    office commute a fun experience every day.
                </p>
            </div>

            {/* Image */}
            <div>
                <img src={buildingIcon.src} alt="Building" className="w-[60%] mx-auto" />
            </div>

            {/* Testimonials */}
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-10 mt-10 w-full max-w-5xl">
                {testimonials.map(({ id, title, subtitle, thumbnail, link }) => (
                    <a
                        key={id}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 group w-full md:w-1/2"
                    >
                        <div className="relative w-[100px] h-[100px] rounded-[50%] shrink-0">
                            <img
                                src={thumbnail}
                                alt={`User thumbnail ${id}`}
                                className="w-full h-full object-cover rounded-[50%]"
                            />
                            <div className="absolute bottom-0 right-0 p-0.5 w-[40px] h-[40px]">
                                <div className="bg-[white] p-1 rounded-full">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/7/75/YouTube_social_white_squircle_%282017%29.svg"
                                        alt="Play icon"
                                        className="w-14"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="text-left">
                            <h4 className="transition-all duration-300 group-hover:underline">{title}</h4>
                            {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default QuickRideInfo;
