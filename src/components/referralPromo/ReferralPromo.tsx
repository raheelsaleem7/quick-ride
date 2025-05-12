'use client';

import Image from 'next/image';
import React from 'react';
import referalImg from '@/assets/images/referral.png';
import googlePlay from '@/assets/images/google-play.png';
import applePlay from '@/assets/images/apple-play.png';

const ReferralPromo: React.FC = () => {
    return (
        <div className="bg-gray-100 py-10 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
            {/* Left Content */}
            <div className="max-w-xl text-center md:text-left mb-8 md:mb-0">
                <h2 className="text-[#1d9b1d] text-xl font-semibold mb-2">
                    Join now and get ₹50 OFF on your first ride
                </h2>
                <p className="text-[#1d9b1d] text-lg font-bold mb-4">Promo code: FIRSTRIDE</p>
                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                    Refer your friends and be a<br />
                    partner of Quick Ride
                </h1>

                {/* Store Buttons using Lucide */}
                <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                    <a
                        href="https://play.google.com/store/apps/details?id=com.disha.quickride&hl=en_IN&gl=US"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image src={googlePlay} alt="google" />
                    </a>
                    <a
                        href="https://apps.apple.com/in/app/quick-ride-cab-taxi-carpool/id1071794769"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image src={applePlay} alt="apple" />
                    </a>
                </div>

                {/* Support */}
                <p className="text-sm text-gray-700">
                    In case of any questions or queries, Please write to <br />
                    <a href="mailto:support@quickride.in" className="text-blue-600 font-semibold">
                        support@quickride.in
                    </a>
                </p>
            </div>

            {/* Right Side Image */}
            <div className="w-full md:w-auto max-w-sm">
                <Image src={referalImg} alt="Promo Illustration" width={400} height={400} className="mx-auto" />
            </div>
        </div>
    );
};

export default ReferralPromo;
