import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: 'The 4 Cs of Diamond Quality',
    excerpt: 'Learn about the Cut, Clarity, Color, and Carat weight that determine a diamond\'s value.',
    image: 'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    date: 'May 15, 2024',
  },
  {
    id: 2,
    title: 'Caring for Your Gemstones',
    excerpt: 'Tips and tricks to keep your precious stones sparkling for years to come.',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    date: 'April 22, 2024',
  },
  {
    id: 3,
    title: 'The History of Sapphires',
    excerpt: 'Dive into the rich history and lore surrounding these beautiful blue gems.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    date: 'March 10, 2024',
  },
];

const BlogPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">SaltMarket Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{post.date}</span>
                <Link to={`/blog/${post.id}`} className="text-purple-600 hover:text-purple-800 font-semibold flex items-center">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;