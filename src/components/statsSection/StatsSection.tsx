import { Users, Car, Leaf, Star } from 'lucide-react';

const stats = [
    {
        icon: <Users className="w-[50px] h-[50px] text-white" />,
        label: '4.5 Million+ users'
    },
    {
        icon: <Car className="w-[50px] h-[50px] text-white" />,
        label: '40 Million+ Rides shared'
    },
    {
        icon: <Leaf className="w-[50px] h-[50px] text-white" />,
        label: '85,117 Ton+ CO₂ Saved'
    },
    {
        icon: <Star className="w-[50px] h-[50px] text-white" />,
        label: '4.6 Rating'
    }
];

const StatsSection = () => {
    return (
        <div className="bg-[#1d9b1d] text-white py-10">
            <div className="container mx-auto text-center px-4">
                <h2 className=" mb-8">Quick Ride is India’s Largest & Top Rated Carpooling Network With</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
                    {stats.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="mb-2">{item.icon}</div>
                            <p className="text-[white] font-[500] text-[18px]">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StatsSection;
