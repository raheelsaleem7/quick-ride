import React from 'react';

const ContactInfo = () => {
    return (
        <div className="w-full">
            <h2 className="text-[#1d9b1d] text-[32px] font-[500] mb-4">Get in touch with us</h2>
            <div className="mb-4">
                <h3 className="font-bold text-lg">Head Office – Bangalore</h3>
                <p className="mt-3">
                    iDisha Info Labs Pvt. Ltd 19, KMJ Aven, 2nd Floor,
                    <br className="hidden md:block" />
                    Aswath Nagar, Outer Ring Rd, above Avant Grade – Motoplex,
                    <br />
                    Marathahalli, Bengaluru, Karnataka 560037
                </p>
            </div>

            <p className="mb-2 text-[black] font-[400]">🚫 We&rsquo;re Not Rapido! 😅</p>

            <p className="mb-4">
                Google AI got a bit too creative and sent Rapido calls our <br className="hidden md:block" /> way. But
                we&rsquo;re Quick Ride – your carpool and taxi buddy, <br className="hidden md:block" /> not a bike taxi
                service.
            </p>

            <p className="font-semibold text-[#1a1a98]">For Rapido Support, Call at</p>
            <a href="tel:07314854727" className="text-[#1a1a98] underline">
                07314 854727
            </a>

            <p className="mt-4">
                Since you&rsquo;re here... why not ride smarter with us? 😉
                <br />
                Try Quick Ride – More seats. More savings. More sense.
            </p>

            <p className="font-semibold mt-4 text-blue-800">
                For Quick Ride Carpool or Taxi Support
                <br />
                Call us at
            </p>
            <a href="tel:08046810600" className="text-[#1a1a98] underline">
                080 46810600
            </a>

            <p className="mt-4 font-semibold">Mail Us at</p>
            <a href="mailto:support@quickride.in" className="text-[#1a1a98] underline">
                support@quickride.in
            </a>
        </div>
    );
};

export default ContactInfo;
