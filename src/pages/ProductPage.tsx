import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';

// Mock data for demonstration
const products = {
  diamond: {
    name: 'Diamond',
    description: 'A brilliant-cut diamond of exceptional clarity and fire.',
    price: 5000,
    rating: 4.9,
    reviews: 120,
    images: [
      'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    ],
  },
  // Add more products as needed
};

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products[id as keyof typeof products];

  if (!product) {
    return <div className="container mx-auto px-4 py-16">Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <div className="relative pb-[100%]">
            <img src={product.images[0]} alt={product.name} className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md" />
          </div>
          <div className="mt-4 flex -mx-2">
            {product.images.map((image, index) => (
              <div key={index} className="px-2 w-1/4">
                <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-24 object-cover rounded-md cursor-pointer" />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current'}`} />
              ))}
            </div>
            <span className="text-gray-600">{product.rating} ({product.reviews} reviews)</span>
          </div>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="text-3xl font-bold text-purple-600 mb-6">${product.price.toLocaleString()}</div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 flex items-center">
            <ShoppingCart className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
      
      {/* Additional sections like product details, specifications, customer reviews, etc. can be added here */}
    </div>
  );
};

export default ProductPage;