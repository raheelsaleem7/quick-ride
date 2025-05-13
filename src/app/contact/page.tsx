import ContactForm from '@/components/contactForm/ContactForm';
import ContactInfo from '@/components/contactInfo/ContactInfo';
import Footer from '@/components/footer/Footer';
import React from 'react';

const page = () => {
    return (
        <>
            <section className="flex mt-10 flex-col lg:flex-row p-4 lg:p-4 bg-white max-w-7xl mx-auto">
                <div className="flex-1 mb-4 md:mb-0">
                    <ContactInfo />
                </div>
                <div className="flex-1 mt-5 lg:mt-0">
                    <ContactForm />
                </div>
            </section>

            <div className="mt-5">
                <Footer />
            </div>
        </>
    );
};

export default page;
