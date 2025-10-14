import React from 'react';

function About() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-30 px-6 md:px-16 text-white">
      {/* Text Content */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">About Biz-Booker</h2>
        <p className="text-sm md:text-base text-gray-300">
          Biz-Booker is an easy-to-use online appointment platform designed to connect customers with trusted local businesses.
          From salons and clinics to tutors and trainers, we make it simple to discover services, check availability, and book in just a few clicks.
        </p>
        <p className="text-sm md:text-base text-gray-400">
          We’re here to help small businesses grow by bringing their services online and making bookings seamless for users. 
          Say goodbye to long waits and hello to smarter scheduling!
        </p>

        {/* Key Features Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Why Choose Biz-Booker?</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
            <li>🔎 <strong>Discover Local Services Easily</strong> – Search and explore a wide range of businesses near you.</li>
            <li>📅 <strong>Book Appointments Instantly</strong> – Schedule appointments in just a few clicks — no more calling or waiting.</li>
            <li>📍 <strong>Location-Based Filtering</strong> – Find services closest to your area based on category and location.</li>
            <li>👤 <strong>User & Provider Accounts</strong> – Seamlessly manage your bookings whether you're a customer or a business owner.</li>
            <li>📂 <strong>Booking History & Status Tracking</strong> – View your upcoming, completed, or canceled appointments at any time.</li>
            <li>⚙️ <strong>Service Provider Dashboard</strong> – Providers can manage their profile, services, and booking availability.</li>
            <li>🔐 <strong>Secure and Simple Login</strong> – Easy sign-up/login process with data stored securely.</li>
            <li>🌐 <strong>Responsive Design</strong> – Fully mobile-friendly — book anytime, anywhere.</li>
          </ul>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2">
        <img
          src="/about.png"
          alt="About Biz-Booker"
          className="rounded-xl shadow-lg w-full max-h-[400px] object-cover"
        />
      </div>
    </div>
  );
}

export default About;
