import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">SaltMarket</h3>
            <p className="text-sm">Discover the beauty and luxury of our exquisite gemstones.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="text-sm">
              <li className="mb-2"><a href="/" className="hover:text-purple-400">Home</a></li>
              <li className="mb-2"><a href="/products/all" className="hover:text-purple-400">Products</a></li>
              <li className="mb-2"><a href="/blog" className="hover:text-purple-400">Blog</a></li>
              <li className="mb-2"><a href="/about" className="hover:text-purple-400">About Us</a></li>
              <li className="mb-2"><a href="/contact" className="hover:text-purple-400">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm mb-2">123 Gem Street, Crystal City, GS 12345</p>
            <p className="text-sm mb-2">Phone: (555) 123-4567</p>
            <p className="text-sm mb-2">Email: info@gemhaven.com</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-purple-400"><Facebook /></a>
              <a href="#" className="text-white hover:text-purple-400"><Instagram /></a>
              <a href="#" className="text-white hover:text-purple-400"><Twitter /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center">
          &copy; 2024 SaltMarket. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;