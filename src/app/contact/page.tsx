"use client";

import { useState } from "react";
import Navbar from '@/app/components/Navbar';
import FooterSection from '@/app/components/FooterSection';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('http://127.0.0.1:8000/api/contacts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add CSRF token if your Django requires it
          // 'X-CSRFToken': getCookie('csrftoken'),
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const data = await response.json();
      console.log('Success:', data);
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        location: '',
        message: ''
      });
      
      setStatus('success');
      
      // Clear success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
      
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-20 bg-white text-gray-900">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-green-600 mb-4">Contact Us</h1>
          <p className="text-gray-700 leading-7 mb-6">
            We would love to hear from you. Reach out for prayer, support, or inquiries.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-green-600 mb-2">Visit Us</h2>
              <p className="text-gray-700">Elimor Event Centre, Community 11, Tema (near KFC/Shell)</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-green-600 mb-2">Call</h2>
              <p className="text-gray-700">
                <a href="tel:+233240000000" className="text-green-700 hover:underline">024 000 0000</a>
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-green-600 mb-2">Email</h2>
              <p className="text-gray-700">gloriousheretageministries@gmail.com</p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="mt-12 max-w-3xl">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">Send Us a Message</h2>
            
            {/* Success Message */}
            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                ✓ Thank you! Your message has been sent successfully.
              </div>
            )}
            
            {/* Error Message */}
            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                ✗ {errorMessage}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-md">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter your location"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:bg-green-400 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending...' : 'Submit Message'}
                </button>
              </div>
            </form>
          </div>

          {/* Map Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">Find Us</h2>
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.4!2d-0.013!3d5.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwNDAnNTIuOCJOIDAuMDEz!5e0!3m2!1sen!2sgh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Glorious Heritage Ministries Location"
              ></iframe>
            </div>
            
            <div className="mt-4 text-center">
              <a 
                href="https://www.google.com/maps/search/Community+11+Elimor+Event+Centre+Tema+Ghana"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View on Google Maps
              </a>
            </div>
          </div>
        </section>
        <FooterSection />
      </main>
    </>
  );
}