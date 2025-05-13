// components/TeamSection.tsx
'use client';

import Image, { StaticImageData } from 'next/image';
import dummyImage from '@/assets/images/sujay.jpg';
import { Button } from '@/components/ui/button';

type TeamMember = {
    name: string;
    role: string;
    image: string | StaticImageData;
};

const team: TeamMember[] = [
    {
        name: 'KNM Rao',
        role: 'Founder & CEO',
        image: dummyImage
    },
    {
        name: 'Shobhana',
        role: 'Co-Founder & CTO',
        image: dummyImage
    },
    {
        name: 'Vishal Lavti',
        role: 'Co-Founder, VP – Engineering',
        image: dummyImage
    },
    {
        name: 'Asha',
        role: 'Director – Customer Success',
        image: dummyImage
    }
];

export default function TeamSection() {
    return (
        <section className="py-16 px-4 text-center bg-white">
            <h2 className="text-[32px] font-[600] mb-12">A Multi-Disciplinary Team</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {team.map((member, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <Image
                            src={member.image}
                            alt={member.name}
                            width={200}
                            height={200}
                            className="rounded-lg object-cover shadow-md"
                        />
                        <h3 className="text-lg font-semibold mt-4">{member.name}</h3>
                        <p className="text-sm text-gray-500">{member.role}</p>
                    </div>
                ))}
            </div>

            <div className="mt-12">
                <Button className="text-lg px-6 py-3 rounded-full" variant="default">
                    Join Our Team →
                </Button>
            </div>
        </section>
    );
}
