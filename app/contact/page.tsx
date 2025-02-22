import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-semibold text-center text-[#1E2A47] mb-8">Let's Work Together</h1>
        <p className="text-center text-[#666666] mb-12">
          Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you as soon as possible.
        </p>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FA3E3] focus:border-transparent"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FA3E3] focus:border-transparent"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FA3E3] focus:border-transparent"
              placeholder="Tell me about your project..."
            />
          </div>
          
          <div>
            <button
              type="submit"
              className="w-full bg-[#4FA3E3] text-white py-3 px-6 rounded-md hover:bg-[#3A8AC7] transition-colors duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 