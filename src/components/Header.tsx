import React from 'react';
import { Link } from 'react-router-dom';
import { Diamond } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Diamond className="h-8 w-8 text-purple-600" />
          <span className="text-2xl font-bold text-gray-800">SaltMarket</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-gray-600 hover:text-purple-600">Home</Link></li>
            <li><Link to="/products/all" className="text-gray-600 hover:text-purple-600">Products</Link></li>
            <li><Link to="/blog" className="text-gray-600 hover:text-purple-600">Blog</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-purple-600">About</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-purple-600">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;