import React from 'react';
import { Users, Award, Gem } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'}}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative z-10 text-4xl font-bold text-white">About SaltMarket</h1>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <img src="https://images.unsplash.com/photo-1615655406736-b37c4fabf923?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="GemHaven Store" className="rounded-lg shadow-md" />
            </div>
            <div className="w-full md:w-1/2 md:pl-12">
              <p className="text-gray-600 mb-6">
                Founded in 2000, SaltMarket has been a trusted name in the gemstone industry for over two decades. Our journey began with a passion for the earth's most beautiful treasures and a commitment to bringing them to discerning collectors and jewelry enthusiasts worldwide.
              </p>
              <p className="text-gray-600">
                Over the years, we've built strong relationships with ethical miners and cutters across the globe, ensuring that every gemstone in our collection meets the highest standards of quality and responsible sourcing. Our team of expert gemologists carefully selects each stone, guaranteeing that only the finest specimens make it into our inventory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="mx-auto h-16 w-16 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customer First</h3>
              <p className="text-gray-600">We prioritize our customers' needs and strive to exceed their expectations in every interaction.</p>
            </div>
            <div className="text-center">
              <Award className="mx-auto h-16 w-16 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">We guarantee the authenticity and quality of every gemstone in our collection.</p>
            </div>
            <div className="text-center">
              <Gem className="mx-auto h-16 w-16 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ethical Sourcing</h3>
              <p className="text-gray-600">We are committed to responsible and sustainable practices in gemstone sourcing and trade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['John Doe', 'Jane Smith', 'Mike Johnson'].map((name, index) => (
              <div key={index} className="text-center">
                <img src={`https://source.unsplash.com/300x300/?portrait${index + 1}`} alt={name} className="w-48 h-48 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-semibold mb-2">{name}</h3>
                <p className="text-gray-600">Gemologist</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;