'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import dummyImage from '@/assets/images/dummy-img.jpg';
import Image, { StaticImageData } from 'next/image';

type Blog = {
    id: number;
    title: string;
    date: string;
    description: string;
    image: string | StaticImageData;
};

const blogData: Blog[] = [
    {
        id: 1,
        title: 'Discover the Best Pubs and Bars in Bangalore – The Ultimate List of Top 50 Places',
        date: 'June 13, 2023',
        description:
            'Welcome to the buzzing city of Bangalore, known for its vibrant nightlife and thriving pub culture...',
        image: dummyImage
    },
    {
        id: 2,
        title: 'EV News: Mahindra XUV400 Electrifies Rann of Kutch: Record-Breaking Journey',
        date: 'June 5, 2023',
        description: 'Mahindra Auto has achieved a new milestone with its first e-SUV, the Mahindra XUV400...',
        image: dummyImage
    },
    {
        id: 3,
        title: 'Top 49 Best Places near Delhi to Visit in Summer 2023: Ultimate List',
        date: 'May 31, 2023',
        description: 'Hey there, fellow adventurers! Are you ready to beat the summer heat and embark...',
        image: dummyImage
    },
    {
        id: 4,
        title: 'Why Remote Work is Here to Stay in 2025',
        date: 'May 20, 2023',
        description: 'The shift to remote work has reshaped office dynamics worldwide...',
        image: dummyImage
    },
    {
        id: 5,
        title: 'Top 10 Cafes to Work From in Mumbai',
        date: 'May 15, 2023',
        description: 'Explore the coziest and most productive cafes in Mumbai perfect for remote work...',
        image: dummyImage
    },
    {
        id: 6,
        title: 'Monsoon Getaways from Bangalore',
        date: 'May 10, 2023',
        description: 'Enjoy lush greenery and soothing rain in these top monsoon getaways near Bangalore...',
        image: dummyImage
    },
    {
        id: 7,
        title: 'Why EVs are Taking Over Urban Mobility',
        date: 'May 5, 2023',
        description: 'Electric vehicles are revolutionizing urban transportation. Here’s why...',
        image: dummyImage
    },
    {
        id: 8,
        title: 'Bangalore’s Top Food Trucks to Try',
        date: 'May 1, 2023',
        description: 'Foodies rejoice! Here are the best food trucks roaming around Bangalore...',
        image: dummyImage
    },
    {
        id: 9,
        title: 'Work-Life Balance Tips in a Hybrid World',
        date: 'Apr 27, 2023',
        description: 'Struggling with hybrid work? Here are our best balance hacks...',
        image: dummyImage
    },
    {
        id: 10,
        title: 'Hidden Gems in Goa Beyond the Beaches',
        date: 'Apr 20, 2023',
        description: 'Goa has more to offer than beaches. Explore waterfalls, forts, and spice plantations...',
        image: dummyImage
    }
];

const BlogGridWithPagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;
    const totalPages = Math.ceil(blogData.length / postsPerPage);

    const currentPosts = blogData.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

    return (
        <div className="bg-gray-100 py-10 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentPosts.map((post) => (
                    <Card key={post.id} className="bg-white">
                        <Image src={post.image} alt={post.title} className="rounded-t-md w-full h-48 object-cover" />
                        <CardContent className="p-5">
                            <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                            <p className="text-sm text-gray-500 mb-2">Posted on {post.date}</p>
                            <p className="text-gray-700 text-sm">{post.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: totalPages }).map((_, i) => (
                    <Button
                        key={i}
                        variant={currentPage === i + 1 ? 'default' : 'outline'}
                        onClick={() => setCurrentPage(i + 1)}
                        className="w-10 h-10 p-0"
                    >
                        {i + 1}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default BlogGridWithPagination;
