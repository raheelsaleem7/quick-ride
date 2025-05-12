import aiImage from '@/assets/images/ai-matching.png';
import safe from '@/assets/images/safe.png';
import offer from '@/assets/images/offer.png';
import flexible from '@/assets/images/flexible.png';
import instant from '@/assets/images/instant.png';
import company from '@/assets/images/company.png';
import Image from 'next/image';

const features = [
    {
        image: aiImage,
        title: 'AI Auto Matching'
    },
    {
        image: safe,
        title: 'Safe with verified professionals'
    },
    {
        image: offer,
        title: 'Choose / Offer your own fare'
    },
    {
        image: instant,
        title: 'Instant real time matches'
    },
    {
        image: flexible,
        title: 'Flexible Recurring Rides'
    },
    {
        image: company,
        title: 'Same company, same gender carpools'
    }
];

const WhyQuickRide = () => {
    return (
        <section className="py-12 px-4 bg-[#f9f9f9]">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className=" mb-4">Why Quick Ride?</h2>
                <p className=" mb-10">
                    Quick Ride is the World’s best Carpooling app which works for Inter city{' '}
                    <br className="hidden lg:block" /> and Intra city carpooling and Bikepooling. It is flexible and
                    fully customizable.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="ounded-xl  overflow-hidden mb-4">
                                <Image
                                    src={
                                        typeof feature.image === 'object' && 'src' in feature.image
                                            ? feature.image.src
                                            : feature.image
                                    }
                                    alt={feature.title}
                                    width={192}
                                    height={384}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                            <h3 className="">{feature.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyQuickRide;
