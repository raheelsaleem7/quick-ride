import BlogGridWithPagination from '@/components/blogCard/BlogGridWithPagination';
import { MiniFooter } from '@/components/miniFooter/MiniFooter';
import React from 'react';

const page = () => {
    return (
        <div className="min-h-screen bg-muted">
            <BlogGridWithPagination />
            <MiniFooter />
        </div>
    );
};

export default page;
