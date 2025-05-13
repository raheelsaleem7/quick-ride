import Image from 'next/image';
import React from 'react';
import banner from '@/assets/images/cover-img.png';
import userImg from '@/assets/images/dilip.png';

const CarpoolInfo = () => {
    return (
        <div className="max-w-7xl mx-auto py-12 px-4 space-y-8">
            <div>
                <h2>Carpool within city</h2>
                <p className=" font-medium mb-2">
                    Carpooling is the best option for socially responsible citizens to commute within the city. You can
                    use Quick Ride carpool to go to the office, conference, event, shopping party, or airport.
                </p>
            </div>
            <div>
                <h2>Intercity Carpool</h2>
                <p className=" font-medium mb-2">
                    Carpool to destinations outside your city is very pocket friendly. With verified professionals,
                    automated payments, live tracking, and SOS features, it is certainly safe to travel outside your
                    city using Quick Ride. You get to save 80% on your outstation trip cost with comfortable car rides{' '}
                    <strong className="cursor-pointer  text-[#1d9b1d]">More...</strong>
                </p>
            </div>
            <div>
                <Image
                    src={banner}
                    alt="banner"
                    className="md:w-full w-auto h-full object-cover cursor-pointer rounded-3xl"
                />
            </div>

            <div>
                <div className="flex items-center gap-5 mb-2">
                    <div>
                        <Image
                            src={userImg}
                            alt="Quick Ride Logo"
                            width={100}
                            height={100}
                            className="w-16 h-16 rounded-full mb-4"
                        />
                    </div>
                    <div>
                        <h2 className="">Danya Kumar</h2>
                        <p className=" font-medium">Transport, WIPRO</p>
                    </div>
                </div>
                <p className=" font-medium ">
                    “We have more than 40,000 Wiproites registered for carpooling through Quick Ride and as a
                    sustainability initiative, we took carpooling with Quick Ride. Happy to see we have saved 12% of
                    parking space and lots of carbon footprints. Carpooling also helped us in optimizing the employee
                    transportation costs”.
                </p>
            </div>
        </div>
    );
};

export default CarpoolInfo;
