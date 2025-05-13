import Image from 'next/image';

interface BlogCardProps {
    image: string;
    title: string;
    date: string;
    description: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({ image, title, date, description }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image src={image} alt={title} width={500} height={300} className="w-full h-56 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground mb-2">Posted on {date}</p>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
        </div>
    );
};
