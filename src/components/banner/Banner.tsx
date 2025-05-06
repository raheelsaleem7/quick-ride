const Banner = () => {
    return (
        <section className="pt-20 bg-gray-100">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <div className="relative">
                    <img
                        src="/carpool-banner.jpg" // Replace with actual image path
                        alt="Carpool Banner"
                        className="w-full h-auto rounded-lg"
                    />
                    <div className="absolute top-6 left-6 bg-green-600 text-white text-sm px-4 py-2 rounded-full shadow-lg">
                        I help Colleagues & Save upto ₹15,000/month
                    </div>
                    <div className="absolute bottom-6 right-6 bg-green-600 text-white text-sm px-4 py-2 rounded-full shadow-lg">
                        I get car rides at ₹4/km, & I reduce a vehicle from the road
                    </div>
                    <div className="absolute inset-0 flex justify-center items-center">
                        <a
                            href="https://www.youtube.com/watch?v=qqYwMMRuHR0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-red-600 rounded-full p-4"
                        >
                            <svg fill="white" viewBox="0 0 24 24" width="48" height="48">
                                <path d="M10 8.64v6.72L15.27 12 10 8.64z" />
                                <path d="M21.8 8s-.2-1.43-.82-2.06C20 5.2 19.2 5.2 18.75 5.14 15.92 5 12 5 12 5s-3.92 0-6.75.14C4.8 5.2 4 5.2 3.02 5.94 2.4 6.57 2.2 8 2.2 8S2 9.57 2 11.14v1.72C2 14.43 2.2 16 2.2 16s.2 1.43.82 2.06c.98.74 1.78.74 2.23.8 2.83.14 6.75.14 6.75.14s3.92 0 6.75-.14c.45-.06 1.25-.06 2.23-.8.62-.63.82-2.06.82-2.06S22 14.43 22 12.86v-1.72C22 9.57 21.8 8 21.8 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <h1 className="mt-6 text-3xl font-bold">It’s Cool to Carpool</h1>
            </div>
        </section>
    );
};

export default Banner;
