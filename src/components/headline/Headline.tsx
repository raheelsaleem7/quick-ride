import React from 'react';

interface HeadlineProps {
    headlingText: string;
}

const Headline: React.FC<HeadlineProps> = ({ headlingText }) => {
    return (
        <div className="bg-[#1d9b1d] p-5">
            <h2 className=" text-[white]  text-center">{headlingText}</h2>
        </div>
    );
};

export default Headline;
