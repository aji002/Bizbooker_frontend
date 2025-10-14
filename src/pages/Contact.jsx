import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen px-6 py-20 md:px-20 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-amber-400 mb-8">
          Contact Us
        </h2>
        <p className="text-center text-gray-300 mb-12">
          Have questions, suggestions, or issues? Reach out to us below and we'll get back to you shortly.
        </p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-amber-500 text-black font-semibold rounded hover:bg-amber-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
