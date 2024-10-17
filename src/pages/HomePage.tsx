import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'}}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Discover Nature's Treasures</h1>
          <p className="text-xl mb-8">Exquisite gemstones for the discerning collector</p>
          <Link to="/products/all" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
            Explore Our Collection
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Gemstones</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Replace with actual product data */}
            {['Diamond', 'Ruby', 'Sapphire'].map((gem, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={`https://source.unsplash.com/400x300/?${gem.toLowerCase()}`} alt={gem} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{gem}</h3>
                  <p className="text-gray-600 mb-4">Discover the beauty of our exquisite {gem.toLowerCase()}s.</p>
                  <Link to={`/products/${gem.toLowerCase()}`} className="text-purple-600 hover:text-purple-800 font-semibold flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <img src="https://images.unsplash.com/photo-1615655406736-b37c4fabf923?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="About GemHaven" className="rounded-lg shadow-md" />
            </div>
            <div className="w-full md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-4">About SaltMarket</h2>
              <p className="text-gray-600 mb-6">At SaltMarket, we are passionate about bringing the world's most beautiful gemstones to discerning collectors and jewelry enthusiasts. With over two decades of experience in the industry, we pride ourselves on our expertise, quality, and commitment to ethical sourcing.</p>
              <Link to="/about" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-purple-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Gemstone?</h2>
          <p className="text-xl mb-8">Explore our collection and discover the beauty that awaits you.</p>
          <Link to="/products/all" className="bg-white text-purple-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition duration-300">
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;