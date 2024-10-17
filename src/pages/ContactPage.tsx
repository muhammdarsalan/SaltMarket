import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'}}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative z-10 text-4xl font-bold text-white">Contact Us</h1>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap -mx-4">
          {/* Contact Information */}
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">We'd love to hear from you. Whether you have a question about our products, need help with an order, or just want to say hello, our team is here to assist you.</p>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-purple-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">123 Gem Street, Crystal City, GS 12345</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-purple-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-purple-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">info@gemhaven.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2 px-4">
            <form className="bg-gray-100 p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" required />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subject</label>
                <input type="text" id="subject" name="subject" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" required />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" required></textarea>
              </div>
              <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-md transition duration-300">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="h-96 bg-gray-300">
        {/* Replace with an actual map component or embed a Google Map here */}
        <div className="h-full flex items-center justify-center text-gray-500">
          Map placeholder - Replace with actual map component
        </div>
      </div>
    </div>
  );
};

export default ContactPage;